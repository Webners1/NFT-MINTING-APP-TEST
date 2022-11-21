import * as Sentry from "@sentry/react";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { BigNumber, ethers, getDefaultProvider } from "ethers";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NftProvider } from "use-nft";
import axios from 'axios';
import NFTABI from "../contracts/nftAbi.json";
import AddItemModal from "./components/AddItemModal";
import Demo from "./components/Demo";
import { getLibrary } from "./components/Demo";
import { Nft } from "./components/Nft";
import { Pagination } from "./components/Pagination";
import { create as ipfsHttpClient } from 'ipfs-http-client';
import logger from "./logger";
import { networkName, CHAIN_ID } from "./networkName";
import { MyAwesomeLogo } from "./types";

export const CONTRACT_DEPLOYED_ADDRESS = "0x1A0d00fBe1Fa3860Dbe1AbC6b9dDC6f6d60Bd2A0";
const subdomainName = 'polyplace';
const projectId = '2DZ5SclLb6YJBoDvir5Rh96PAVt';
const projectSecret = 'd44b2bde4d2bb227907264225330c102';
const authorization = `Basic ${btoa(`${projectId}:${projectSecret}`)}`;

const endpointBasePath = `https://${subdomainName}.infura-ipfs.io/ipfs/`;

const client = ipfsHttpClient({
  url: 'https://infura-ipfs.io:5001/api/v0',
  headers: {
    authorization,
  },
});
declare global {
  interface Window {
    ethereum: ethers.providers.ExternalProvider;
  }
}

async function requestAccount() {
  if (window.ethereum?.request) return window.ethereum.request({ method: "eth_requestAccounts" });

  throw new Error("Missing install Metamask. Please access https://metamask.io/ to install extension on your browser");
}

const API_URL = import.meta.env.VITE_API_URL;

function NFTApp() {
  const { library, account } = useWeb3React();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  let [nft,setNFT] = useState<any>([{"id":"1","wallet":"0x0x0","metadata":"https://infura-ipfs.io/ipfs/QmWjgwowSDzssJFvTLHqs4rjTo2SwLmGFzWPbs3mzLFjGW","tokenId":0},{"id":"2","wallet":"0x0x0","metadata":"fdgdfgdfg","tokenId":0},{"id":"3","wallet":"0x0x0","metadata":"https://infura-ipfs.io/ipfs/QmdtLnW8FnKBzG6GboCV2SbE8F4WfSesUVZ76AtHgwnK23","tokenId":0}])
  const limit = 12;

  const fetchTotal = () => {
    logger.warn("fetchTotal");
    const provider = library || new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      CONTRACT_DEPLOYED_ADDRESS,
      NFTABI,
      provider
    ) as MyAwesomeLogo;
    contract
      .currentCounter()
      .then((result) => setTotal(BigNumber.from(result).toNumber()))
      .catch(logger.error);
  };
const fetchNFT=async()=>{
  const {data} = await axios.get('http://localhost:3000/users')
  setNFT(nft = data)
}

  useEffect(() => {
    try {
      fetchNFT()
      fetchTotal();
    } catch (error) {
      logger.error(error);
    }
  }, [library]);

  const onMintNftTokeN = async (tokenUrl: string) => {
    const provider = library || new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      CONTRACT_DEPLOYED_ADDRESS,
      NFTABI,
      signer
    ) as MyAwesomeLogo;
    // get current account
    try {
      if (!account) {
        await requestAccount();
        // TODO: support retry after account is selected
        return;
      }
      const transaction = await contract.freeMint(account, tokenUrl);
      toast.promise(transaction.wait(), {
        loading: `Transaction submitted. Wait for confirmation...`,
        success: <b>Transaction confirmed!</b>,
        error: <b>Transaction failed!.</b>,
      });
      setIsOpen(false);
      const nftData = {wallet:account.toString(),tokenId:total,metadata:tokenUrl};
      (axios.post('http://localhost:3000/users/addNFT',nftData)).then(()=>{
        console.log("Success")
      })
      .catch(error=>{
        console.log(error)
      })
      // refetch total token after processing
      transaction
        .wait()
        .then(() => fetchTotal())
        .catch(logger.error);
    } catch (error) {
      logger.error(error);
    }
  };

  const onUpload = async ({ name, description, file }: { name: string; description: string; file: File }) => {
    toast("Uploading... Please wait for a moment!");
    if (name || description || file) {

    let url;
    console.log("sf")
   
      let added = await client.add({ content: file });
       const fileUrl = `https://infura-ipfs.io/ipfs/${added.path}`;
    console.log(fileUrl)

       const data = JSON.stringify({ name, description, image: fileUrl });
        added = await client.add(data);
console.log(data)
        url = `https://infura-ipfs.io/ipfs/${added.path}`;
 
       

console.log(url)
    return url;
  }
else{
  console.log(name,description,file)
  return null
}
  };

  return (
    <div>
      <h2 className="my-4 text-4xl font-bold">
        NFT Items
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="ml-2 hover:text-green-200 btn btn-lg hover:btn-active"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Add NFT
        </button>
      </h2>

      <AddItemModal
        isOpen={isOpen}
        onAdd={(formData, files) => {
          onUpload({
            name: formData.name,
            description: formData.description,
            file: files[0],
          })
            .then((result) => {
              if (result) {
                // TODO: mit a token
                toast.success(`Uploaded ${result}`);
                return onMintNftTokeN(result);
              }
            })
            .catch(logger.error);
        }}
        onClose={() => setIsOpen(false)}
      />

      <div className="container grid gap-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
     { nft?.map((nftData:any,i:any)=>{
      (
        <Nft key={i} nft={nftData} />
      )
        
      })}
          
      </div>
    </div>
  );
}

const ethersConfig = {
  provider: getDefaultProvider(networkName[Number(CHAIN_ID)] || "homestead"),
};

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Toaster position="top-right" />
      <NftProvider fetcher={["ethers", ethersConfig]}>
        <div className="container mx-auto">
          <Demo />
          <NFTApp />
         
        </div>
      </NftProvider>
    </Web3ReactProvider>
  );
}

export default Sentry.withErrorBoundary(App, { fallback: <p>an error has occurred</p> });

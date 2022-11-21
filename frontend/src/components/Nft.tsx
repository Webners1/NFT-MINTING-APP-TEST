import React from "react";

import Image from "./Image";

export const CONTRACT_DEPLOYED_ADDRESS = "0x1A0d00fBe1Fa3860Dbe1AbC6b9dDC6f6d60Bd2A0";

export function Nft({ nft }: { nft: any }) {
console.log(nft)
  if (!nft)
    return (
      <div className="text-center text-gray-200 bg-gray-700 rounded shadow card">
        <h2 className="my-2 text-4xl font-bold card-title">#{nft?.tokenId}</h2>
        <div className="justify-center items-center card-body">
          <div className="text-center btn btn-ghost btn-sm btn-circle loading">Loading…</div>
        </div>
      </div>
    );

  if (!nft)
    return (
      <div className="alert alert-error">
        <div className="flex-1">
          <label>Error fetching NFT</label>
        </div>
      </div>
    );

  return (
    <div className="text-center text-gray-50 bg-gray-500 rounded-md shadow-md card">
      <h2 className="my-2 text-4xl font-bold card-title">#{nft?.tokenId}</h2>
      <figure className="px-4 pt-4">
        <Image src={nft.image} alt={nft.name} className="mask mask-sircleu" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{nft.name}</h2>
        <p>{nft.description}</p>
        <p>Owner: {nft.wallet}</p>
      </div>
    </div>
  );
}

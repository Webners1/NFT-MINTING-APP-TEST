/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ERC721,
  ERC721Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC721/ERC721";
import type { PromiseOrValue } from "../../../../../common";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200276538038062002765833981810160405281019062000037919062000193565b81600090805190602001906200004f92919062000071565b5080600190805190602001906200006892919062000071565b50505062000376565b8280546200007f906200029b565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b60006200013862000132846200022f565b62000206565b9050828152602081018484840111156200015157600080fd5b6200015e84828562000265565b509392505050565b600082601f8301126200017857600080fd5b81516200018a84826020860162000121565b91505092915050565b60008060408385031215620001a757600080fd5b600083015167ffffffffffffffff811115620001c257600080fd5b620001d08582860162000166565b925050602083015167ffffffffffffffff811115620001ee57600080fd5b620001fc8582860162000166565b9150509250929050565b60006200021262000225565b9050620002208282620002d1565b919050565b6000604051905090565b600067ffffffffffffffff8211156200024d576200024c62000336565b5b620002588262000365565b9050602081019050919050565b60005b838110156200028557808201518184015260208101905062000268565b8381111562000295576000848401525b50505050565b60006002820490506001821680620002b457607f821691505b60208210811415620002cb57620002ca62000307565b5b50919050565b620002dc8262000365565b810181811067ffffffffffffffff82111715620002fe57620002fd62000336565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6123df80620003866000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e9919061196f565b6102bc565b6040516100fb9190611c80565b60405180910390f35b61010c61039e565b6040516101199190611c9b565b60405180910390f35b61013c600480360381019061013791906119c1565b610430565b6040516101499190611c19565b60405180910390f35b61016c60048036038101906101679190611933565b610476565b005b6101886004803603810190610183919061182d565b61058e565b005b6101a4600480360381019061019f919061182d565b6105ee565b005b6101c060048036038101906101bb91906119c1565b61060e565b6040516101cd9190611c19565b60405180910390f35b6101f060048036038101906101eb91906117c8565b610695565b6040516101fd9190611ddd565b60405180910390f35b61020e61074d565b60405161021b9190611c9b565b60405180910390f35b61023e600480360381019061023991906118f7565b6107df565b005b61025a6004803603810190610255919061187c565b6107f5565b005b610276600480360381019061027191906119c1565b610857565b6040516102839190611c9b565b60405180910390f35b6102a660048036038101906102a191906117f1565b6108bf565b6040516102b39190611c80565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610397575061039682610953565b5b9050919050565b6060600080546103ad90611fd1565b80601f01602080910402602001604051908101604052809291908181526020018280546103d990611fd1565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b826109bd565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104818261060e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156104f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e990611d9d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610511610a08565b73ffffffffffffffffffffffffffffffffffffffff161480610540575061053f8161053a610a08565b6108bf565b5b61057f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057690611dbd565b60405180910390fd5b6105898383610a10565b505050565b61059f610599610a08565b82610ac9565b6105de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d590611cbd565b60405180910390fd5b6105e9838383610b5e565b505050565b610609838383604051806020016040528060008152506107f5565b505050565b60008061061a83610e58565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561068c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068390611d7d565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610706576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fd90611d5d565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461075c90611fd1565b80601f016020809104026020016040519081016040528092919081815260200182805461078890611fd1565b80156107d55780601f106107aa576101008083540402835291602001916107d5565b820191906000526020600020905b8154815290600101906020018083116107b857829003601f168201915b5050505050905090565b6107f16107ea610a08565b8383610e95565b5050565b610806610800610a08565b83610ac9565b610845576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083c90611cbd565b60405180910390fd5b61085184848484611002565b50505050565b6060610862826109bd565b600061086c61105e565b9050600081511161088c57604051806020016040528060008152506108b7565b8061089684611075565b6040516020016108a7929190611bf5565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6109c681611199565b610a05576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109fc90611d7d565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610a838361060e565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610ad58361060e565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610b175750610b1681856108bf565b5b80610b5557508373ffffffffffffffffffffffffffffffffffffffff16610b3d84610430565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610b7e8261060e565b73ffffffffffffffffffffffffffffffffffffffff1614610bd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bcb90611cfd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3b90611d1d565b60405180910390fd5b610c5183838360016111da565b8273ffffffffffffffffffffffffffffffffffffffff16610c718261060e565b73ffffffffffffffffffffffffffffffffffffffff1614610cc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cbe90611cfd565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610e538383836001611300565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610efb90611d3d565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610ff59190611c80565b60405180910390a3505050565b61100d848484610b5e565b61101984848484611306565b611058576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104f90611cdd565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b6060600060016110848461149d565b01905060008167ffffffffffffffff8111156110c9577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156110fb5781602001600182028036833780820191505090505b509050600082602001820190505b60011561118e578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611178577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b04945060008514156111895761118e565b611109565b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166111bb83610e58565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b60018111156112fa57600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461126e5780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112669190611ee7565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146112f95780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112f19190611e91565b925050819055505b5b50505050565b50505050565b60006113278473ffffffffffffffffffffffffffffffffffffffff166116d4565b15611490578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611350610a08565b8786866040518563ffffffff1660e01b81526004016113729493929190611c34565b602060405180830381600087803b15801561138c57600080fd5b505af19250505080156113bd57506040513d601f19601f820116820180604052508101906113ba9190611998565b60015b611440573d80600081146113ed576040519150601f19603f3d011682016040523d82523d6000602084013e6113f2565b606091505b50600081511415611438576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142f90611cdd565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611495565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611521577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611517577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611584576d04ee2d6d415b85acef8100000000838161157a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506020810190505b662386f26fc1000083106115d957662386f26fc1000083816115cf577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506010810190505b6305f5e1008310611628576305f5e100838161161e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506008810190505b6127108310611673576127108381611669577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506004810190505b606483106116bc57606483816116b2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506002810190505b600a83106116cb576001810190505b80915050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600061170a61170584611e1d565b611df8565b90508281526020810184848401111561172257600080fd5b61172d848285611f8f565b509392505050565b6000813590506117448161234d565b92915050565b60008135905061175981612364565b92915050565b60008135905061176e8161237b565b92915050565b6000815190506117838161237b565b92915050565b600082601f83011261179a57600080fd5b81356117aa8482602086016116f7565b91505092915050565b6000813590506117c281612392565b92915050565b6000602082840312156117da57600080fd5b60006117e884828501611735565b91505092915050565b6000806040838503121561180457600080fd5b600061181285828601611735565b925050602061182385828601611735565b9150509250929050565b60008060006060848603121561184257600080fd5b600061185086828701611735565b935050602061186186828701611735565b9250506040611872868287016117b3565b9150509250925092565b6000806000806080858703121561189257600080fd5b60006118a087828801611735565b94505060206118b187828801611735565b93505060406118c2878288016117b3565b925050606085013567ffffffffffffffff8111156118df57600080fd5b6118eb87828801611789565b91505092959194509250565b6000806040838503121561190a57600080fd5b600061191885828601611735565b92505060206119298582860161174a565b9150509250929050565b6000806040838503121561194657600080fd5b600061195485828601611735565b9250506020611965858286016117b3565b9150509250929050565b60006020828403121561198157600080fd5b600061198f8482850161175f565b91505092915050565b6000602082840312156119aa57600080fd5b60006119b884828501611774565b91505092915050565b6000602082840312156119d357600080fd5b60006119e1848285016117b3565b91505092915050565b6119f381611f1b565b82525050565b611a0281611f2d565b82525050565b6000611a1382611e4e565b611a1d8185611e64565b9350611a2d818560208601611f9e565b611a36816120c1565b840191505092915050565b6000611a4c82611e59565b611a568185611e75565b9350611a66818560208601611f9e565b611a6f816120c1565b840191505092915050565b6000611a8582611e59565b611a8f8185611e86565b9350611a9f818560208601611f9e565b80840191505092915050565b6000611ab8602d83611e75565b9150611ac3826120d2565b604082019050919050565b6000611adb603283611e75565b9150611ae682612121565b604082019050919050565b6000611afe602583611e75565b9150611b0982612170565b604082019050919050565b6000611b21602483611e75565b9150611b2c826121bf565b604082019050919050565b6000611b44601983611e75565b9150611b4f8261220e565b602082019050919050565b6000611b67602983611e75565b9150611b7282612237565b604082019050919050565b6000611b8a601883611e75565b9150611b9582612286565b602082019050919050565b6000611bad602183611e75565b9150611bb8826122af565b604082019050919050565b6000611bd0603d83611e75565b9150611bdb826122fe565b604082019050919050565b611bef81611f85565b82525050565b6000611c018285611a7a565b9150611c0d8284611a7a565b91508190509392505050565b6000602082019050611c2e60008301846119ea565b92915050565b6000608082019050611c4960008301876119ea565b611c5660208301866119ea565b611c636040830185611be6565b8181036060830152611c758184611a08565b905095945050505050565b6000602082019050611c9560008301846119f9565b92915050565b60006020820190508181036000830152611cb58184611a41565b905092915050565b60006020820190508181036000830152611cd681611aab565b9050919050565b60006020820190508181036000830152611cf681611ace565b9050919050565b60006020820190508181036000830152611d1681611af1565b9050919050565b60006020820190508181036000830152611d3681611b14565b9050919050565b60006020820190508181036000830152611d5681611b37565b9050919050565b60006020820190508181036000830152611d7681611b5a565b9050919050565b60006020820190508181036000830152611d9681611b7d565b9050919050565b60006020820190508181036000830152611db681611ba0565b9050919050565b60006020820190508181036000830152611dd681611bc3565b9050919050565b6000602082019050611df26000830184611be6565b92915050565b6000611e02611e13565b9050611e0e8282612003565b919050565b6000604051905090565b600067ffffffffffffffff821115611e3857611e37612092565b5b611e41826120c1565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611e9c82611f85565b9150611ea783611f85565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611edc57611edb612034565b5b828201905092915050565b6000611ef282611f85565b9150611efd83611f85565b925082821015611f1057611f0f612034565b5b828203905092915050565b6000611f2682611f65565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611fbc578082015181840152602081019050611fa1565b83811115611fcb576000848401525b50505050565b60006002820490506001821680611fe957607f821691505b60208210811415611ffd57611ffc612063565b5b50919050565b61200c826120c1565b810181811067ffffffffffffffff8211171561202b5761202a612092565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b61235681611f1b565b811461236157600080fd5b50565b61236d81611f2d565b811461237857600080fd5b50565b61238481611f39565b811461238f57600080fd5b50565b61239b81611f85565b81146123a657600080fd5b5056fea2646970667358221220655f8874a44849536c27d3d91af607a2536bac828e59188fefce18ad471c90b164736f6c63430008040033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  override connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}

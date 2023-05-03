/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FlowGenEdition,
  FlowGenEditionInterface,
} from "../FlowGenEdition";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "marketplaceAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "accessControlAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_preSalePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_countDownTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_royaltyBPS",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_baseUri",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintERC2309QuantityExceedsLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnershipNotInitializedForExtraData",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
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
        indexed: false,
        internalType: "uint256",
        name: "currentIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "AssetCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "ownerOrApproved",
        type: "address",
      },
    ],
    name: "AssetDestroyed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
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
    ],
    name: "ConsecutiveTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isRentable",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "renter",
        type: "address",
      },
    ],
    name: "RentalInfo",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "expires",
        type: "uint64",
      },
    ],
    name: "UpdateUser",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "amountRequired",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    stateMutability: "payable",
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
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "burnNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "countDownTime",
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
    name: "marketplace",
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
    inputs: [],
    name: "maxSupply",
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
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
    inputs: [],
    name: "preSalePrice",
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
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timeInHours",
        type: "uint256",
      },
    ],
    name: "rent",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rentables",
    outputs: [
      {
        internalType: "bool",
        name: "isRentable",
        type: "bool",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "expires",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "hourlyRate",
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
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
    stateMutability: "payable",
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
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "salePrice",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isRentable",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "pricePerHour",
        type: "uint256",
      },
    ],
    name: "setRentInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "expires",
        type: "uint64",
      },
    ],
    name: "setUser",
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
    inputs: [],
    name: "totalSupply",
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
    stateMutability: "payable",
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
    name: "userExpires",
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
    name: "userOf",
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
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b50604051620025d6380380620025d68339810160408190526200003491620002bb565b8989600462000044838262000433565b50600562000053828262000433565b5060016002555050600e80546001600160a01b03808a166001600160a01b031992831617909255600b8054928b1692909116919091179055600c8690556080859052620000a18442620004ff565b60a05260c0839052600a620000b7828262000433565b50620000c43383620000d4565b5050505050505050505062000527565b6127106001600160601b0382161115620001485760405162461bcd60e51b815260206004820152602a60248201527f455243323938313a20726f79616c7479206665652077696c6c206578636565646044820152692073616c65507269636560b01b60648201526084015b60405180910390fd5b6001600160a01b038216620001a05760405162461bcd60e51b815260206004820152601960248201527f455243323938313a20696e76616c69642072656365697665720000000000000060448201526064016200013f565b604080518082019091526001600160a01b039092168083526001600160601b039091166020909201829052600160a01b90910217600055565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200020157600080fd5b81516001600160401b03808211156200021e576200021e620001d9565b604051601f8301601f19908116603f01168101908282118183101715620002495762000249620001d9565b816040528381526020925086838588010111156200026657600080fd5b600091505b838210156200028a57858201830151818301840152908201906200026b565b600093810190920192909252949350505050565b80516001600160a01b0381168114620002b657600080fd5b919050565b6000806000806000806000806000806101408b8d031215620002dc57600080fd5b8a516001600160401b0380821115620002f457600080fd5b620003028e838f01620001ef565b9b5060208d01519150808211156200031957600080fd5b620003278e838f01620001ef565b9a506200033760408e016200029e565b99506200034760608e016200029e565b985060808d0151975060a08d0151965060c08d0151955060e08d015194506101008d015193506101208d01519150808211156200038357600080fd5b50620003928d828e01620001ef565b9150509295989b9194979a5092959850565b600181811c90821680620003b957607f821691505b602082108103620003da57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200042e57600081815260208120601f850160051c81016020861015620004095750805b601f850160051c820191505b818110156200042a5782815560010162000415565b5050505b505050565b81516001600160401b038111156200044f576200044f620001d9565b6200046781620004608454620003a4565b84620003e0565b602080601f8311600181146200049f5760008415620004865750858301515b600019600386901b1c1916600185901b1785556200042a565b600085815260208120601f198616915b82811015620004d057888601518255948401946001909101908401620004af565b5085821015620004ef5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200052157634e487b7160e01b600052601160045260246000fd5b92915050565b60805160a05160c05161206a6200056c600039600081816105e201526110610152600081816103310152611101015260008181610636015261112b015261206a6000f3fe6080604052600436106101d85760003560e01c8063783a112b11610102578063ba91caae11610095578063e030565e11610064578063e030565e14610604578063e757c17d14610624578063e985e9c514610658578063f51f96dd1461067857600080fd5b8063ba91caae14610570578063c2f1f14a14610590578063c87b56dd146105b0578063d5abeb01146105d057600080fd5b8063a0712d68116100d1578063a0712d68146104f5578063a22cb4651461051d578063abc8c7af1461053d578063b88d4fde1461055d57600080fd5b8063783a112b146103fb5780638fc88c481461040e57806395d89b411461044c5780639874cd971461046157600080fd5b80632a55205a1161017a57806342966c681161014957806342966c681461037b5780636352211e1461039b578063655bc8db146103bb57806370a08231146103db57600080fd5b80632a55205a146102e05780633692d1181461031f5780633ccfd60b1461035357806342842e0e1461036857600080fd5b8063095ea7b3116101b6578063095ea7b31461026c57806318160ddd1461028157806323b872dd146102ad5780632890e0d7146102c057600080fd5b806301ffc9a7146101dd57806306fdde0314610212578063081812fc14610234575b600080fd5b3480156101e957600080fd5b506101fd6101f8366004611b0e565b61068e565b60405190151581526020015b60405180910390f35b34801561021e57600080fd5b506102276106df565b6040516102099190611b7b565b34801561024057600080fd5b5061025461024f366004611b8e565b610771565b6040516001600160a01b039091168152602001610209565b61027f61027a366004611bbe565b6107ac565b005b34801561028d57600080fd5b5061029f600354600254036000190190565b604051908152602001610209565b61027f6102bb366004611be8565b6107bc565b3480156102cc57600080fd5b5061027f6102db366004611b8e565b61092b565b3480156102ec57600080fd5b506103006102fb366004611c24565b610a17565b604080516001600160a01b039093168352602083019190915201610209565b34801561032b57600080fd5b5061029f7f000000000000000000000000000000000000000000000000000000000000000081565b34801561035f57600080fd5b5061027f610ac3565b61027f610376366004611be8565b610c45565b34801561038757600080fd5b5061027f610396366004611b8e565b610c65565b3480156103a757600080fd5b506102546103b6366004611b8e565b610c70565b3480156103c757600080fd5b5061027f6103d6366004611c54565b610c7b565b3480156103e757600080fd5b5061029f6103f6366004611c8c565b610d2c565b61027f610409366004611c24565b610d72565b34801561041a57600080fd5b5061029f610429366004611b8e565b6000908152600d6020526040902054600160a81b900467ffffffffffffffff1690565b34801561045857600080fd5b5061022761104d565b34801561046d57600080fd5b506104bc61047c366004611b8e565b600d602052600090815260409020805460019091015460ff82169161010081046001600160a01b031691600160a81b90910467ffffffffffffffff169084565b6040805194151585526001600160a01b03909316602085015267ffffffffffffffff909116918301919091526060820152608001610209565b610508610503366004611b8e565b61105c565b60408051928352602083019190915201610209565b34801561052957600080fd5b5061027f610538366004611ca7565b611222565b34801561054957600080fd5b50600b54610254906001600160a01b031681565b61027f61056b366004611cf4565b61128e565b34801561057c57600080fd5b5061029f61058b366004611c24565b6112cf565b34801561059c57600080fd5b506102546105ab366004611b8e565b6112f3565b3480156105bc57600080fd5b506102276105cb366004611b8e565b611348565b3480156105dc57600080fd5b5061029f7f000000000000000000000000000000000000000000000000000000000000000081565b34801561061057600080fd5b5061027f61061f366004611dd0565b6113c2565b34801561063057600080fd5b5061029f7f000000000000000000000000000000000000000000000000000000000000000081565b34801561066457600080fd5b506101fd610673366004611e1d565b611529565b34801561068457600080fd5b5061029f600c5481565b6000636ad56fd360e11b6001600160e01b03198316016106b057506001919050565b6314bdb52960e21b6001600160e01b03198316016106d057506001919050565b6106d982611557565b92915050565b6060600480546106ee90611e50565b80601f016020809104026020016040519081016040528092919081815260200182805461071a90611e50565b80156107675780601f1061073c57610100808354040283529160200191610767565b820191906000526020600020905b81548152906001019060200180831161074a57829003601f168201915b5050505050905090565b600061077c826115a5565b610790576107906333d1c03960e21b6115f1565b506000908152600860205260409020546001600160a01b031690565b6107b8828260016115fb565b5050565b60006107c78261169e565b6001600160a01b0394851694909150811684146107ed576107ed62a1148160e81b6115f1565b600082815260086020526040902080546108198187335b6001600160a01b039081169116811491141790565b61083b576108278633611529565b61083b5761083b632ce44b5f60e11b6115f1565b801561084657600082555b6001600160a01b038681166000908152600760205260408082208054600019019055918716808252919020805460010190554260a01b17600160e11b17600085815260066020526040812091909155600160e11b841690036108d8576001840160008181526006602052604081205490036108d65760025481146108d65760008181526006602052604090208490555b505b6001600160a01b0385168481887fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a48060000361092257610922633a954ecd60e21b6115f1565b50505050505050565b600061093682610c70565b90503361094283610c70565b6001600160a01b0316148061095c575061095c8133611529565b6109bb5760405162461bcd60e51b815260206004820152602560248201527f466c6f7747656e45646974696f6e3a204e6f74204f776e6572204f72204170706044820152641c9bdd995960da1b60648201526084015b60405180910390fd5b6109c682600161173f565b600082815260016020526040812055817fc3a3686eed3b315ba4f3b1a0bf88b63a4525e3f27314495ba7dc0a40a6c4cd90336040516001600160a01b03909116815260200160405180910390a25050565b60008281526001602090815260408083208151808301909252546001600160a01b038116808352600160a01b9091046001600160601b0316928201929092528291610a8c5750604080518082019091526000546001600160a01b0381168252600160a01b90046001600160601b031660208201525b602081015160009061271090610aab906001600160601b031687611ea0565b610ab59190611eb7565b915196919550909350505050565b600e546001600160a01b03166324d7806c336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015610b19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3d9190611ed9565b610ba05760405162461bcd60e51b815260206004820152602e60248201527f4d7972696164466c6f774f6666657253746174696f6e3a20557365722069732060448201526d1b9bdd08185d5d1a1bdc9a5e995960921b60648201526084016109b2565b604051600090339047908381818185875af1925050503d8060008114610be2576040519150601f19603f3d011682016040523d82523d6000602084013e610be7565b606091505b5050905080610c425760405162461bcd60e51b815260206004820152602160248201527f466c6f7747656e45646974696f6e3a205769746864726177616c206661696c656044820152601960fa1b60648201526084016109b2565b50565b610c608383836040518060200160405280600081525061128e565b505050565b610c4281600161173f565b60006106d98261169e565b6000610c8684610c70565b90506001600160a01b038116331480610ca45750610ca48133611529565b610cc05760405162461bcd60e51b81526004016109b290611ef6565b6000848152600d6020908152604091829020805460ff19168615159081178255600190910185905582518781529182015290810183905233907fa9dcc06084f66afbdc1841a28e84400fcbf607131220fdcf404c8502f3c032039060600160405180910390a250505050565b60006001600160a01b038216610d4c57610d4c6323d3ad8160e21b6115f1565b506001600160a01b031660009081526007602052604090205467ffffffffffffffff1690565b6000828152600d602052604090205460ff16610ddf5760405162461bcd60e51b815260206004820152602660248201527f466c6f7747656e45646974696f6e3a204e6f7420617661696c61626c6520666f6044820152651c881c995b9d60d21b60648201526084016109b2565b6000610dea836112f3565b6001600160a01b031614610e4f5760405162461bcd60e51b815260206004820152602660248201527f466c6f7747656e45646974696f6e3a204e465420416c7265616479205375627360448201526518dc9a58995960d21b60648201526084016109b2565b60008111610eb65760405162461bcd60e51b815260206004820152602e60248201527f466c6f7747656e45646974696f6e3a2054696d652063616e2774206265206c6560448201526d39b9903a3430b71018903437bab960911b60648201526084016109b2565b6110e0811115610f215760405162461bcd60e51b815260206004820152603060248201527f466c6f7747656e45646974696f6e3a2054696d652063616e2774206265206d6f60448201526f7265207468616e2036206d6f6e74687360801b60648201526084016109b2565b6000610f2d83836112cf565b905080341015610f8a5760405162461bcd60e51b815260206004820152602260248201527f466c6f7747656e45646974696f6e3a20496e73756666696369656e742046756e604482015261647360f01b60648201526084016109b2565b6000838152600d602052604090208054610100600160a81b0319166101003302178155610fb983610e10611ea0565b610fc39042611f40565b815467ffffffffffffffff91909116600160a81b0267ffffffffffffffff60a81b19909116178155610ff23390565b8154604051600160a81b90910467ffffffffffffffff1681526001600160a01b03919091169085907f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe9060200160405180910390a350505050565b6060600580546106ee90611e50565b6000807f000000000000000000000000000000000000000000000000000000000000000083611092600354600254036000190190565b61109c9190611f40565b11156110fe5760405162461bcd60e51b815260206004820152602b60248201527f466c6f7747656e45646974696f6e3a20657863656564696e67206d617820746f60448201526a6b656e20737570706c792160a81b60648201526084016109b2565b427f00000000000000000000000000000000000000000000000000000000000000001115611174576111507f000000000000000000000000000000000000000000000000000000000000000084611ea0565b34101561116f5760405162461bcd60e51b81526004016109b290611f53565b6111a0565b600c546111819084611ea0565b3410156111a05760405162461bcd60e51b81526004016109b290611f53565b6111aa3384611881565b600b546111c1906001600160a01b03166001611222565b337fe4dcce960639dbdb2bb468ca46dec284619042032dee01c52a705a713350f4306111f4600354600254036000190190565b60408051918252602082018790520160405180910390a261121c600354600254036000190190565b93915050565b3360008181526009602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6112998484846107bc565b6001600160a01b0383163b156112c9576112b58484848461189b565b6112c9576112c96368d2bf6b60e11b6115f1565b50505050565b6000828152600d60205260408120600101546112ec908390611ea0565b9392505050565b6000818152600d602052604081205442600160a81b90910467ffffffffffffffff161061133b57506000908152600d602052604090205461010090046001600160a01b031690565b506000919050565b919050565b6060611353826115a5565b61136757611367630a14c4b560e41b6115f1565b600061137161197d565b9050805160000361139157604051806020016040528060008152506112ec565b8061139b8461198c565b6040516020016113ac929190611f94565b6040516020818303038152906040529392505050565b60006113cd84610c70565b90506001600160a01b0381163314806113eb57506113eb8133611529565b6114075760405162461bcd60e51b81526004016109b290611ef6565b6000611412856112f3565b6001600160a01b03161461147b5760405162461bcd60e51b815260206004820152602a60248201527f466c6f7747656e45646974696f6e3a204974656d20697320616c7265616479206044820152691cdd589cd8dc9a58995960b21b60648201526084016109b2565b6000848152600d602052604090208054610100600160a81b0319166101006001600160a01b038616021781556114bb67ffffffffffffffff841642611f40565b815467ffffffffffffffff60a81b1916600160a81b67ffffffffffffffff9283160217825560405190841681526001600160a01b0385169086907f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe9060200160405180910390a35050505050565b6001600160a01b03918216600090815260096020908152604080832093909416825291909152205460ff1690565b60006301ffc9a760e01b6001600160e01b03198316148061158857506380ac58cd60e01b6001600160e01b03198316145b806106d95750506001600160e01b031916635b5e139f60e01b1490565b600081600111611343576002548210156113435760005b50600082815260066020526040812054908190036115e4576115dd83611fc3565b92506115bc565b600160e01b161592915050565b8060005260046000fd5b600061160683610c70565b905081801561161e5750336001600160a01b03821614155b156116415761162d8133611529565b611641576116416367d9dca160e11b6115f1565b60008381526008602052604080822080546001600160a01b0319166001600160a01b0388811691821790925591518693918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a450505050565b60008160011161172f57506000818152600660205260408120549081900361171c5760025482106116d9576116d9636f96cda160e11b6115f1565b5b506000190160008181526006602052604090205480156116da57600160e01b811660000361170757919050565b611717636f96cda160e11b6115f1565b6116da565b600160e01b811660000361172f57919050565b611343636f96cda160e11b6115f1565b600061174a8361169e565b90508060008061176886600090815260086020526040902080549091565b91509150841561179f5761177d818433610804565b61179f5761178b8333611529565b61179f5761179f632ce44b5f60e11b6115f1565b80156117aa57600082555b6001600160a01b038316600081815260076020526040902080546fffffffffffffffffffffffffffffffff0190554260a01b17600360e01b17600087815260066020526040812091909155600160e11b85169003611838576001860160008181526006602052604081205490036118365760025481146118365760008181526006602052604090208590555b505b60405186906000906001600160a01b038616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a4505060038054600101905550505050565b6107b88282604051806020016040528060008152506119d0565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a02906118d0903390899088908890600401611fda565b6020604051808303816000875af192505050801561190b575060408051601f3d908101601f1916820190925261190891810190612017565b60015b611960573d808015611939576040519150601f19603f3d011682016040523d82523d6000602084013e61193e565b606091505b508051600003611958576119586368d2bf6b60e11b6115f1565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b6060600a80546106ee90611e50565b606060a06040510180604052602081039150506000815280825b600183039250600a81066030018353600a9004806119a65750819003601f19909101908152919050565b6119da8383611a39565b6001600160a01b0383163b15610c60576002548281035b611a04600086838060010194508661189b565b611a1857611a186368d2bf6b60e11b6115f1565b8181106119f1578160025414611a3257611a3260006115f1565b5050505050565b6002546000829003611a5557611a5563b562e8dd60e01b6115f1565b60008181526006602090815260408083206001600160a01b0387164260a01b6001881460e11b17811790915580845260079092528220805468010000000000000001860201905590819003611ab357611ab3622e076360e81b6115f1565b818301825b808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4818160010191508103611ab8575060025550505050565b6001600160e01b031981168114610c4257600080fd5b600060208284031215611b2057600080fd5b81356112ec81611af8565b60005b83811015611b46578181015183820152602001611b2e565b50506000910152565b60008151808452611b67816020860160208601611b2b565b601f01601f19169290920160200192915050565b6020815260006112ec6020830184611b4f565b600060208284031215611ba057600080fd5b5035919050565b80356001600160a01b038116811461134357600080fd5b60008060408385031215611bd157600080fd5b611bda83611ba7565b946020939093013593505050565b600080600060608486031215611bfd57600080fd5b611c0684611ba7565b9250611c1460208501611ba7565b9150604084013590509250925092565b60008060408385031215611c3757600080fd5b50508035926020909101359150565b8015158114610c4257600080fd5b600080600060608486031215611c6957600080fd5b833592506020840135611c7b81611c46565b929592945050506040919091013590565b600060208284031215611c9e57600080fd5b6112ec82611ba7565b60008060408385031215611cba57600080fd5b611cc383611ba7565b91506020830135611cd381611c46565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611d0a57600080fd5b611d1385611ba7565b9350611d2160208601611ba7565b925060408501359150606085013567ffffffffffffffff80821115611d4557600080fd5b818701915087601f830112611d5957600080fd5b813581811115611d6b57611d6b611cde565b604051601f8201601f19908116603f01168101908382118183101715611d9357611d93611cde565b816040528281528a6020848701011115611dac57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080600060608486031215611de557600080fd5b83359250611df560208501611ba7565b9150604084013567ffffffffffffffff81168114611e1257600080fd5b809150509250925092565b60008060408385031215611e3057600080fd5b611e3983611ba7565b9150611e4760208401611ba7565b90509250929050565b600181811c90821680611e6457607f821691505b602082108103611e8457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176106d9576106d9611e8a565b600082611ed457634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215611eeb57600080fd5b81516112ec81611c46565b6020808252602a908201527f466c6f7747656e45646974696f6e3a2043616c6c6572206973206e6f7420746f604082015269035b2b71037bbb732b9160b51b606082015260800190565b808201808211156106d9576106d9611e8a565b60208082526021908201527f466c6f7747656e45646974696f6e3a204e6f7420656e6f7567682066756e64736040820152602160f81b606082015260800190565b60008351611fa6818460208801611b2b565b835190830190611fba818360208801611b2b565b01949350505050565b600081611fd257611fd2611e8a565b506000190190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061200d90830184611b4f565b9695505050505050565b60006020828403121561202957600080fd5b81516112ec81611af856fea2646970667358221220b15ced2979b58fe1abf6d3070a50e2e088afea73f918fedd6ff1368158c113df64736f6c63430008110033";

type FlowGenEditionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FlowGenEditionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FlowGenEdition__factory extends ContractFactory {
  constructor(...args: FlowGenEditionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FlowGenEdition";
  }

  deploy(
    name: string,
    symbol: string,
    marketplaceAddress: string,
    accessControlAddress: string,
    _salePrice: BigNumberish,
    _preSalePrice: BigNumberish,
    _countDownTime: BigNumberish,
    _maxSupply: BigNumberish,
    _royaltyBPS: BigNumberish,
    _baseUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FlowGenEdition> {
    return super.deploy(
      name,
      symbol,
      marketplaceAddress,
      accessControlAddress,
      _salePrice,
      _preSalePrice,
      _countDownTime,
      _maxSupply,
      _royaltyBPS,
      _baseUri,
      overrides || {}
    ) as Promise<FlowGenEdition>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    marketplaceAddress: string,
    accessControlAddress: string,
    _salePrice: BigNumberish,
    _preSalePrice: BigNumberish,
    _countDownTime: BigNumberish,
    _maxSupply: BigNumberish,
    _royaltyBPS: BigNumberish,
    _baseUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      marketplaceAddress,
      accessControlAddress,
      _salePrice,
      _preSalePrice,
      _countDownTime,
      _maxSupply,
      _royaltyBPS,
      _baseUri,
      overrides || {}
    );
  }
  attach(address: string): FlowGenEdition {
    return super.attach(address) as FlowGenEdition;
  }
  connect(signer: Signer): FlowGenEdition__factory {
    return super.connect(signer) as FlowGenEdition__factory;
  }
  static readonly contractName: "FlowGenEdition";
  public readonly contractName: "FlowGenEdition";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FlowGenEditionInterface {
    return new utils.Interface(_abi) as FlowGenEditionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlowGenEdition {
    return new Contract(address, _abi, signerOrProvider) as FlowGenEdition;
  }
}

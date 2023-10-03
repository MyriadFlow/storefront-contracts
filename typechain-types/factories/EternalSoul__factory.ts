/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EternalSoul, EternalSoulInterface } from "../EternalSoul";

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
        internalType: "string",
        name: "_intialURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "flowContract",
        type: "address",
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
        name: "tokenID",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "metaDataURI",
        type: "string",
      },
    ],
    name: "AssetIssued",
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
    inputs: [],
    name: "baseURI",
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
        name: "creator",
        type: "address",
      },
      {
        internalType: "string",
        name: "metadataURI",
        type: "string",
      },
    ],
    name: "delegateIssue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
    name: "destroyAsset",
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
    inputs: [
      {
        internalType: "string",
        name: "metadataURI",
        type: "string",
      },
    ],
    name: "issue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "setBaseURI",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600c805460ff191660011790553480156200001e57600080fd5b506040516200234538038062002345833981016040819052620000419162000169565b83836000620000518382620002ab565b506001620000608282620002ab565b50600b91506200007390508382620002ab565b50600c80546001600160a01b0390921661010002610100600160a81b03199092169190911790555062000377915050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000cc57600080fd5b81516001600160401b0380821115620000e957620000e9620000a4565b604051601f8301601f19908116603f01168101908282118183101715620001145762000114620000a4565b816040528381526020925086838588010111156200013157600080fd5b600091505b8382101562000155578582018301518183018401529082019062000136565b600093810190920192909252949350505050565b600080600080608085870312156200018057600080fd5b84516001600160401b03808211156200019857600080fd5b620001a688838901620000ba565b95506020870151915080821115620001bd57600080fd5b620001cb88838901620000ba565b94506040870151915080821115620001e257600080fd5b50620001f187828801620000ba565b606087015190935090506001600160a01b03811681146200021157600080fd5b939692955090935050565b600181811c908216806200023157607f821691505b6020821081036200025257634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002a657600081815260208120601f850160051c81016020861015620002815750805b601f850160051c820191505b81811015620002a2578281556001016200028d565b5050505b505050565b81516001600160401b03811115620002c757620002c7620000a4565b620002df81620002d884546200021c565b8462000258565b602080601f831160018114620003175760008415620002fe5750858301515b600019600386901b1c1916600185901b178555620002a2565b600085815260208120601f198616915b82811015620003485788860151825594840194600190910190840162000327565b5085821015620003675787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611fbe80620003876000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806354fd4d50116100b857806370a082311161007c57806370a08231146102a857806395d89b41146102bb578063a22cb465146102c3578063b88d4fde146102d6578063c87b56dd146102e9578063e985e9c5146102fc57600080fd5b806354fd4d501461024857806355f804b3146102675780636352211e1461027a5780636771309b1461028d5780636c0360eb146102a057600080fd5b806323b872dd1161010a57806323b872dd146101d65780632f745c59146101e95780633cad9b0d146101fc57806342842e0e1461020f578063474c1520146102225780634f6ccce71461023557600080fd5b806301ffc9a71461014757806306fdde031461016f578063081812fc14610184578063095ea7b3146101af57806318160ddd146101c4575b600080fd5b61015a61015536600461190a565b610338565b60405190151581526020015b60405180910390f35b610177610349565b604051610166919061196d565b610197610192366004611980565b6103db565b6040516001600160a01b039091168152602001610166565b6101c26101bd3660046119b0565b610402565b005b6008545b604051908152602001610166565b6101c26101e43660046119da565b61051c565b6101c86101f73660046119b0565b61054e565b6101c861020a366004611ac2565b6105e4565b6101c261021d3660046119da565b610737565b6101c2610230366004611980565b610752565b6101c8610243366004611980565b61080c565b600c546102559060ff1681565b60405160ff9091168152602001610166565b6101c2610275366004611ac2565b61089f565b610197610288366004611980565b61094a565b6101c861029b366004611af7565b6109aa565b610177610ac0565b6101c86102b6366004611b45565b610b4e565b610177610bd4565b6101c26102d1366004611b6e565b610be3565b6101c26102e4366004611ba5565b610bee565b6101776102f7366004611980565b610c26565b61015a61030a366004611c21565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b600061034382610d5e565b92915050565b60606000805461035890611c54565b80601f016020809104026020016040519081016040528092919081815260200182805461038490611c54565b80156103d15780601f106103a6576101008083540402835291602001916103d1565b820191906000526020600020905b8154815290600101906020018083116103b457829003601f168201915b5050505050905090565b60006103e682610d83565b506000908152600460205260409020546001600160a01b031690565b600061040d8261094a565b9050806001600160a01b0316836001600160a01b03160361047f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061049b575061049b813361030a565b61050d5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610476565b6105178383610de5565b505050565b610527335b82610e53565b6105435760405162461bcd60e51b815260040161047690611c8e565b610517838383610ed2565b600061055983610b4e565b82106105bb5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610476565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b600c5460009061010090046001600160a01b031663efd46065336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015610642573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106669190611cdb565b6106be5760405162461bcd60e51b815260206004820152602360248201527f457465726e616c536f756c3a2055736572206973206e6f7420617574686f72696044820152621e995960ea1b6064820152608401610476565b6106cc600a80546001019055565b60006106d7600a5490565b90506106e33382611043565b6106ed818461105d565b336001600160a01b0316817fdb2bfbc11c8a6350afe6406725431235c99ed05824d40daee07eae3d1fafb70b85604051610727919061196d565b60405180910390a390505b919050565b61051783838360405180602001604052806000815250610bee565b61075b33610521565b6107c25760405162461bcd60e51b815260206004820152603260248201527f457465726e616c536f756c3a2043616c6c6572206973206e6f7420746f6b656e604482015271081bdddb995c881bdc88185c1c1c9bdd995960721b6064820152608401610476565b6107cb816110d9565b807fc3a3686eed3b315ba4f3b1a0bf88b63a4525e3f27314495ba7dc0a40a6c4cd90336040516001600160a01b03909116815260200160405180910390a250565b600061081760085490565b821061087a5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610476565b6008828154811061088d5761088d611cf8565b90600052602060002001549050919050565b600c5461010090046001600160a01b0316636d70f7ae336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa1580156108fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091e9190611cdb565b61093a5760405162461bcd60e51b815260040161047690611d0e565b600b6109468282611da0565b5050565b6000818152600260205260408120546001600160a01b0316806103435760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610476565b600c5460009061010090046001600160a01b0316636d70f7ae336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015610a08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2c9190611cdb565b610a485760405162461bcd60e51b815260040161047690611d0e565b610a56600a80546001019055565b6000610a61600a5490565b9050610a6d8482611043565b610a77818461105d565b836001600160a01b0316817fdb2bfbc11c8a6350afe6406725431235c99ed05824d40daee07eae3d1fafb70b85604051610ab1919061196d565b60405180910390a39392505050565b600b8054610acd90611c54565b80601f0160208091040260200160405190810160405280929190818152602001828054610af990611c54565b8015610b465780601f10610b1b57610100808354040283529160200191610b46565b820191906000526020600020905b815481529060010190602001808311610b2957829003601f168201915b505050505081565b60006001600160a01b038216610bb85760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610476565b506001600160a01b031660009081526003602052604090205490565b60606001805461035890611c54565b61094633838361117c565b610bf83383610e53565b610c145760405162461bcd60e51b815260040161047690611c8e565b610c208484848461124a565b50505050565b6000818152600260205260409020546060906001600160a01b0316610c8d5760405162461bcd60e51b815260206004820152601f60248201527f457465726e616c536f756c3a204e6f6e2d4578697374656e74204173736574006044820152606401610476565b6000828152600d602052604090208054610ca690611c54565b9050600003610cc0576000610cb961127d565b9392505050565b6000828152600d602052604090208054610cd990611c54565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0590611c54565b8015610d525780601f10610d2757610100808354040283529160200191610d52565b820191906000526020600020905b815481529060010190602001808311610d3557829003601f168201915b50505050509050919050565b60006001600160e01b0319821663780e9d6360e01b148061034357506103438261128c565b6000818152600260205260409020546001600160a01b0316610de25760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610476565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610e1a8261094a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610e5f8361094a565b9050806001600160a01b0316846001600160a01b03161480610ea657506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610eca5750836001600160a01b0316610ebf846103db565b6001600160a01b0316145b949350505050565b826001600160a01b0316610ee58261094a565b6001600160a01b031614610f0b5760405162461bcd60e51b815260040161047690611e60565b6001600160a01b038216610f6d5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610476565b610f7a83838360016112dc565b826001600160a01b0316610f8d8261094a565b6001600160a01b031614610fb35760405162461bcd60e51b815260040161047690611e60565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610946828260405180602001604052806000815250611363565b6000828152600260205260409020546001600160a01b03166110c15760405162461bcd60e51b815260206004820152601f60248201527f457465726e616c536f756c3a204e6f6e2d4578697374656e74204173736574006044820152606401610476565b6000828152600d602052604090206105178282611da0565b60006110e48261094a565b90506110f48160008460016112dc565b6110fd8261094a565b600083815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0385168085526003845282852080546000190190558785526002909352818420805490911690555192935084927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b816001600160a01b0316836001600160a01b0316036111dd5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610476565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611255848484610ed2565b61126184848484611396565b610c205760405162461bcd60e51b815260040161047690611ea5565b6060600b805461035890611c54565b60006001600160e01b031982166380ac58cd60e01b14806112bd57506001600160e01b03198216635b5e139f60e01b145b8061034357506301ffc9a760e01b6001600160e01b0319831614610343565b6001600160a01b03841615806112f957506001600160a01b038316155b6113575760405162461bcd60e51b815260206004820152602960248201527f457465726e616c536f756c203a2041737365742063616e6e6f74206265207472604482015268185b9cd9995c9c995960ba1b6064820152608401610476565b610c2084848484611497565b61136d83836115cb565b61137a6000848484611396565b6105175760405162461bcd60e51b815260040161047690611ea5565b60006001600160a01b0384163b1561148c57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906113da903390899088908890600401611ef7565b6020604051808303816000875af1925050508015611415575060408051601f3d908101601f1916820190925261141291810190611f34565b60015b611472573d808015611443576040519150601f19603f3d011682016040523d82523d6000602084013e611448565b606091505b50805160000361146a5760405162461bcd60e51b815260040161047690611ea5565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610eca565b506001949350505050565b60018111156115065760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b6064820152608401610476565b816001600160a01b0385166115625761155d81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611585565b836001600160a01b0316856001600160a01b031614611585576115858582611764565b6001600160a01b0384166115a15761159c81611801565b6115c4565b846001600160a01b0316846001600160a01b0316146115c4576115c484826118b0565b5050505050565b6001600160a01b0382166116215760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610476565b6000818152600260205260409020546001600160a01b0316156116865760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610476565b6116946000838360016112dc565b6000818152600260205260409020546001600160a01b0316156116f95760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610476565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000600161177184610b4e565b61177b9190611f51565b6000838152600760205260409020549091508082146117ce576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b60085460009061181390600190611f51565b6000838152600960205260408120546008805493945090928490811061183b5761183b611cf8565b90600052602060002001549050806008838154811061185c5761185c611cf8565b600091825260208083209091019290925582815260099091526040808220849055858252812055600880548061189457611894611f72565b6001900381819060005260206000200160009055905550505050565b60006118bb83610b4e565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160e01b031981168114610de257600080fd5b60006020828403121561191c57600080fd5b8135610cb9816118f4565b6000815180845260005b8181101561194d57602081850181015186830182015201611931565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610cb96020830184611927565b60006020828403121561199257600080fd5b5035919050565b80356001600160a01b038116811461073257600080fd5b600080604083850312156119c357600080fd5b6119cc83611999565b946020939093013593505050565b6000806000606084860312156119ef57600080fd5b6119f884611999565b9250611a0660208501611999565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611a4757611a47611a16565b604051601f8501601f19908116603f01168101908282118183101715611a6f57611a6f611a16565b81604052809350858152868686011115611a8857600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611ab357600080fd5b610cb983833560208501611a2c565b600060208284031215611ad457600080fd5b813567ffffffffffffffff811115611aeb57600080fd5b610eca84828501611aa2565b60008060408385031215611b0a57600080fd5b611b1383611999565b9150602083013567ffffffffffffffff811115611b2f57600080fd5b611b3b85828601611aa2565b9150509250929050565b600060208284031215611b5757600080fd5b610cb982611999565b8015158114610de257600080fd5b60008060408385031215611b8157600080fd5b611b8a83611999565b91506020830135611b9a81611b60565b809150509250929050565b60008060008060808587031215611bbb57600080fd5b611bc485611999565b9350611bd260208601611999565b925060408501359150606085013567ffffffffffffffff811115611bf557600080fd5b8501601f81018713611c0657600080fd5b611c1587823560208401611a2c565b91505092959194509250565b60008060408385031215611c3457600080fd5b611c3d83611999565b9150611c4b60208401611999565b90509250929050565b600181811c90821680611c6857607f821691505b602082108103611c8857634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b600060208284031215611ced57600080fd5b8151610cb981611b60565b634e487b7160e01b600052603260045260246000fd5b60208082526024908201527f457465726e616c536f756c3a2055736572206973206e6f7420617574686f726960408201526303d32b2160e51b606082015260800190565b601f82111561051757600081815260208120601f850160051c81016020861015611d795750805b601f850160051c820191505b81811015611d9857828155600101611d85565b505050505050565b815167ffffffffffffffff811115611dba57611dba611a16565b611dce81611dc88454611c54565b84611d52565b602080601f831160018114611e035760008415611deb5750858301515b600019600386901b1c1916600185901b178555611d98565b600085815260208120601f198616915b82811015611e3257888601518255948401946001909101908401611e13565b5085821015611e505787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611f2a90830184611927565b9695505050505050565b600060208284031215611f4657600080fd5b8151610cb9816118f4565b8181038181111561034357634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603160045260246000fdfea26469706673582212206aef0ba1fea874065e0ff86dc33776908d8a01de97f1f03e9e3f6b89c999996464736f6c63430008110033";

type EternalSoulConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EternalSoulConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EternalSoul__factory extends ContractFactory {
  constructor(...args: EternalSoulConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "EternalSoul";
  }

  deploy(
    name: string,
    symbol: string,
    _intialURI: string,
    flowContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EternalSoul> {
    return super.deploy(
      name,
      symbol,
      _intialURI,
      flowContract,
      overrides || {}
    ) as Promise<EternalSoul>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    _intialURI: string,
    flowContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      _intialURI,
      flowContract,
      overrides || {}
    );
  }
  attach(address: string): EternalSoul {
    return super.attach(address) as EternalSoul;
  }
  connect(signer: Signer): EternalSoul__factory {
    return super.connect(signer) as EternalSoul__factory;
  }
  static readonly contractName: "EternalSoul";
  public readonly contractName: "EternalSoul";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EternalSoulInterface {
    return new utils.Interface(_abi) as EternalSoulInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EternalSoul {
    return new Contract(address, _abi, signerOrProvider) as EternalSoul;
  }
}

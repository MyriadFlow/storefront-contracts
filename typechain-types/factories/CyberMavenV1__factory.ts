/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CyberMavenV1, CyberMavenV1Interface } from "../CyberMavenV1";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_size",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_end",
        type: "uint256",
      },
    ],
    name: "InvalidCodeAtRange",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
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
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ECR6551ERC1155Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ECR6551ERC20Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
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
    name: "ECR6551ERC721SafeTransferFrom",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
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
    name: "ECR6551ERC721Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ERC6551ERC1155SetApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ERC6551ERC20Approve",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
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
    name: "ERC6551ERC721Approve",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
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
        internalType: "bool",
        name: "check",
        type: "bool",
      },
    ],
    name: "ERC6551ERC721SetApprovalForAll",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
    ],
    name: "callSetter",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "erc1155SafeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
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
    name: "erc1155setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "erc20Approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "erc20Transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
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
    name: "erc721Approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
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
    name: "erc721SafeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
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
    name: "erc721Transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "erc721setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "executeCall",
    outputs: [
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
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
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
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
    inputs: [],
    name: "nonce",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "setWalletName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "setWalletSymbol",
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
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c0604052601160809081527010de58995c93585d995b8815d85b1b195d607a1b60a05260009062000032908262000116565b50604080518082019091526003815262434d5760e81b60208201526001906200005c908262000116565b503480156200006a57600080fd5b50620001e2565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200009c57607f821691505b602082108103620000bd57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200011157600081815260208120601f850160051c81016020861015620000ec5750805b601f850160051c820191505b818110156200010d57828155600101620000f8565b5050505b505050565b81516001600160401b0381111562000132576200013262000071565b6200014a8162000143845462000087565b84620000c3565b602080601f831160018114620001825760008415620001695750858301515b600019600386901b1c1916600185901b1785556200010d565b600085815260208120601f198616915b82811015620001b35788860151825594840194600190910190840162000192565b5085821015620001d25787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611d5a80620001f26000396000f3fe60806040526004361061014f5760003560e01c80638da5cb5b116100b6578063bc197c811161006f578063bc197c81146103a7578063cf838bb7146103d3578063f23a6e61146103f3578063f6f5e5de1461041f578063fc0c546a1461043f578063ff6271361461047757600080fd5b80638da5cb5b146102fd57806395d89b411461032a5780639e5d4c491461033f578063ace561a814610352578063affed0e014610372578063b6011b4c1461038757600080fd5b806318fa06531161010857806318fa06531461025557806336ea1ad3146102755780633790767d146102955780633b403383146102b55780633ccfd60b146102d55780635e59658d146102ea57600080fd5b806301ffc9a71461015b578063052aafe61461019057806306fdde03146101b257806312065fe0146101d4578063150b7a02146101f15780631626ba7e1461023557600080fd5b3661015657005b600080fd5b34801561016757600080fd5b5061017b610176366004611424565b610497565b60405190151581526020015b60405180910390f35b34801561019c57600080fd5b506101b06101ab366004611474565b6104e4565b005b3480156101be57600080fd5b506101c76105d0565b604051610187919061150f565b3480156101e057600080fd5b50475b604051908152602001610187565b3480156101fd57600080fd5b5061021c61020c3660046115df565b630a85bd0160e11b949350505050565b6040516001600160e01b03199091168152602001610187565b34801561024157600080fd5b5061021c61025036600461164a565b61065e565b34801561026157600080fd5b506101b0610270366004611690565b610695565b34801561028157600080fd5b506101b0610290366004611474565b610775565b3480156102a157600080fd5b506101b06102b0366004611690565b610858565b3480156102c157600080fd5b506101b06102d03660046116d1565b61094a565b3480156102e157600080fd5b506101b0610992565b6101c76102f8366004611762565b6109fe565b34801561030957600080fd5b50610312610aff565b6040516001600160a01b039091168152602001610187565b34801561033657600080fd5b506101c7610bef565b6101c761034d3660046117b6565b610bfc565b34801561035e57600080fd5b506101b061036d366004611690565b610cc5565b34801561037e57600080fd5b506002546101e3565b34801561039357600080fd5b506101b06103a2366004611690565b610db7565b3480156103b357600080fd5b5061021c6103c2366004611890565b63bc197c8160e01b95945050505050565b3480156103df57600080fd5b506101b06103ee366004611690565b610e9d565b3480156103ff57600080fd5b5061021c61040e36600461193d565b63f23a6e6160e01b95945050505050565b34801561042b57600080fd5b506101b061043a3660046119a5565b610f83565b34801561044b57600080fd5b5061045461106f565b604080519384526001600160a01b03909216602084015290820152606001610187565b34801561048357600080fd5b506101b06104923660046116d1565b6110ab565b60006001600160e01b031982166301ffc9a760e01b14806104c857506001600160e01b03198216630801407360e31b145b156104d557506001919050565b6104de826110ef565b92915050565b6104ec610aff565b6001600160a01b0316336001600160a01b0316146105255760405162461bcd60e51b815260040161051c90611a20565b60405180910390fd5b60405163a22cb46560e01b81526001600160a01b038381166004830152821515602483015284169063a22cb46590604401600060405180830381600087803b15801561057057600080fd5b505af1158015610584573d6000803e3d6000fd5b50505050801515826001600160a01b0316846001600160a01b03167fd7698c899db5f56816711124e6ab44c0cfa2e194af43f33492af91a6d54ff91960405160405180910390a4505050565b600080546105dd90611a57565b80601f016020809104026020016040519081016040528092919081815260200182805461060990611a57565b80156106565780601f1061062b57610100808354040283529160200191610656565b820191906000526020600020905b81548152906001019060200180831161063957829003601f168201915b505050505081565b60008061067361066c610aff565b8585611124565b9050801561068b5750630b135d3f60e11b90506104de565b5060009392505050565b61069d610aff565b6001600160a01b0316336001600160a01b0316146106cd5760405162461bcd60e51b815260040161051c90611a20565b60405163095ea7b360e01b81526001600160a01b0383811660048301526024820183905284169063095ea7b390604401600060405180830381600087803b15801561071757600080fd5b505af115801561072b573d6000803e3d6000fd5b5050505080826001600160a01b0316846001600160a01b03167fa96e2ec8a7a5dc95067b7579776e83cb3cec114c267f7938611fbf1ea3176abb60405160405180910390a4505050565b61077d610aff565b6001600160a01b0316336001600160a01b0316146107ad5760405162461bcd60e51b815260040161051c90611a20565b60405163a22cb46560e01b81526001600160a01b038381166004830152821515602483015284169063a22cb46590604401600060405180830381600087803b1580156107f857600080fd5b505af115801561080c573d6000803e3d6000fd5b50505050801515826001600160a01b0316846001600160a01b03167f5bc78940a1dd276a0640342496ac76b74787395ee09c644a30550fb1862cd7cc60405160405180910390a4505050565b610860610aff565b6001600160a01b0316336001600160a01b0316146108905760405162461bcd60e51b815260040161051c90611a20565b60405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905284169063a9059cbb906044016020604051808303816000875af11580156108df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109039190611a91565b5080826001600160a01b0316846001600160a01b03167f1a06370a29b7d12f762dd19849fed38b8d5f15530e7fbf6406ac5cb5041fec5760405160405180910390a4505050565b610952610aff565b6001600160a01b0316336001600160a01b0316146109825760405162461bcd60e51b815260040161051c90611a20565b600161098e8282611afd565b5050565b600061099c610aff565b90506000816001600160a01b03164760405160006040518083038185875af1925050503d80600081146109eb576040519150601f19603f3d011682016040523d82523d6000602084013e6109f0565b606091505b505090508061098e57600080fd5b6060610a08610aff565b6001600160a01b0316336001600160a01b031614610a385760405162461bcd60e51b815260040161051c90611a20565b600080856001600160a01b0316348686604051610a56929190611bbc565b60006040518083038185875af1925050503d8060008114610a93576040519150601f19603f3d011682016040523d82523d6000602084013e610a98565b606091505b509150915081610af45760405162461bcd60e51b815260206004820152602160248201527f43796265724d6176656e203a20436f6e74726163742063616c6c206661696c656044820152601960fa1b606482015260840161051c565b9150505b9392505050565b600080600080306001600160a01b031663fc0c546a6040518163ffffffff1660e01b8152600401606060405180830381865afa158015610b43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b679190611bcc565b925092509250468314610b7e576000935050505090565b6040516331a9108f60e11b8152600481018290526001600160a01b03831690636352211e90602401602060405180830381865afa158015610bc3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be79190611c05565b935050505090565b600180546105dd90611a57565b6060610c06610aff565b6001600160a01b0316336001600160a01b031614610c365760405162461bcd60e51b815260040161051c90611a20565b6000856001600160a01b0316858585604051610c53929190611bbc565b60006040518083038185875af1925050503d8060008114610c90576040519150601f19603f3d011682016040523d82523d6000602084013e610c95565b606091505b509250905080610ca757815160208301fd5b60028054906000610cb783611c38565b919050555050949350505050565b610ccd610aff565b6001600160a01b0316336001600160a01b031614610cfd5760405162461bcd60e51b815260040161051c90611a20565b60405163095ea7b360e01b81526001600160a01b0383811660048301526024820183905284169063095ea7b3906044016020604051808303816000875af1158015610d4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d709190611a91565b5080826001600160a01b0316846001600160a01b03167f74f5671b2c665be44c6acf481087ab8ee03946f0f59891926722b7c4c9b2c89560405160405180910390a4505050565b610dbf610aff565b6001600160a01b0316336001600160a01b031614610def5760405162461bcd60e51b815260040161051c90611a20565b6040516323b872dd60e01b81523060048201526001600160a01b038381166024830152604482018390528416906323b872dd90606401600060405180830381600087803b158015610e3f57600080fd5b505af1158015610e53573d6000803e3d6000fd5b5050505080826001600160a01b0316846001600160a01b03167f699c030d2793978709485653c78b3fa764810320ca32b0160240a8c90e9b5f7860405160405180910390a4505050565b610ea5610aff565b6001600160a01b0316336001600160a01b031614610ed55760405162461bcd60e51b815260040161051c90611a20565b604051632142170760e11b81523060048201526001600160a01b038381166024830152604482018390528416906342842e0e90606401600060405180830381600087803b158015610f2557600080fd5b505af1158015610f39573d6000803e3d6000fd5b5050505080826001600160a01b0316846001600160a01b03167f10ac19deacd17fbdf34066e59e11af29ce80412a7c87fbb7f53ce7366986768d60405160405180910390a4505050565b610f8b610aff565b6001600160a01b0316336001600160a01b031614610fbb5760405162461bcd60e51b815260040161051c90611a20565b604051637921219560e11b81526001600160a01b0387169063f242432a90610ff190309089908990899089908990600401611c51565b600060405180830381600087803b15801561100b57600080fd5b505af115801561101f573d6000803e3d6000fd5b50506040516001600160a01b0389811682528693508792508816907fd45f6c962afe2748ec880e008162e9fa2b340e699f62f0a4e555e679c6d0831d9060200160405180910390a4505050505050565b6000808030803b9061108c90611086606084611cad565b83611266565b80602001905181019061109f9190611bcc565b93509350935050909192565b6110b3610aff565b6001600160a01b0316336001600160a01b0316146110e35760405162461bcd60e51b815260040161051c90611a20565b600061098e8282611afd565b60006001600160e01b03198216630271189760e51b14806104de57506301ffc9a760e01b6001600160e01b03198316146104de565b6000806000611133858561131b565b9092509050600081600481111561114c5761114c611cc0565b14801561116a5750856001600160a01b0316826001600160a01b0316145b1561117a57600192505050610af8565b600080876001600160a01b0316631626ba7e60e01b88886040516024016111a2929190611cd6565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516111e09190611cef565b600060405180830381855afa9150503d806000811461121b576040519150601f19603f3d011682016040523d82523d6000602084013e611220565b606091505b5091509150818015611233575080516020145b801561125a57508051630b135d3f60e11b906112589083016020908101908401611d0b565b145b98975050505050505050565b6060833b6000819003611289575050604080516020810190915260008152610af8565b808411156112a7575050604080516020810190915260008152610af8565b838310156112d95760405163162544fd60e11b815260048101829052602481018590526044810184905260640161051c565b83830384820360008282106112ee57826112f0565b815b60408051603f8301601f19168101909152818152955090508087602087018a3c505050509392505050565b60008082516041036113515760208301516040840151606085015160001a61134587828585611360565b94509450505050611359565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611397575060009050600361141b565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156113eb573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166114145760006001925092505061141b565b9150600090505b94509492505050565b60006020828403121561143657600080fd5b81356001600160e01b031981168114610af857600080fd5b6001600160a01b038116811461146357600080fd5b50565b801515811461146357600080fd5b60008060006060848603121561148957600080fd5b83356114948161144e565b925060208401356114a48161144e565b915060408401356114b481611466565b809150509250925092565b60005b838110156114da5781810151838201526020016114c2565b50506000910152565b600081518084526114fb8160208601602086016114bf565b601f01601f19169290920160200192915050565b602081526000610af860208301846114e3565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561156057611560611522565b604052919050565b60006001600160401b0383111561158157611581611522565b611594601f8401601f1916602001611538565b90508281528383830111156115a857600080fd5b828260208301376000602084830101529392505050565b600082601f8301126115d057600080fd5b610af883833560208501611568565b600080600080608085870312156115f557600080fd5b84356116008161144e565b935060208501356116108161144e565b92506040850135915060608501356001600160401b0381111561163257600080fd5b61163e878288016115bf565b91505092959194509250565b6000806040838503121561165d57600080fd5b8235915060208301356001600160401b0381111561167a57600080fd5b611686858286016115bf565b9150509250929050565b6000806000606084860312156116a557600080fd5b83356116b08161144e565b925060208401356116c08161144e565b929592945050506040919091013590565b6000602082840312156116e357600080fd5b81356001600160401b038111156116f957600080fd5b8201601f8101841361170a57600080fd5b61171984823560208401611568565b949350505050565b60008083601f84011261173357600080fd5b5081356001600160401b0381111561174a57600080fd5b60208301915083602082850101111561135957600080fd5b60008060006040848603121561177757600080fd5b83356117828161144e565b925060208401356001600160401b0381111561179d57600080fd5b6117a986828701611721565b9497909650939450505050565b600080600080606085870312156117cc57600080fd5b84356117d78161144e565b93506020850135925060408501356001600160401b038111156117f957600080fd5b61180587828801611721565b95989497509550505050565b600082601f83011261182257600080fd5b813560206001600160401b0382111561183d5761183d611522565b8160051b61184c828201611538565b928352848101820192828101908785111561186657600080fd5b83870192505b848310156118855782358252918301919083019061186c565b979650505050505050565b600080600080600060a086880312156118a857600080fd5b85356118b38161144e565b945060208601356118c38161144e565b935060408601356001600160401b03808211156118df57600080fd5b6118eb89838a01611811565b9450606088013591508082111561190157600080fd5b61190d89838a01611811565b9350608088013591508082111561192357600080fd5b50611930888289016115bf565b9150509295509295909350565b600080600080600060a0868803121561195557600080fd5b85356119608161144e565b945060208601356119708161144e565b9350604086013592506060860135915060808601356001600160401b0381111561199957600080fd5b611930888289016115bf565b60008060008060008060a087890312156119be57600080fd5b86356119c98161144e565b955060208701356119d98161144e565b9450604087013593506060870135925060808701356001600160401b03811115611a0257600080fd5b611a0e89828a01611721565b979a9699509497509295939492505050565b6020808252601b908201527f43796265724d6176656e3a204e6f7420746f6b656e206f776e65720000000000604082015260600190565b600181811c90821680611a6b57607f821691505b602082108103611a8b57634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215611aa357600080fd5b8151610af881611466565b601f821115611af857600081815260208120601f850160051c81016020861015611ad55750805b601f850160051c820191505b81811015611af457828155600101611ae1565b5050505b505050565b81516001600160401b03811115611b1657611b16611522565b611b2a81611b248454611a57565b84611aae565b602080601f831160018114611b5f5760008415611b475750858301515b600019600386901b1c1916600185901b178555611af4565b600085815260208120601f198616915b82811015611b8e57888601518255948401946001909101908401611b6f565b5085821015611bac5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8183823760009101908152919050565b600080600060608486031215611be157600080fd5b835192506020840151611bf38161144e565b80925050604084015190509250925092565b600060208284031215611c1757600080fd5b8151610af88161144e565b634e487b7160e01b600052601160045260246000fd5b600060018201611c4a57611c4a611c22565b5060010190565b6001600160a01b03878116825286166020820152604081018590526060810184905260a06080820181905281018290526000828460c0840137600060c0848401015260c0601f19601f8501168301019050979650505050505050565b818103818111156104de576104de611c22565b634e487b7160e01b600052602160045260246000fd5b82815260406020820152600061171960408301846114e3565b60008251611d018184602087016114bf565b9190910192915050565b600060208284031215611d1d57600080fd5b505191905056fea26469706673582212209a15aa702725ac51cd6f537d9b08c25c71387aedead2ed1ab785d9f135c7e13b64736f6c63430008110033";

type CyberMavenV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CyberMavenV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CyberMavenV1__factory extends ContractFactory {
  constructor(...args: CyberMavenV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CyberMavenV1";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CyberMavenV1> {
    return super.deploy(overrides || {}) as Promise<CyberMavenV1>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CyberMavenV1 {
    return super.attach(address) as CyberMavenV1;
  }
  connect(signer: Signer): CyberMavenV1__factory {
    return super.connect(signer) as CyberMavenV1__factory;
  }
  static readonly contractName: "CyberMavenV1";
  public readonly contractName: "CyberMavenV1";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CyberMavenV1Interface {
    return new utils.Interface(_abi) as CyberMavenV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CyberMavenV1 {
    return new Contract(address, _abi, signerOrProvider) as CyberMavenV1;
  }
}

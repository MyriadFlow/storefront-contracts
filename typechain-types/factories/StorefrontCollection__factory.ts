/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StoreFrontCollection,
  StoreFrontCollectionInterface,
} from "../StoreFrontCollection";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "URI",
        type: "string",
      },
      {
        internalType: "address",
        name: "marketplaceAddress",
        type: "address",
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
        name: "account",
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
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
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
        internalType: "address",
        name: "operator",
        type: "address",
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
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "createAsset",
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
        internalType: "address",
        name: "creator",
        type: "address",
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
    name: "delegateAssetCreation",
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
      {
        internalType: "uint256",
        name: "amount",
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
        name: "id",
        type: "uint256",
      },
    ],
    name: "exists",
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
        internalType: "address",
        name: "account",
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
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
        name: "newuri",
        type: "string",
      },
    ],
    name: "setURI",
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
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002201380380620022018339810160408190526200003491620000bc565b82620000408162000077565b50600780546001600160a01b039283166001600160a01b031991821617909155600680549390921692169190911790555062000311565b600262000085828262000245565b5050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620000b757600080fd5b919050565b600080600060608486031215620000d257600080fd5b83516001600160401b0380821115620000ea57600080fd5b818601915086601f830112620000ff57600080fd5b81518181111562000114576200011462000089565b604051601f8201601f19908116603f011681019083821181831017156200013f576200013f62000089565b816040528281526020935089848487010111156200015c57600080fd5b600091505b8282101562000180578482018401518183018501529083019062000161565b60008484830101528097505050506200019b8187016200009f565b93505050620001ad604085016200009f565b90509250925092565b600181811c90821680620001cb57607f821691505b602082108103620001ec57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200024057600081815260208120601f850160051c810160208610156200021b5750805b601f850160051c820191505b818110156200023c5782815560010162000227565b5050505b505050565b81516001600160401b0381111562000261576200026162000089565b6200027981620002728454620001b6565b84620001f2565b602080601f831160018114620002b15760008415620002985750858301515b600019600386901b1c1916600185901b1785556200023c565b600085815260208120601f198616915b82811015620002e257888601518255948401946001909101908401620002c1565b5085821015620003015787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611ee080620003216000396000f3fe608060405234801561001057600080fd5b50600436106100f45760003560e01c80634f558e7911610097578063bd85b03911610066578063bd85b03914610230578063e985e9c514610250578063f242432a1461028c578063f828b6aa1461029f57600080fd5b80634f558e79146101bd5780637ab00715146101df578063a22cb465146101f2578063abc8c7af1461020557600080fd5b80630e89341c116100d35780630e89341c1461015757806321988227146101775780632eb2c2d61461018a5780634e1273f41461019d57600080fd5b8062fdd58e146100f957806301ffc9a71461011f57806302fe530514610142575b600080fd5b61010c610107366004611418565b6102b2565b6040519081526020015b60405180910390f35b61013261012d366004611458565b61034b565b6040519015158152602001610116565b610155610150366004611533565b610356565b005b61016a610165366004611570565b6103f8565b60405161011691906115cf565b61010c6101853660046115e2565b61048c565b6101556101983660046116e4565b6105a6565b6101b06101ab36600461178e565b6105f2565b6040516101169190611894565b6101326101cb366004611570565b600090815260036020526040902054151590565b6101556101ed3660046118a7565b61071c565b6101556102003660046118d7565b6107e7565b600654610218906001600160a01b031681565b6040516001600160a01b039091168152602001610116565b61010c61023e366004611570565b60009081526003602052604090205490565b61013261025e36600461190e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b61015561029a366004611941565b6107f6565b61010c6102ad3660046119a6565b61083b565b60006001600160a01b0383166103225760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201526930b634b21037bbb732b960b11b60648201526084015b60405180910390fd5b506000818152602081815260408083206001600160a01b03861684529091529020545b92915050565b600061034582610902565b6007546001600160a01b03166324d7806c336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa1580156103ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d091906119f3565b6103ec5760405162461bcd60e51b815260040161031990611a10565b6103f581610952565b50565b60606002805461040790611a54565b80601f016020809104026020016040519081016040528092919081815260200182805461043390611a54565b80156104805780601f1061045557610100808354040283529160200191610480565b820191906000526020600020905b81548152906001019060200180831161046357829003601f168201915b50505050509050919050565b6007546000906001600160a01b031663efd46065336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa1580156104e5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050991906119f3565b6105255760405162461bcd60e51b815260040161031990611a10565b610533600480546001019055565b600061053e60045490565b905061054c3382878761095e565b60008181526005602052604090206105648482611ad9565b5084335b6001600160a01b0316827ff54837c9ba235cb37cd834add22a366a600686d55bc588af257f7928dacb198b60405160405180910390a4949350505050565b6001600160a01b0385163314806105c257506105c2853361025e565b6105de5760405162461bcd60e51b815260040161031990611b99565b6105eb8585858585610a81565b5050505050565b606081518351146106575760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b6064820152608401610319565b6000835167ffffffffffffffff8111156106735761067361147c565b60405190808252806020026020018201604052801561069c578160200160208202803683370190505b50905060005b8451811015610714576106e78582815181106106c0576106c0611be7565b60200260200101518583815181106106da576106da611be7565b60200260200101516102b2565b8282815181106106f9576106f9611be7565b602090810291909101015261070d81611c13565b90506106a2565b509392505050565b8061072733846102b2565b1461079a5760405162461bcd60e51b815260206004820152603b60248201527f53746f726546726f6e74436f6c6c656374696f6e3a2043616c6c65722069732060448201527f6e6f7420746f6b656e206f776e6572206f7220617070726f76656400000000006064820152608401610319565b6107a5338383610c6c565b817fc3a3686eed3b315ba4f3b1a0bf88b63a4525e3f27314495ba7dc0a40a6c4cd90336040516001600160a01b03909116815260200160405180910390a25050565b6107f2338383610dfc565b5050565b6001600160a01b0385163314806108125750610812853361025e565b61082e5760405162461bcd60e51b815260040161031990611b99565b6105eb8585858585610edc565b6007546000906001600160a01b0316636d70f7ae336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015610894573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b891906119f3565b6108d45760405162461bcd60e51b815260040161031990611a10565b6108e2600480546001019055565b60006108ed60045490565b90506108fb8582868661095e565b8333610568565b60006001600160e01b03198216636cdb3d1360e11b148061093357506001600160e01b031982166303a24d0760e21b145b8061034557506301ffc9a760e01b6001600160e01b0319831614610345565b60026107f28282611ad9565b6001600160a01b0384166109be5760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b6064820152608401610319565b3360006109ca85611014565b905060006109d785611014565b90506109e88360008985858961105f565b6000868152602081815260408083206001600160a01b038b16845290915281208054879290610a18908490611c2c565b909155505060408051878152602081018790526001600160a01b03808a1692600092918716917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610a788360008989898961106d565b50505050505050565b8151835114610ae35760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b6064820152608401610319565b6001600160a01b038416610b095760405162461bcd60e51b815260040161031990611c3f565b33610b1881878787878761105f565b60005b8451811015610bfe576000858281518110610b3857610b38611be7565b602002602001015190506000858381518110610b5657610b56611be7565b602090810291909101810151600084815280835260408082206001600160a01b038e168352909352919091205490915081811015610ba65760405162461bcd60e51b815260040161031990611c84565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610be3908490611c2c565b9250508190555050505080610bf790611c13565b9050610b1b565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610c4e929190611cce565b60405180910390a4610c648187878787876111c8565b505050505050565b6001600160a01b038316610cce5760405162461bcd60e51b815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201526265737360e81b6064820152608401610319565b336000610cda84611014565b90506000610ce784611014565b9050610d078387600085856040518060200160405280600081525061105f565b6000858152602081815260408083206001600160a01b038a16845290915290205484811015610d845760405162461bcd60e51b8152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604482015263616e636560e01b6064820152608401610319565b6000868152602081815260408083206001600160a01b038b81168086529184528285208a8703905582518b81529384018a90529092908816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4604080516020810190915260009052610a78565b816001600160a01b0316836001600160a01b031603610e6f5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b6064820152608401610319565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b038416610f025760405162461bcd60e51b815260040161031990611c3f565b336000610f0e85611014565b90506000610f1b85611014565b9050610f2b83898985858961105f565b6000868152602081815260408083206001600160a01b038c16845290915290205485811015610f6c5760405162461bcd60e51b815260040161031990611c84565b6000878152602081815260408083206001600160a01b038d8116855292528083208985039055908a16825281208054889290610fa9908490611c2c565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4611009848a8a8a8a8a61106d565b505050505050505050565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061104e5761104e611be7565b602090810291909101015292915050565b610c64868686868686611283565b6001600160a01b0384163b15610c645760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906110b19089908990889088908890600401611cfc565b6020604051808303816000875af19250505080156110ec575060408051601f3d908101601f191682019092526110e991810190611d41565b60015b611198576110f8611d5e565b806308c379a003611131575061110c611d7a565b806111175750611133565b8060405162461bcd60e51b815260040161031991906115cf565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b6064820152608401610319565b6001600160e01b0319811663f23a6e6160e01b14610a785760405162461bcd60e51b815260040161031990611e04565b6001600160a01b0384163b15610c645760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061120c9089908990889088908890600401611e4c565b6020604051808303816000875af1925050508015611247575060408051601f3d908101601f1916820190925261124491810190611d41565b60015b611253576110f8611d5e565b6001600160e01b0319811663bc197c8160e01b14610a785760405162461bcd60e51b815260040161031990611e04565b6001600160a01b03851661130a5760005b8351811015611308578281815181106112af576112af611be7565b6020026020010151600360008684815181106112cd576112cd611be7565b6020026020010151815260200190815260200160002060008282546112f29190611c2c565b90915550611301905081611c13565b9050611294565b505b6001600160a01b038416610c645760005b8351811015610a7857600084828151811061133857611338611be7565b60200260200101519050600084838151811061135657611356611be7565b60200260200101519050600060036000848152602001908152602001600020549050818110156113d95760405162461bcd60e51b815260206004820152602860248201527f455243313135353a206275726e20616d6f756e74206578636565647320746f74604482015267616c537570706c7960c01b6064820152608401610319565b600092835260036020526040909220910390556113f581611c13565b905061131b565b80356001600160a01b038116811461141357600080fd5b919050565b6000806040838503121561142b57600080fd5b611434836113fc565b946020939093013593505050565b6001600160e01b0319811681146103f557600080fd5b60006020828403121561146a57600080fd5b813561147581611442565b9392505050565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff811182821017156114b8576114b861147c565b6040525050565b600082601f8301126114d057600080fd5b813567ffffffffffffffff8111156114ea576114ea61147c565b604051611501601f8301601f191660200182611492565b81815284602083860101111561151657600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561154557600080fd5b813567ffffffffffffffff81111561155c57600080fd5b611568848285016114bf565b949350505050565b60006020828403121561158257600080fd5b5035919050565b6000815180845260005b818110156115af57602081850181015186830182015201611593565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006114756020830184611589565b6000806000606084860312156115f757600080fd5b83359250602084013567ffffffffffffffff8082111561161657600080fd5b611622878388016114bf565b9350604086013591508082111561163857600080fd5b50611645868287016114bf565b9150509250925092565b600067ffffffffffffffff8211156116695761166961147c565b5060051b60200190565b600082601f83011261168457600080fd5b813560206116918261164f565b60405161169e8282611492565b83815260059390931b85018201928281019150868411156116be57600080fd5b8286015b848110156116d957803583529183019183016116c2565b509695505050505050565b600080600080600060a086880312156116fc57600080fd5b611705866113fc565b9450611713602087016113fc565b9350604086013567ffffffffffffffff8082111561173057600080fd5b61173c89838a01611673565b9450606088013591508082111561175257600080fd5b61175e89838a01611673565b9350608088013591508082111561177457600080fd5b50611781888289016114bf565b9150509295509295909350565b600080604083850312156117a157600080fd5b823567ffffffffffffffff808211156117b957600080fd5b818501915085601f8301126117cd57600080fd5b813560206117da8261164f565b6040516117e78282611492565b83815260059390931b850182019282810191508984111561180757600080fd5b948201945b8386101561182c5761181d866113fc565b8252948201949082019061180c565b9650508601359250508082111561184257600080fd5b5061184f85828601611673565b9150509250929050565b600081518084526020808501945080840160005b838110156118895781518752958201959082019060010161186d565b509495945050505050565b6020815260006114756020830184611859565b600080604083850312156118ba57600080fd5b50508035926020909101359150565b80151581146103f557600080fd5b600080604083850312156118ea57600080fd5b6118f3836113fc565b91506020830135611903816118c9565b809150509250929050565b6000806040838503121561192157600080fd5b61192a836113fc565b9150611938602084016113fc565b90509250929050565b600080600080600060a0868803121561195957600080fd5b611962866113fc565b9450611970602087016113fc565b93506040860135925060608601359150608086013567ffffffffffffffff81111561199a57600080fd5b611781888289016114bf565b6000806000606084860312156119bb57600080fd5b6119c4846113fc565b925060208401359150604084013567ffffffffffffffff8111156119e757600080fd5b611645868287016114bf565b600060208284031215611a0557600080fd5b8151611475816118c9565b60208082526024908201527f53746f726546726f6e744d61726b6574706c6163653a20556e617574686f72696040820152637a65642160e01b606082015260800190565b600181811c90821680611a6857607f821691505b602082108103611a8857634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115611ad457600081815260208120601f850160051c81016020861015611ab55750805b601f850160051c820191505b81811015610c6457828155600101611ac1565b505050565b815167ffffffffffffffff811115611af357611af361147c565b611b0781611b018454611a54565b84611a8e565b602080601f831160018114611b3c5760008415611b245750858301515b600019600386901b1c1916600185901b178555610c64565b600085815260208120601f198616915b82811015611b6b57888601518255948401946001909101908401611b4c565b5085821015611b895787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6020808252602e908201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60408201526d195c881bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611c2557611c25611bfd565b5060010190565b8082018082111561034557610345611bfd565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b604081526000611ce16040830185611859565b8281036020840152611cf38185611859565b95945050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a060808201819052600090611d3690830184611589565b979650505050505050565b600060208284031215611d5357600080fd5b815161147581611442565b600060033d1115611d775760046000803e5060005160e01c5b90565b600060443d1015611d885790565b6040516003193d81016004833e81513d67ffffffffffffffff8160248401118184111715611db857505050505090565b8285019150815181811115611dd05750505050505090565b843d8701016020828501011115611dea5750505050505090565b611df960208286010187611492565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b0386811682528516602082015260a060408201819052600090611e7890830186611859565b8281036060840152611e8a8186611859565b90508281036080840152611e9e8185611589565b9897505050505050505056fea2646970667358221220822725660220a06f43ac824c2244df872b3b182e8f5591f24e4204413e16855f64736f6c63430008110033";

type StoreFrontCollectionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StoreFrontCollectionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StoreFrontCollection__factory extends ContractFactory {
  constructor(...args: StoreFrontCollectionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "StoreFrontCollection";
  }

  deploy(
    URI: string,
    marketplaceAddress: string,
    flowContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StoreFrontCollection> {
    return super.deploy(
      URI,
      marketplaceAddress,
      flowContract,
      overrides || {}
    ) as Promise<StoreFrontCollection>;
  }
  getDeployTransaction(
    URI: string,
    marketplaceAddress: string,
    flowContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      URI,
      marketplaceAddress,
      flowContract,
      overrides || {}
    );
  }
  attach(address: string): StoreFrontCollection {
    return super.attach(address) as StoreFrontCollection;
  }
  connect(signer: Signer): StoreFrontCollection__factory {
    return super.connect(signer) as StoreFrontCollection__factory;
  }
  static readonly contractName: "StoreFrontCollection";
  public readonly contractName: "StoreFrontCollection";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StoreFrontCollectionInterface {
    return new utils.Interface(_abi) as StoreFrontCollectionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StoreFrontCollection {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StoreFrontCollection;
  }
}

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
import type { Marketplace, MarketplaceInterface } from "../Marketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint96",
        name: "_platformFee",
        type: "uint96",
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
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "metaDataURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "forSale",
        type: "bool",
      },
    ],
    name: "MarketItemCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "MarketItemRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "MarketItemSold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "newPlatformFee",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "newPayoutAddress",
        type: "address",
      },
    ],
    name: "changeFeeAndPayoutAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "createMarketItem",
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
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "createMarketSale",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "idToMarketItem",
    outputs: [
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "seller",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "forSale",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "deleted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payoutAddress",
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
    name: "platformFeeBasisPoint",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "removeFromSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200186a3803806200186a833981016040819052620000349162000252565b600160025562000046600033620000a2565b62000053600080620000b2565b600580546001600160a01b0316600160a01b6001600160601b038416021790556200007b3390565b600580546001600160a01b0319166001600160a01b03929092169190911790555062000284565b620000ae8282620000fd565b5050565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6200011482826200014060201b62000c9e1760201c565b60008281526001602090815260409091206200013b91839062000d22620001e0821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000ae576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200019c3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001f7836001600160a01b03841662000200565b90505b92915050565b60008181526001830160205260408120546200024957508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001fa565b506000620001fa565b6000602082840312156200026557600080fd5b81516001600160601b03811681146200027d57600080fd5b9392505050565b6115d680620002946000396000f3fe6080604052600436106100f35760003560e01c80635b8d02d71161008a578063c23b139e11610059578063c23b139e146102d9578063ca15c873146102ec578063d547741f1461030c578063e61a70c01461032c57600080fd5b80635b8d02d71461024c5780639010d07c1461028457806391d14854146102a4578063a217fddf146102c457600080fd5b806336568abe116100c657806336568abe146101ad5780633738b55a146101cd57806358eb2df5146101ed5780635a9cd0331461020d57600080fd5b806301ffc9a7146100f85780631361a3b61461012d578063248a9ca31461014f5780632f2ff15d1461018d575b600080fd5b34801561010457600080fd5b506101186101133660046111ac565b6103ea565b60405190151581526020015b60405180910390f35b34801561013957600080fd5b5061014d6101483660046111d6565b610415565b005b34801561015b57600080fd5b5061017f61016a3660046111d6565b60009081526020819052604090206001015490565b604051908152602001610124565b34801561019957600080fd5b5061014d6101a836600461120b565b61057f565b3480156101b957600080fd5b5061014d6101c836600461120b565b6105aa565b3480156101d957600080fd5b5061014d6101e8366004611237565b610628565b3480156101f957600080fd5b5061017f61020836600461126f565b61065f565b34801561021957600080fd5b5060055461023490600160a01b90046001600160601b031681565b6040516001600160601b039091168152602001610124565b34801561025857600080fd5b5060055461026c906001600160a01b031681565b6040516001600160a01b039091168152602001610124565b34801561029057600080fd5b5061026c61029f3660046112a2565b61098c565b3480156102b057600080fd5b506101186102bf36600461120b565b6109ab565b3480156102d057600080fd5b5061017f600081565b61014d6102e73660046112c4565b6109d4565b3480156102f857600080fd5b5061017f6103073660046111d6565b610c61565b34801561031857600080fd5b5061014d61032736600461120b565b610c78565b34801561033857600080fd5b5061039e6103473660046111d6565b6006602081905260009182526040909120805460018201546002830154600384015460048501546005860154959096015493956001600160a01b039384169592949184169316919060ff8082169161010090041688565b604080519889526001600160a01b0397881660208a015288019590955292851660608701529316608085015260a084019290925290151560c0830152151560e082015261010001610124565b60006001600160e01b03198216635a05180f60e01b148061040f575061040f82610d37565b92915050565b60008181526006602052604090206003015481906001600160a01b0316331461049c5760405162461bcd60e51b815260206004820152602e60248201527f4d61726b6574706c6163653a2053656e646572206973206e6f742073656c6c6560448201526d72206f662074686973206974656d60901b60648201526084015b60405180910390fd5b600082815260066020526040908190206001810154600382015460029092015492516323b872dd60e01b81523060048201526001600160a01b039283166024820152604481019390935216906323b872dd90606401600060405180830381600087803b15801561050b57600080fd5b505af115801561051f573d6000803e3d6000fd5b50505060008381526006602081905260409182902001805461ff001916610100179055517fd371e668750cb458fa9a55e99ade07ce913d63ab733d6e30fe303723e106cf9691506105739084815260200190565b60405180910390a15050565b60008281526020819052604090206001015461059b8133610d6c565b6105a58383610dd0565b505050565b6001600160a01b038116331461061a5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610493565b6106248282610df2565b5050565b60006106348133610d6c565b506001600160a01b03166001600160601b03909116600160a01b026001600160a01b03191617600555565b60008082116106c25760405162461bcd60e51b815260206004820152602960248201527f4d61726b6574706c6163653a205072696365206d757374206265206174206c6560448201526861737420312077656960b81b6064820152608401610493565b6106d0600380546001019055565b60006106db60035490565b9050604051806101000160405280828152602001866001600160a01b03168152602001858152602001336001600160a01b0316815260200160006001600160a01b0316815260200184815260200160011515815260200160011515815250600660008381526020019081526020016000206000820151816000015560208201518160010160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506040820151816002015560608201518160030160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060808201518160040160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060a0820151816005015560c08201518160060160006101000a81548160ff02191690831515021790555060e08201518160060160016101000a81548160ff021916908315150217905550905050846001600160a01b03166323b872dd3330876040518463ffffffff1660e01b8152600401610883939291906001600160a01b039384168152919092166020820152604081019190915260600190565b600060405180830381600087803b15801561089d57600080fd5b505af11580156108b1573d6000803e3d6000fd5b505060405163c87b56dd60e01b815260048101879052600092506001600160a01b038816915063c87b56dd9060240160006040518083038186803b1580156108f857600080fd5b505afa15801561090c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109349190810190611334565b905084866001600160a01b0316837fd39071221960ab18bca34a3fb540f0da19655735105a97ecd89dc2482dc4f857843360008a600160405161097b95949392919061140d565b60405180910390a450949350505050565b60008281526001602052604081206109a49083610e14565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b600280541415610a265760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610493565b600280805560008281526006602052604090206005810154910154348214610aa55760405162461bcd60e51b815260206004820152602c60248201527f4d61726b6574706c6163653a20506179204d61726b657420507269636520746f60448201526b08189d5e481d1a194813919560a21b6064820152608401610493565b6040516323b872dd60e01b8152306004820152336024820152604481018290526001600160a01b038516906323b872dd90606401600060405180830381600087803b158015610af357600080fd5b505af1158015610b07573d6000803e3d6000fd5b5050600554349250600091506103e890610b3190600160a01b90046001600160601b031684611465565b610b3b9190611484565b90506000610b4982846114a6565b6000878152600660205260408082206003015490519293506001600160a01b03169183156108fc0291849190818181858888f19350505050158015610b92573d6000803e3d6000fd5b506005546040516001600160a01b039091169083156108fc029084906000818181858888f19350505050158015610bcd573d6000803e3d6000fd5b506000868152600660208190526040909120600480820180546001600160a01b031916331790559101805460ff19169055610c0b9080546001019055565b604080513381526020810187905285916001600160a01b038a169189917f9789d8d6748e7f3e6c12fe6b244e2765b7e805f6b4b65a2474cad0ca8e788408910160405180910390a4505060016002555050505050565b600081815260016020526040812061040f90610e20565b600082815260208190526040902060010154610c948133610d6c565b6105a58383610df2565b610ca882826109ab565b610624576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610cde3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006109a4836001600160a01b038416610e2a565b60006001600160e01b03198216637965db0b60e01b148061040f57506301ffc9a760e01b6001600160e01b031983161461040f565b610d7682826109ab565b61062457610d8e816001600160a01b03166014610e79565b610d99836020610e79565b604051602001610daa9291906114bd565b60408051601f198184030181529082905262461bcd60e51b825261049391600401611532565b610dda8282610c9e565b60008281526001602052604090206105a59082610d22565b610dfc8282611015565b60008281526001602052604090206105a5908261107a565b60006109a4838361108f565b600061040f825490565b6000818152600183016020526040812054610e715750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561040f565b50600061040f565b60606000610e88836002611465565b610e93906002611545565b67ffffffffffffffff811115610eab57610eab6112ee565b6040519080825280601f01601f191660200182016040528015610ed5576020820181803683370190505b509050600360fc1b81600081518110610ef057610ef061155d565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610f1f57610f1f61155d565b60200101906001600160f81b031916908160001a9053506000610f43846002611465565b610f4e906001611545565b90505b6001811115610fc6576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610f8257610f8261155d565b1a60f81b828281518110610f9857610f9861155d565b60200101906001600160f81b031916908160001a90535060049490941c93610fbf81611573565b9050610f51565b5083156109a45760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610493565b61101f82826109ab565b15610624576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006109a4836001600160a01b0384166110b9565b60008260000182815481106110a6576110a661155d565b9060005260206000200154905092915050565b600081815260018301602052604081205480156111a25760006110dd6001836114a6565b85549091506000906110f1906001906114a6565b90508181146111565760008660000182815481106111115761111161155d565b90600052602060002001549050808760000184815481106111345761113461155d565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806111675761116761158a565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061040f565b600091505061040f565b6000602082840312156111be57600080fd5b81356001600160e01b0319811681146109a457600080fd5b6000602082840312156111e857600080fd5b5035919050565b80356001600160a01b038116811461120657600080fd5b919050565b6000806040838503121561121e57600080fd5b8235915061122e602084016111ef565b90509250929050565b6000806040838503121561124a57600080fd5b82356001600160601b038116811461126157600080fd5b915061122e602084016111ef565b60008060006060848603121561128457600080fd5b61128d846111ef565b95602085013595506040909401359392505050565b600080604083850312156112b557600080fd5b50508035926020909101359150565b600080604083850312156112d757600080fd5b6112e0836111ef565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561131f578181015183820152602001611307565b8381111561132e576000848401525b50505050565b60006020828403121561134657600080fd5b815167ffffffffffffffff8082111561135e57600080fd5b818401915084601f83011261137257600080fd5b815181811115611384576113846112ee565b604051601f8201601f19908116603f011681019083821181831017156113ac576113ac6112ee565b816040528281528760208487010111156113c557600080fd5b6113d6836020830160208801611304565b979650505050505050565b600081518084526113f9816020860160208601611304565b601f01601f19169290920160200192915050565b60a08152600061142060a08301886113e1565b6001600160a01b0396871660208401529490951660408201526060810192909252151560809091015292915050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561147f5761147f61144f565b500290565b6000826114a157634e487b7160e01b600052601260045260246000fd5b500490565b6000828210156114b8576114b861144f565b500390565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516114f5816017850160208801611304565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611526816028840160208801611304565b01602801949350505050565b6020815260006109a460208301846113e1565b600082198211156115585761155861144f565b500190565b634e487b7160e01b600052603260045260246000fd5b6000816115825761158261144f565b506000190190565b634e487b7160e01b600052603160045260246000fdfea26469706673582212201e24434a05503fd48a85eafd61c452ad4b0ab31584b0a3cb68ebe83b67c6bd8c64736f6c63430008090033";

type MarketplaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketplaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Marketplace__factory extends ContractFactory {
  constructor(...args: MarketplaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Marketplace";
  }

  deploy(
    _platformFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Marketplace> {
    return super.deploy(_platformFee, overrides || {}) as Promise<Marketplace>;
  }
  getDeployTransaction(
    _platformFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_platformFee, overrides || {});
  }
  attach(address: string): Marketplace {
    return super.attach(address) as Marketplace;
  }
  connect(signer: Signer): Marketplace__factory {
    return super.connect(signer) as Marketplace__factory;
  }
  static readonly contractName: "Marketplace";
  public readonly contractName: "Marketplace";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketplaceInterface {
    return new utils.Interface(_abi) as MarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Marketplace {
    return new Contract(address, _abi, signerOrProvider) as Marketplace;
  }
}

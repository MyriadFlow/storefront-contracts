/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AccountRegistry,
  AccountRegistryInterface,
} from "../AccountRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InitializationFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "AccountCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
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
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "account",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "accounts",
    outputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "walletAccount",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "counter",
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
        name: "implementation",
        type: "address",
      },
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
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "initData",
        type: "bytes",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
      {
        internalType: "bytes",
        name: "init",
        type: "bytes",
      },
    ],
    name: "intiateWallet",
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
    ],
    name: "setImplementation",
    outputs: [],
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userAccount",
    outputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "walletAccount",
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
        name: "",
        type: "address",
      },
    ],
    name: "userBalance",
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
];

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b50604051610b2f380380610b2f8339810160408190526100339161007b565b600180546001600160a01b0319166001600160a01b0383161790556100553390565b600280546001600160a01b0319166001600160a01b0392909216919091179055506100ab565b60006020828403121561008d57600080fd5b81516001600160a01b03811681146100a457600080fd5b9392505050565b610a75806100ba6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a0edbcd51161005b578063a0edbcd514610109578063d784d42614610178578063da7323b31461018b578063f2a40db81461019e57600080fd5b80630103c92b1461008d5780633f2c8034146100c05780635e9bc536146100d557806361bc221a14610100575b600080fd5b6100ad61009b366004610743565b60046020526000908152604090205481565b6040519081526020015b60405180910390f35b6100d36100ce36600461075e565b6101d8565b005b6100e86100e33660046107e5565b610275565b6040516001600160a01b0390911681526020016100b7565b6100ad60005481565b61014e610117366004610833565b60036020908152600092835260408084209091529082529020805460018201546002909201546001600160a01b0391821692911683565b604080516001600160a01b03948516815260208101939093529216918101919091526060016100b7565b6100d3610186366004610743565b6102a4565b6100e8610199366004610873565b610325565b61014e6101ac366004610961565b6005602052600090815260409020805460018201546002909201546001600160a01b0391821692911683565b604080514660208201526001600160a01b038616918101919091526060810184905260009060800160408051601f198184030181528282528051602080830191909120600154601f8801839004830286018301909452868552919450909261026c926001600160a01b03169146918a918a9187918b908b908190840183828082843760009201919091525061032592505050565b50505050505050565b600080610285878787878761057c565b8051602090910120905061029983826105e5565b979650505050505050565b6002546001600160a01b031633146103035760405162461bcd60e51b815260206004820152601c60248201527f4163636f756e745265676973747279203a204e6f74206f776e6572210000000060448201526064015b60405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600080610335888888888861057c565b9050600061034d8560001b83805190602001206105e5565b905061035b600086846105f9565b905083516000146103e6576000816001600160a01b03168560405161038091906109aa565b6000604051808303816000865af19150503d80600081146103bd576040519150601f19603f3d011682016040523d82523d6000602084013e6103c2565b606091505b50509050806103e457604051630337323560e31b815260040160405180910390fd5b505b6000805490806103f5836109b6565b91905055506040518060600160405280886001600160a01b03168152602001878152602001826001600160a01b0316815250600360006104323390565b6001600160a01b03908116825260208083019390935260409182016000908120815482528452828120855181546001600160a01b03199081169185169190911782559486015160018201559490920151600290940180549093169316929092179055805490600490336001600160a01b03908116825260208083019390935260409182016000908120949094558151606080820184528c83168083528286018d815288851684870181815289548a526005895298879020945185549087166001600160a01b03199182161786559151600186015597516002909401805494861694909116939093179092558351958652918e16938501939093529083018b90528201526080810187905260a081018690527f07fba7bba1191da7ee1155dcfa0030701c9c9a9cc34a93b991fc6fd0c9268d8f9060c00160405180910390a198975050505050505050565b60408051602081018390529081018590526001600160a01b0384166060828101919091526080820184905290869060a00160408051601f19818403018152908290526105cb92916020016109dd565b604051602081830303815290604052905095945050505050565b60006105f28383306106fd565b9392505050565b60008347101561064b5760405162461bcd60e51b815260206004820152601d60248201527f437265617465323a20696e73756666696369656e742062616c616e636500000060448201526064016102fa565b815160000361069c5760405162461bcd60e51b815260206004820181905260248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f60448201526064016102fa565b8282516020840186f590506001600160a01b0381166105f25760405162461bcd60e51b815260206004820152601960248201527f437265617465323a204661696c6564206f6e206465706c6f790000000000000060448201526064016102fa565b6000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b80356001600160a01b038116811461073e57600080fd5b919050565b60006020828403121561075557600080fd5b6105f282610727565b6000806000806060858703121561077457600080fd5b61077d85610727565b935060208501359250604085013567ffffffffffffffff808211156107a157600080fd5b818701915087601f8301126107b557600080fd5b8135818111156107c457600080fd5b8860208285010111156107d657600080fd5b95989497505060200194505050565b600080600080600060a086880312156107fd57600080fd5b61080686610727565b94506020860135935061081b60408701610727565b94979396509394606081013594506080013592915050565b6000806040838503121561084657600080fd5b61084f83610727565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60008060008060008060c0878903121561088c57600080fd5b61089587610727565b9550602087013594506108aa60408801610727565b9350606087013592506080870135915060a087013567ffffffffffffffff808211156108d557600080fd5b818901915089601f8301126108e957600080fd5b8135818111156108fb576108fb61085d565b604051601f8201601f19908116603f011681019083821181831017156109235761092361085d565b816040528281528c602084870101111561093c57600080fd5b8260208601602083013760006020848301015280955050505050509295509295509295565b60006020828403121561097357600080fd5b5035919050565b6000815160005b8181101561099b5760208185018101518683015201610981565b50600093019283525090919050565b60006105f2828461097a565b6000600182016109d657634e487b7160e01b600052601160045260246000fd5b5060010190565b733d60ad80600a3d3981f3363d3d373d3d3d363d7360601b8152606083901b6bffffffffffffffffffffffff191660148201526e5af43d82803e903d91602b57fd5bf360881b60288201526000610a37603783018461097a565b94935050505056fea26469706673582212206a372c851c9f6cea3ebaec415958b4956de12ef46eb463ad578f8b245c9b12bc64736f6c63430008110033";

type AccountRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccountRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AccountRegistry__factory extends ContractFactory {
  constructor(...args: AccountRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AccountRegistry";
  }

  deploy(
    contractAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AccountRegistry> {
    return super.deploy(
      contractAddr,
      overrides || {}
    ) as Promise<AccountRegistry>;
  }
  getDeployTransaction(
    contractAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(contractAddr, overrides || {});
  }
  attach(address: string): AccountRegistry {
    return super.attach(address) as AccountRegistry;
  }
  connect(signer: Signer): AccountRegistry__factory {
    return super.connect(signer) as AccountRegistry__factory;
  }
  static readonly contractName: "AccountRegistry";
  public readonly contractName: "AccountRegistry";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccountRegistryInterface {
    return new utils.Interface(_abi) as AccountRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccountRegistry {
    return new Contract(address, _abi, signerOrProvider) as AccountRegistry;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Bytecode, BytecodeInterface } from "../Bytecode";

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
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220e3ab60fb17299fc65a73da3e13a4b1cd12859ab2a3b3f91f4705a130e552f35564736f6c63430008110033";

type BytecodeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BytecodeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Bytecode__factory extends ContractFactory {
  constructor(...args: BytecodeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Bytecode";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Bytecode> {
    return super.deploy(overrides || {}) as Promise<Bytecode>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Bytecode {
    return super.attach(address) as Bytecode;
  }
  connect(signer: Signer): Bytecode__factory {
    return super.connect(signer) as Bytecode__factory;
  }
  static readonly contractName: "Bytecode";
  public readonly contractName: "Bytecode";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BytecodeInterface {
    return new utils.Interface(_abi) as BytecodeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Bytecode {
    return new Contract(address, _abi, signerOrProvider) as Bytecode;
  }
}

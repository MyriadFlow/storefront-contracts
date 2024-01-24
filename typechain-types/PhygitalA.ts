/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface PhygitalAInterface extends utils.Interface {
  contractName: "PhygitalA";
  functions: {
    "SIGNATURE_VERSION()": FunctionFragment;
    "SIGNING_DOMAIN()": FunctionFragment;
    "accessMasterAddress()": FunctionFragment;
    "amountRequired(uint256,uint256)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "assetStatus(bytes16)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "burnNFT(uint256)": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "maxSupply()": FunctionFragment;
    "mint(uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "phygitalID(uint256)": FunctionFragment;
    "registerAssetId(uint256,bytes16)": FunctionFragment;
    "rent(uint256,uint256)": FunctionFragment;
    "rentables(uint256)": FunctionFragment;
    "royaltyInfo(uint256,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setRentInfo(uint256,bool,uint256)": FunctionFragment;
    "setUser(uint256,address,uint64)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "tradeHub()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "userExpires(uint256)": FunctionFragment;
    "userOf(uint256)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "SIGNATURE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SIGNING_DOMAIN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "accessMasterAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "amountRequired",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "assetStatus",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "burnNFT",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "maxSupply", values?: undefined): string;
  encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "phygitalID",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerAssetId",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rent",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rentables",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyInfo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setRentInfo",
    values: [BigNumberish, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setUser",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tradeHub", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userExpires",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "SIGNATURE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SIGNING_DOMAIN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accessMasterAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "amountRequired",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "assetStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxSupply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "phygitalID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerAssetId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rentables", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "royaltyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRentInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tradeHub", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userExpires",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "ConsecutiveTransfer(uint256,uint256,address,address)": EventFragment;
    "FundTransferred(address,address,uint256,uint256)": EventFragment;
    "PhygitalAAssetCreated(uint256,uint256,address)": EventFragment;
    "PhygitalAAssetDestroyed(uint256,address)": EventFragment;
    "RentalInfo(uint256,bool,uint256,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "UpdateUser(uint256,address,uint64)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ConsecutiveTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FundTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PhygitalAAssetCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PhygitalAAssetDestroyed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RentalInfo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateUser"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; approved: string; tokenId: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  { owner: string; operator: string; approved: boolean }
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export type ConsecutiveTransferEvent = TypedEvent<
  [BigNumber, BigNumber, string, string],
  { fromTokenId: BigNumber; toTokenId: BigNumber; from: string; to: string }
>;

export type ConsecutiveTransferEventFilter =
  TypedEventFilter<ConsecutiveTransferEvent>;

export type FundTransferredEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { sender: string; reciepient: string; tokenId: BigNumber; amount: BigNumber }
>;

export type FundTransferredEventFilter = TypedEventFilter<FundTransferredEvent>;

export type PhygitalAAssetCreatedEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  { currentIndex: BigNumber; quantity: BigNumber; creator: string }
>;

export type PhygitalAAssetCreatedEventFilter =
  TypedEventFilter<PhygitalAAssetCreatedEvent>;

export type PhygitalAAssetDestroyedEvent = TypedEvent<
  [BigNumber, string],
  { tokenId: BigNumber; ownerOrApproved: string }
>;

export type PhygitalAAssetDestroyedEventFilter =
  TypedEventFilter<PhygitalAAssetDestroyedEvent>;

export type RentalInfoEvent = TypedEvent<
  [BigNumber, boolean, BigNumber, string],
  { tokenId: BigNumber; isRentable: boolean; price: BigNumber; renter: string }
>;

export type RentalInfoEventFilter = TypedEventFilter<RentalInfoEvent>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; to: string; tokenId: BigNumber }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export type UpdateUserEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { tokenId: BigNumber; user: string; expires: BigNumber }
>;

export type UpdateUserEventFilter = TypedEventFilter<UpdateUserEvent>;

export interface PhygitalA extends BaseContract {
  contractName: "PhygitalA";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PhygitalAInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    SIGNATURE_VERSION(overrides?: CallOverrides): Promise<[string]>;

    SIGNING_DOMAIN(overrides?: CallOverrides): Promise<[string]>;

    accessMasterAddress(overrides?: CallOverrides): Promise<[string]>;

    amountRequired(
      tokenId: BigNumberish,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    assetStatus(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnNFT(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    maxSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      quantity: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    phygitalID(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    registerAssetId(
      tokenId: BigNumberish,
      _phygitalID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rent(
      _tokenId: BigNumberish,
      _timeInHours: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rentables(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, BigNumber] & {
        isRentable: boolean;
        user: string;
        expires: BigNumber;
        hourlyRate: BigNumber;
      }
    >;

    royaltyInfo(
      _tokenId: BigNumberish,
      _salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRentInfo(
      tokenId: BigNumberish,
      isRentable: boolean,
      pricePerHour: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUser(
      tokenId: BigNumberish,
      user: string,
      expires: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    tradeHub(overrides?: CallOverrides): Promise<[string]>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userExpires(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    version(overrides?: CallOverrides): Promise<[number]>;
  };

  SIGNATURE_VERSION(overrides?: CallOverrides): Promise<string>;

  SIGNING_DOMAIN(overrides?: CallOverrides): Promise<string>;

  accessMasterAddress(overrides?: CallOverrides): Promise<string>;

  amountRequired(
    tokenId: BigNumberish,
    time: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  assetStatus(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnNFT(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  maxSupply(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    quantity: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  phygitalID(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  registerAssetId(
    tokenId: BigNumberish,
    _phygitalID: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rent(
    _tokenId: BigNumberish,
    _timeInHours: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rentables(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string, BigNumber, BigNumber] & {
      isRentable: boolean;
      user: string;
      expires: BigNumber;
      hourlyRate: BigNumber;
    }
  >;

  royaltyInfo(
    _tokenId: BigNumberish,
    _salePrice: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRentInfo(
    tokenId: BigNumberish,
    isRentable: boolean,
    pricePerHour: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUser(
    tokenId: BigNumberish,
    user: string,
    expires: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  tradeHub(overrides?: CallOverrides): Promise<string>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userExpires(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  version(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    SIGNATURE_VERSION(overrides?: CallOverrides): Promise<string>;

    SIGNING_DOMAIN(overrides?: CallOverrides): Promise<string>;

    accessMasterAddress(overrides?: CallOverrides): Promise<string>;

    amountRequired(
      tokenId: BigNumberish,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    assetStatus(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    burnNFT(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxSupply(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    name(overrides?: CallOverrides): Promise<string>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    phygitalID(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    registerAssetId(
      tokenId: BigNumberish,
      _phygitalID: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    rent(
      _tokenId: BigNumberish,
      _timeInHours: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    rentables(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, BigNumber] & {
        isRentable: boolean;
        user: string;
        expires: BigNumber;
        hourlyRate: BigNumber;
      }
    >;

    royaltyInfo(
      _tokenId: BigNumberish,
      _salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setRentInfo(
      tokenId: BigNumberish,
      isRentable: boolean,
      pricePerHour: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setUser(
      tokenId: BigNumberish,
      user: string,
      expires: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    tradeHub(overrides?: CallOverrides): Promise<string>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    userExpires(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    version(overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "ConsecutiveTransfer(uint256,uint256,address,address)"(
      fromTokenId?: BigNumberish | null,
      toTokenId?: null,
      from?: string | null,
      to?: string | null
    ): ConsecutiveTransferEventFilter;
    ConsecutiveTransfer(
      fromTokenId?: BigNumberish | null,
      toTokenId?: null,
      from?: string | null,
      to?: string | null
    ): ConsecutiveTransferEventFilter;

    "FundTransferred(address,address,uint256,uint256)"(
      sender?: null,
      reciepient?: null,
      tokenId?: null,
      amount?: null
    ): FundTransferredEventFilter;
    FundTransferred(
      sender?: null,
      reciepient?: null,
      tokenId?: null,
      amount?: null
    ): FundTransferredEventFilter;

    "PhygitalAAssetCreated(uint256,uint256,address)"(
      currentIndex?: null,
      quantity?: null,
      creator?: string | null
    ): PhygitalAAssetCreatedEventFilter;
    PhygitalAAssetCreated(
      currentIndex?: null,
      quantity?: null,
      creator?: string | null
    ): PhygitalAAssetCreatedEventFilter;

    "PhygitalAAssetDestroyed(uint256,address)"(
      tokenId?: BigNumberish | null,
      ownerOrApproved?: null
    ): PhygitalAAssetDestroyedEventFilter;
    PhygitalAAssetDestroyed(
      tokenId?: BigNumberish | null,
      ownerOrApproved?: null
    ): PhygitalAAssetDestroyedEventFilter;

    "RentalInfo(uint256,bool,uint256,address)"(
      tokenId?: null,
      isRentable?: null,
      price?: null,
      renter?: string | null
    ): RentalInfoEventFilter;
    RentalInfo(
      tokenId?: null,
      isRentable?: null,
      price?: null,
      renter?: string | null
    ): RentalInfoEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;

    "UpdateUser(uint256,address,uint64)"(
      tokenId?: BigNumberish | null,
      user?: string | null,
      expires?: null
    ): UpdateUserEventFilter;
    UpdateUser(
      tokenId?: BigNumberish | null,
      user?: string | null,
      expires?: null
    ): UpdateUserEventFilter;
  };

  estimateGas: {
    SIGNATURE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    SIGNING_DOMAIN(overrides?: CallOverrides): Promise<BigNumber>;

    accessMasterAddress(overrides?: CallOverrides): Promise<BigNumber>;

    amountRequired(
      tokenId: BigNumberish,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    assetStatus(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnNFT(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxSupply(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      quantity: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    phygitalID(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerAssetId(
      tokenId: BigNumberish,
      _phygitalID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rent(
      _tokenId: BigNumberish,
      _timeInHours: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rentables(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    royaltyInfo(
      _tokenId: BigNumberish,
      _salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRentInfo(
      tokenId: BigNumberish,
      isRentable: boolean,
      pricePerHour: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUser(
      tokenId: BigNumberish,
      user: string,
      expires: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    tradeHub(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userExpires(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    SIGNATURE_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SIGNING_DOMAIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    accessMasterAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    amountRequired(
      tokenId: BigNumberish,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    assetStatus(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnNFT(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      quantity: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    phygitalID(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerAssetId(
      tokenId: BigNumberish,
      _phygitalID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rent(
      _tokenId: BigNumberish,
      _timeInHours: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rentables(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    royaltyInfo(
      _tokenId: BigNumberish,
      _salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRentInfo(
      tokenId: BigNumberish,
      isRentable: boolean,
      pricePerHour: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUser(
      tokenId: BigNumberish,
      user: string,
      expires: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tradeHub(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userExpires(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

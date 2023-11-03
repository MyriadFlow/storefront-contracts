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

export interface TradeHubInterface extends utils.Interface {
  contractName: "TradeHub";
  functions: {
    "acceptBidAndEndAuction(uint256)": FunctionFragment;
    "accessMasterAddress()": FunctionFragment;
    "buyItem(uint256,uint256)": FunctionFragment;
    "changeFee(uint96)": FunctionFragment;
    "concludeAuction(uint256)": FunctionFragment;
    "idToMarketItem(uint256)": FunctionFragment;
    "listItem(address,uint256,uint256,uint256,bool,uint256)": FunctionFragment;
    "marketItemERC1155(address,address,uint256)": FunctionFragment;
    "marketItemERC721(address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "placeBid(uint256)": FunctionFragment;
    "platformFeeBasisPoint()": FunctionFragment;
    "removeItem(uint256)": FunctionFragment;
    "royaltyInfo(uint256,uint256)": FunctionFragment;
    "startAuction(uint256,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "updateAuctionTime(uint256,uint256)": FunctionFragment;
    "updatePrice(uint256,uint256)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptBidAndEndAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "accessMasterAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyItem",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "concludeAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "idToMarketItem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "listItem",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "marketItemERC1155",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "marketItemERC721",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "placeBid",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "platformFeeBasisPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeItem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyInfo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startAuction",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAuctionTime",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "acceptBidAndEndAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accessMasterAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "changeFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "concludeAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "idToMarketItem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "marketItemERC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketItemERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "placeBid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "platformFeeBasisPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "removeItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "royaltyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAuctionTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "AuctionEnded(uint256,address,uint256,string,address,address,uint256)": EventFragment;
    "AuctionStarted(uint256,address,uint256,string,address,uint256,uint256)": EventFragment;
    "BidPlaced(uint256,uint256,address)": EventFragment;
    "ItemRemoved(uint256,address,uint256,string,address)": EventFragment;
    "ItemSold(uint256,address,uint256,string,address,address,uint256,uint256)": EventFragment;
    "PriceUpdated(uint256,uint256)": EventFragment;
    "SaleStarted(uint256,address,uint256,string,address,uint256)": EventFragment;
    "TimeUpdated(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BidPlaced"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemSold"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SaleStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TimeUpdated"): EventFragment;
}

export type AuctionEndedEvent = TypedEvent<
  [BigNumber, string, BigNumber, string, string, string, BigNumber],
  {
    auctionId: BigNumber;
    nftContract: string;
    tokenId: BigNumber;
    metadataURI: string;
    auctioneer: string;
    highestBidder: string;
    bid: BigNumber;
  }
>;

export type AuctionEndedEventFilter = TypedEventFilter<AuctionEndedEvent>;

export type AuctionStartedEvent = TypedEvent<
  [BigNumber, string, BigNumber, string, string, BigNumber, BigNumber],
  {
    itemId: BigNumber;
    nftContract: string;
    tokenId: BigNumber;
    metaDataURI: string;
    auctioneer: string;
    basePrice: BigNumber;
    endTime: BigNumber;
  }
>;

export type AuctionStartedEventFilter = TypedEventFilter<AuctionStartedEvent>;

export type BidPlacedEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  { itemId: BigNumber; amount: BigNumber; bidder: string }
>;

export type BidPlacedEventFilter = TypedEventFilter<BidPlacedEvent>;

export type ItemRemovedEvent = TypedEvent<
  [BigNumber, string, BigNumber, string, string],
  {
    itemId: BigNumber;
    nftContract: string;
    tokenId: BigNumber;
    metaDataURI: string;
    seller: string;
  }
>;

export type ItemRemovedEventFilter = TypedEventFilter<ItemRemovedEvent>;

export type ItemSoldEvent = TypedEvent<
  [BigNumber, string, BigNumber, string, string, string, BigNumber, BigNumber],
  {
    itemId: BigNumber;
    nftContract: string;
    tokenId: BigNumber;
    metadataURI: string;
    seller: string;
    buyer: string;
    price: BigNumber;
    quantity: BigNumber;
  }
>;

export type ItemSoldEventFilter = TypedEventFilter<ItemSoldEvent>;

export type PriceUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { itemId: BigNumber; updatedPrice: BigNumber }
>;

export type PriceUpdatedEventFilter = TypedEventFilter<PriceUpdatedEvent>;

export type SaleStartedEvent = TypedEvent<
  [BigNumber, string, BigNumber, string, string, BigNumber],
  {
    itemId: BigNumber;
    nftContract: string;
    tokenId: BigNumber;
    metaDataURI: string;
    seller: string;
    price: BigNumber;
  }
>;

export type SaleStartedEventFilter = TypedEventFilter<SaleStartedEvent>;

export type TimeUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { itemId: BigNumber; updatedTime: BigNumber }
>;

export type TimeUpdatedEventFilter = TypedEventFilter<TimeUpdatedEvent>;

export interface TradeHub extends BaseContract {
  contractName: "TradeHub";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TradeHubInterface;

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
    acceptBidAndEndAuction(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    accessMasterAddress(overrides?: CallOverrides): Promise<[string]>;

    buyItem(
      itemId: BigNumberish,
      quantity: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeFee(
      newPlatformFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    concludeAuction(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    idToMarketItem(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        number
      ] & {
        itemId: BigNumber;
        nftContract: string;
        tokenId: BigNumber;
        seller: string;
        price: BigNumber;
        supply: BigNumber;
        auctioneEndTime: BigNumber;
        highestBid: BigNumber;
        highestBidder: string;
        status: number;
      }
    >;

    listItem(
      nftContract: string,
      tokenId: BigNumberish,
      price: BigNumberish,
      quantity: BigNumberish,
      forAuction: boolean,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    marketItemERC1155(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    marketItemERC721(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    placeBid(
      itemId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    platformFeeBasisPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeItem(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    royaltyInfo(
      _tokenId: BigNumberish,
      _salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    startAuction(
      itemId: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    updateAuctionTime(
      itemId: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePrice(
      itemId: BigNumberish,
      pricePerUnit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[number]>;
  };

  acceptBidAndEndAuction(
    itemId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  accessMasterAddress(overrides?: CallOverrides): Promise<string>;

  buyItem(
    itemId: BigNumberish,
    quantity: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeFee(
    newPlatformFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  concludeAuction(
    itemId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  idToMarketItem(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      number
    ] & {
      itemId: BigNumber;
      nftContract: string;
      tokenId: BigNumber;
      seller: string;
      price: BigNumber;
      supply: BigNumber;
      auctioneEndTime: BigNumber;
      highestBid: BigNumber;
      highestBidder: string;
      status: number;
    }
  >;

  listItem(
    nftContract: string,
    tokenId: BigNumberish,
    price: BigNumberish,
    quantity: BigNumberish,
    forAuction: boolean,
    time: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  marketItemERC1155(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  marketItemERC721(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  onERC1155BatchReceived(
    arg0: string,
    arg1: string,
    arg2: BigNumberish[],
    arg3: BigNumberish[],
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  placeBid(
    itemId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  platformFeeBasisPoint(overrides?: CallOverrides): Promise<BigNumber>;

  removeItem(
    itemId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  royaltyInfo(
    _tokenId: BigNumberish,
    _salePrice: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  startAuction(
    itemId: BigNumberish,
    time: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  updateAuctionTime(
    itemId: BigNumberish,
    time: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePrice(
    itemId: BigNumberish,
    pricePerUnit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    acceptBidAndEndAuction(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    accessMasterAddress(overrides?: CallOverrides): Promise<string>;

    buyItem(
      itemId: BigNumberish,
      quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeFee(
      newPlatformFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    concludeAuction(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    idToMarketItem(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        number
      ] & {
        itemId: BigNumber;
        nftContract: string;
        tokenId: BigNumber;
        seller: string;
        price: BigNumber;
        supply: BigNumber;
        auctioneEndTime: BigNumber;
        highestBid: BigNumber;
        highestBidder: string;
        status: number;
      }
    >;

    listItem(
      nftContract: string,
      tokenId: BigNumberish,
      price: BigNumberish,
      quantity: BigNumberish,
      forAuction: boolean,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    marketItemERC1155(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    marketItemERC721(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    placeBid(itemId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    platformFeeBasisPoint(overrides?: CallOverrides): Promise<BigNumber>;

    removeItem(itemId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    royaltyInfo(
      _tokenId: BigNumberish,
      _salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    startAuction(
      itemId: BigNumberish,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateAuctionTime(
      itemId: BigNumberish,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updatePrice(
      itemId: BigNumberish,
      pricePerUnit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    "AuctionEnded(uint256,address,uint256,string,address,address,uint256)"(
      auctionId?: BigNumberish | null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metadataURI?: null,
      auctioneer?: null,
      highestBidder?: null,
      bid?: null
    ): AuctionEndedEventFilter;
    AuctionEnded(
      auctionId?: BigNumberish | null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metadataURI?: null,
      auctioneer?: null,
      highestBidder?: null,
      bid?: null
    ): AuctionEndedEventFilter;

    "AuctionStarted(uint256,address,uint256,string,address,uint256,uint256)"(
      itemId?: null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metaDataURI?: null,
      auctioneer?: string | null,
      basePrice?: null,
      endTime?: null
    ): AuctionStartedEventFilter;
    AuctionStarted(
      itemId?: null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metaDataURI?: null,
      auctioneer?: string | null,
      basePrice?: null,
      endTime?: null
    ): AuctionStartedEventFilter;

    "BidPlaced(uint256,uint256,address)"(
      itemId?: null,
      amount?: null,
      bidder?: string | null
    ): BidPlacedEventFilter;
    BidPlaced(
      itemId?: null,
      amount?: null,
      bidder?: string | null
    ): BidPlacedEventFilter;

    "ItemRemoved(uint256,address,uint256,string,address)"(
      itemId?: null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metaDataURI?: null,
      seller?: null
    ): ItemRemovedEventFilter;
    ItemRemoved(
      itemId?: null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metaDataURI?: null,
      seller?: null
    ): ItemRemovedEventFilter;

    "ItemSold(uint256,address,uint256,string,address,address,uint256,uint256)"(
      itemId?: BigNumberish | null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metadataURI?: null,
      seller?: null,
      buyer?: null,
      price?: null,
      quantity?: null
    ): ItemSoldEventFilter;
    ItemSold(
      itemId?: BigNumberish | null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metadataURI?: null,
      seller?: null,
      buyer?: null,
      price?: null,
      quantity?: null
    ): ItemSoldEventFilter;

    "PriceUpdated(uint256,uint256)"(
      itemId?: null,
      updatedPrice?: null
    ): PriceUpdatedEventFilter;
    PriceUpdated(itemId?: null, updatedPrice?: null): PriceUpdatedEventFilter;

    "SaleStarted(uint256,address,uint256,string,address,uint256)"(
      itemId?: BigNumberish | null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metaDataURI?: null,
      seller?: null,
      price?: null
    ): SaleStartedEventFilter;
    SaleStarted(
      itemId?: BigNumberish | null,
      nftContract?: string | null,
      tokenId?: BigNumberish | null,
      metaDataURI?: null,
      seller?: null,
      price?: null
    ): SaleStartedEventFilter;

    "TimeUpdated(uint256,uint256)"(
      itemId?: null,
      updatedTime?: null
    ): TimeUpdatedEventFilter;
    TimeUpdated(itemId?: null, updatedTime?: null): TimeUpdatedEventFilter;
  };

  estimateGas: {
    acceptBidAndEndAuction(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    accessMasterAddress(overrides?: CallOverrides): Promise<BigNumber>;

    buyItem(
      itemId: BigNumberish,
      quantity: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeFee(
      newPlatformFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    concludeAuction(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    idToMarketItem(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    listItem(
      nftContract: string,
      tokenId: BigNumberish,
      price: BigNumberish,
      quantity: BigNumberish,
      forAuction: boolean,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    marketItemERC1155(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    marketItemERC721(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    placeBid(
      itemId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    platformFeeBasisPoint(overrides?: CallOverrides): Promise<BigNumber>;

    removeItem(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    royaltyInfo(
      _tokenId: BigNumberish,
      _salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startAuction(
      itemId: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateAuctionTime(
      itemId: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePrice(
      itemId: BigNumberish,
      pricePerUnit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptBidAndEndAuction(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    accessMasterAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buyItem(
      itemId: BigNumberish,
      quantity: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeFee(
      newPlatformFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    concludeAuction(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    idToMarketItem(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listItem(
      nftContract: string,
      tokenId: BigNumberish,
      price: BigNumberish,
      quantity: BigNumberish,
      forAuction: boolean,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    marketItemERC1155(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    marketItemERC721(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    placeBid(
      itemId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    platformFeeBasisPoint(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeItem(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    royaltyInfo(
      _tokenId: BigNumberish,
      _salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    startAuction(
      itemId: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateAuctionTime(
      itemId: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePrice(
      itemId: BigNumberish,
      pricePerUnit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

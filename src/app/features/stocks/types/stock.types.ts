export interface IStock {
    symbol: string,
    shortName: string,
    type: StockTypeEnum,
}

export interface ITransaction {
    price: number,
    timestamp: number,
    amountOfShares: number,
    stock: IStock
}

export enum StockTypeEnum {
    YahooStock,
    PreciousMetal,
    Custom
}

export interface IStockWithAVG extends IStock {
    avgPrice: number,
    totalAmountOfShares: number;
}
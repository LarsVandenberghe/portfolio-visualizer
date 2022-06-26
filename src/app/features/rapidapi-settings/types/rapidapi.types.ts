export interface IAutoComplete {
    quotes: IQuote[]
}

export interface IQuote {
    exchDisp: string,
    exchange: string,
    index: string,
    isYahooFinance: boolean,
    longname: string,
    quoteType: string,
    score: number,
    shortname: string,
    symbol: string,
    typeDisp: string
}

export interface IApiKeyStore {
    yahooKey: string,
    perciousMetalKey: string
}

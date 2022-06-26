import { IStockWithAVG, ITransaction } from "../types/stock.types";

export function getAllStocksFromTransactions(transactions: ITransaction[]): IStockWithAVG[] {
    const stockSymbols = [...new Set(transactions.map(t => t.stock.symbol))];
    const stocks = stockSymbols.map(s => {
        const stockTransactions = transactions.filter(t => t.stock.symbol === s);
        const totalAmountOfShares = stockTransactions.map(st => st.amountOfShares).reduce((acc, cur) => acc + cur, 0);
        const avgPrice = stockTransactions.map(st => st.amountOfShares * st.price).reduce((acc, cur) => acc + cur, 0) / totalAmountOfShares;
        return {
            symbol: s,
            totalAmountOfShares,
            shortName: stockTransactions[0].stock.shortName,
            type: stockTransactions[0].stock.type,
            avgPrice
        }
    })
    return stocks.sort((a, b) => a.shortName.localeCompare(b.shortName));
}
export const mocks: StockItem[] = [{
    "symbol": "MSFT",
    "price": "183.8900",
    "change": "0.2600",
    "change_percent": "0.1416%"
}, {
    "symbol": "AAPL",
    "price": "320.0300",
    "change": "-5.1800",
    "change_percent": "-1.5928%"
}, {
    "symbol": "GOOG",
    "price": "1479.2300",
    "change": "3.0000",
    "change_percent": "0.2032%"
}]

export interface StockItem {
    symbol: string,
    price: string,
    change: string,
    change_percent: string
}

import React from 'react'
import { StockItem } from '../mocks'
import {Stock} from './stock';

interface StocksProps {
    items: StockItem[]
}

export const Stocks:React.FC<StocksProps> = (props) => {

    return (
        <div>{
            props.items.map(
                item => <Stock key={item.symbol} item={item} />
            )
        }</div>
    )
}

export default Stocks

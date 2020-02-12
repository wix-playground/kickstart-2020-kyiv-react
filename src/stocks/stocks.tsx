import React from 'react'
import { StockItem } from '../mocks'
import Stock from './stock';
// import {useMode} from '../hooks/use-mode';

interface StocksProps {
    items: StockItem[]
}

export const Stocks:React.FC<StocksProps> = (props) => {
    // const {mode, toggleMode} = useMode('percent')

    return (
        <div>{
            props.items.map(
                item => <Stock
                    key={item.symbol}
                    item={item}
                />
            )
        }</div>
    )
}

export default Stocks

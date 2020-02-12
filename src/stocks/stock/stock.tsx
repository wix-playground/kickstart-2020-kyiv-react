import React from 'react'
import { StockItem } from '../../mocks'
import {mode, ModeProps} from '../../hocs/mode';

interface StockOwnProps {
    item: StockItem,
}

export const Stock: React.FC<StockOwnProps & ModeProps> = ({item, mode, toggleMode}) => {
    return (
        <div key={item.symbol}>
            <span>{item.symbol}</span>
            <span style={{margin: '16px'}}>{item.price}</span>
            <button
                onClick={() => toggleMode()}
            >
                {
                    mode === 'absolute' ?
                        item.change :
                        item.change_percent
                }
            </button>
        </div>
    )
}

export default mode<StockOwnProps>(Stock)

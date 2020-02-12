import React, {useCallback, useState} from 'react'
import { StockItem } from '../../mocks'
import {StocksMode} from '../../hooks/use-mode'
import {mode} from '../../hocs/mode';

interface StockProps {
    item: StockItem,
    mode: StocksMode,
    toggleMode: () => void
}

export const Stock: React.FC<StockProps> = ({item, mode, toggleMode}) => {
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

export default mode(Stock)

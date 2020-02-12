import React, {useCallback, useState} from 'react'
import { StockItem } from '../../mocks'

interface StockProps {
    item: StockItem
}

type StocksMode = 'absolute' | 'percent'

export const Stock: React.FC<StockProps> = ({item}) => {
    const [mode, setMode] = useState<StocksMode>('absolute')

    const handleChangeMode = useCallback((event) => {
        mode === 'absolute' ? setMode('percent') : setMode('absolute')
    }, [mode, setMode])

    return (
        <div key={item.symbol}>
            <span>{item.symbol}</span>
            <span style={{margin: '16px'}}>{item.price}</span>
            <button
                onClick={handleChangeMode}
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

export default Stock

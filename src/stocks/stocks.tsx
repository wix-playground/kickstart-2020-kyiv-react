import React, {useCallback, useState} from 'react'
import { StockItem } from '../mocks'

interface StocksProps {
    items: StockItem[]
}

type StocksMode = 'absolute' | 'percent'

export const Stocks:React.FC<StocksProps> = (props) => {
    const [mode, setMode] = useState<StocksMode>('absolute')

    const handleChangeMode = useCallback((event) => {
        mode === 'absolute' ? setMode('percent') : setMode('absolute')
    }, [mode, setMode])

    return (
        <div>{
            props.items.map(
                item => <div key={item.symbol}>
                    <span>{item.symbol}</span>
                    <span style={{margin: '16px'}}>{item.price}</span>
                    <button
                        onClick={handleChangeMode}
                    >
                        {
                            mode === 'absolute'?
                                item.change :
                                item.change_percent
                        }
                    </button>
                </div>
            )
        }</div>
    )
}

export default Stocks

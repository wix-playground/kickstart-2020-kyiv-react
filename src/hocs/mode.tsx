import React, {useCallback, useState} from 'react'
export type StocksMode = 'absolute' | 'percent'

export const mode = (OriginalComponent: React.FC) => (props: any) => {
    const [mode, setMode] = useState<StocksMode>(props.initialValue)
    const toggleMode = useCallback(() => {
        mode === 'absolute' ? setMode('percent') : setMode('absolute')
    }, [mode, setMode])

    return (
        <OriginalComponent
            {...props}
            mode={mode}
            toggleMode={toggleMode}
        />
    )
}

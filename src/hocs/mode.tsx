import React, {useCallback, useState} from 'react'
export type StocksMode = 'absolute' | 'percent'

export interface ModeProps {
    mode: StocksMode,
    toggleMode: () => void
}


interface HOC {
    <P extends object>(OriginalComponent: React.FC<P & ModeProps>): React.FC<P & {initialValue?: StocksMode}>
}

export const mode: HOC = (
    OriginalComponent
) => (props) => {
    const [mode, setMode] = useState<StocksMode>(props.initialValue || 'absolute')
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

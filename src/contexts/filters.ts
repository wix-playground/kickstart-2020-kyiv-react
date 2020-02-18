import {createContext} from 'react'

export interface FilterState {
    name: string,
    setFilter: (value: Omit<FilterState, 'setFilter'>) => void
}

export const FilterContext = createContext<FilterState>({name: '', setFilter: () => {}})

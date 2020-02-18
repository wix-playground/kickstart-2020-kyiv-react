import React, {useContext} from 'react'
import {FilterContext} from '../contexts/filters'

export const FilterInput = () => {
    const {name, setFilter} = useContext(FilterContext)
    return (
        <div>
            <input value={name} onChange={(event) => {
                setFilter({name: event.target.value})
            }}/>
        </div>
    )
}

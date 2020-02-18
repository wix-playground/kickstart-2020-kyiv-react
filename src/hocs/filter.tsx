import React, {useContext} from 'react'
import {FilterContext} from '../contexts/filters';

export const filter = (OriginalComponent: any): React.FC => (props) => {
    const filterState = useContext(FilterContext)
    return (
        <OriginalComponent
            {...props}
            filters={filterState}
        />
    )
}

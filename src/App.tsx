import React, {useCallback, useState} from 'react';
import './App.css';
import {Stocks} from './stocks';
import { StockItem } from './mocks';
import {FilterContext, FilterState} from './contexts/filters';
import {FilterInput} from './filter-input/filter-input'

const {Provider} = FilterContext

interface AppProps {
  initialState: Array<StockItem>
}

const App: React.FC<AppProps> = (props) => {
    const [stocks] = useState(props.initialState)
    const [isVisible, setVisibility] = useState(true)
    const [filter, setFilter] = useState<Omit<FilterState, 'setFilter'>>({name: ''})
    const handleButtonClick = useCallback(() => {
        setFilter({name: 'foo'})
    }, [])

  return (
      <Provider value={{
          name: filter.name,
          setFilter: setFilter
      }}>
        <div className="App">
          <button onClick={handleButtonClick}>Show/Hide</button>
            <FilterInput/>
          {isVisible ? <Stocks items={stocks}/> : null}
        </div>
      </Provider>
  );
}

export default App;

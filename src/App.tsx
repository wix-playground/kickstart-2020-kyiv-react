import React, {useState} from 'react';
import './App.css';
import {Stocks} from './stocks';
import { StockItem } from './mocks';

interface AppProps {
  initialState: Array<StockItem>
}

const App: React.FC<AppProps> = (props) => {
  const [stocks] = useState(props.initialState)

  return (
    <div className="App">
        <Stocks items={stocks}/>
    </div>
  );
}

export default App;

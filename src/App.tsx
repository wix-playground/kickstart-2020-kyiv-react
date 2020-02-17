import React, {useState} from 'react';
import './App.css';
import {Stocks} from './stocks';
import { StockItem } from './mocks';

interface AppProps {
  initialState: Array<StockItem>
}

const App: React.FC<AppProps> = (props) => {
  const [stocks] = useState(props.initialState)
  const [isVisible, setVisibility] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setVisibility(!isVisible)}>Show/Hide</button>
        {isVisible ? <Stocks items={stocks}/> : null}
    </div>
  );
}

export default App;

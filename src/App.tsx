import React, {useState} from 'react';
import Label from './label';
import './App.css';

interface AppProps {
  initialState: number
}

const App: React.FC<AppProps> = (props) => {
  const [count, setCount] = useState(props.initialState)
  const [count2, setCount2] = useState(props.initialState)
  const [count3, setCount3] = useState(props.initialState)
  return (
    <div className="App">
      <Label text={count}/>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Label text={count2}/>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
      <Label text={count3}/>
      <button onClick={() => setCount3(count3 + 1)}>+</button>
    </div>
  );
}

export default App;

import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment, incrementByAmount,  } from './redux/slice-features/counterSlice';
import { useState } from 'react';

const App = () => {
  const dispatch = useDispatch(); // by on click on button it changes the value of state and it will re-render the component and show the updated value of state
  const counterValue = useSelector((state) => state.counter.value); // to get the value of state from the store and show it in the component

  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>{counterValue}</h1>
      <button onClick={() => {dispatch(increment())}}>increment</button>
      <button onClick={() => {dispatch(decrement())}}>decrement</button>
      <input type="number" 
        value={num} onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={() => {dispatch(incrementByAmount(Number(num)))}}>increase by Amount</button>   {/* {dispatch(incrementByAmount(5)}} => ypu can also do  */}
    </div>
  )
}

export default App
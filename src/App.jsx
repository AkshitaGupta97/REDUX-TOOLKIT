import {useDispatch, useSelector} from 'react-redux';

const App = () => {
  const dispatch = useDispatch(); // by on click on button it changes the value of state and it will re-render the component and show the updated value of state
  const counterValue = useSelector((state) => state.counter.value); // to get the value of state from the store and show it in the component

  return (
    <div>
      <h1>0</h1>
      <button onClick={() => {}}>increment</button>
      <button onClick={() => {}}>decrement</button>
    </div>
  )
}

export default App
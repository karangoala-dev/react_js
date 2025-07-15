import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './redux/slices/counterSlice';
import './App.css'
import Header from './Header';

function App() {
  //get the dispatch function in dispatch variable
  const dispatch = useDispatch();

  //get count value from store
  const count = useSelector((state) => state.counter);
  console.log(count);
  return (
    <>
      <Header/>
      <h1>Redux Example</h1>      
      <h1>Count: {count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </>
  )
}

export default App

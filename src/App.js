import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// function App() {
//    const[count, setCount] = useState(0);
//    useEffect(() => count + 1,[]);   
// return <>
//     <h1>count = {count}</h1>
//     <button onClick={()=>setcount(count +1)}>+1</button>
//   <>
//   }
// export default App;
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1)
  }, [])
  return <>
    <h1>count = {count}</h1>
    <button onClick={() => setCount(count + )}>+infinity</button>
  </>
}
export default App;

import {useState} from 'react'

function App() {

  let [counter,setCounter] = useState(15)


  const addValue =() => {
    console.log("add",Math.random());
    if(counter > 4)
      setCounter(0);
    else
    setCounter(counter + 1)
  }
  const decvalue = () => {
    if(counter < -4)
      setCounter(0);
    else
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>hello</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick = {addValue}>increase {counter}</button>
      <br />
      <button onClick = {decvalue}>decrease {counter}</button>

    </>
  )
}

export default App

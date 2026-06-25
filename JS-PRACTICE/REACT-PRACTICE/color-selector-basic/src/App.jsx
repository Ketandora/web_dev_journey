import { useState } from 'react'
import Colorr from './practice/color-selector'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Colorr/>
    </>
  )
}

export default App

import React from 'react'
import { useState } from 'react'

function App() {
const [Count,SetCount]=useState(0)

function increase(){
  SetCount(Count+1)
}

function decrease(){
  SetCount(Count-1)
}

  return (
    <>
    <div>This is the counter
      And Count is : {Count}
    </div>
    <button onClick={increase}>increase</button>
    <button onClick={decrease}>decrease</button>
    </>
  )
}

export default App
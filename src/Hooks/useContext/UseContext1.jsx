import React, { useContext } from 'react'
import { CountContext } from './CountContextProvider'

export default function UseContext1() {

  const {count, setCount} = useContext(CountContext)

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}

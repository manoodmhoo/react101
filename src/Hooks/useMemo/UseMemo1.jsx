import React, { useMemo, useState } from 'react'

export default function UseMemo1() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <WithUseMemo />
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>+ Increment</button>
    </>
  )
}

const WithUseMemo = () => {
  const ExpensiveCalculation = (num) => {
      for (let i = 0; i < 10000000000; i++) {}
      return num * 2
  }

  const memorizedResult = useMemo(() => ExpensiveCalculation(2), [])
  console.log('memorizedResult', memorizedResult)

  return (
    <>
      <div>Counter: {memorizedResult}</div>
    </>
  );
}

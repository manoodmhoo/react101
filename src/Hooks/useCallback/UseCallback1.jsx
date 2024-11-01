import React, { useCallback, useEffect, useState } from 'react'

export default function UseCallback1() {
  const [counter, setCounter] = useState(0)

  const fnUseCallback = useCallback(() => {
    console.log('1. fnUseCallback called')
  }, [])

  const fnNotUseCallback = () => {
    console.log('2. fnNotUseCallback called')
  }

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>+ Increment</button>
      <WithUseCallback fn={fnUseCallback} />
      <WithoutUseCallback fn={fnNotUseCallback} />
    </>
  )
}

const WithUseCallback = ({fn}) => {
  useEffect(() => {
    fn()
  }, [fn])

  return (
    <>
      <div>WithUseCallback</div>
    </>
  )
}

const WithoutUseCallback = ({fn}) => {
  useEffect(() => {
    fn()
  }, [fn])

  return (
    <>
    <div>WithoutUseCallback</div></>
  )
}
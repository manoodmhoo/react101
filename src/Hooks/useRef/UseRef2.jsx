import React, { useEffect, useRef } from 'react'

export default function UseRef2() {
  const inputRef = useRef(null)
  console.log('inputRef#1', inputRef)

  useEffect(() => { 
    inputRef.current.focus()
    console.log('inputRef#2', inputRef)
  }, [])

  return (
    <>
        <input ref={inputRef} type="text" />
    </>
  )
}

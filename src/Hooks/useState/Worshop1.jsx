import React, {useState} from 'react'

export default function Worshop1() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    
  return (
    <>
        <p>Count: {count}</p>
        <button  onClick={increment}>Click me</button>
    </>
  )
}

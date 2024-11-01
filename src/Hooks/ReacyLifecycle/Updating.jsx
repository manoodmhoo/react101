import React, { useEffect, useState } from 'react'

export default function Updating() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Functional Component did update')

    // return () => {
    // }
  }, [count]);
  return (
    <>
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    </>
  )
}

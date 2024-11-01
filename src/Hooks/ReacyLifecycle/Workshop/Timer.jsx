import React, { useEffect, useState } from 'react'

export default function Timer() {
  const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [seconds])

  return (
    <>
        <h1>Time elapsed: {seconds} seconds</h1>
    </>
  )
}

import React, { useRef, useState } from 'react'

export default function UseRef1() {
    const countRef = useRef(0)
    const [render, setRerender] = useState(false)
    
    console.log('countRef', countRef)

    return (
        <>
            <div>
                <p>Click Counter: {countRef.current} times.</p>
                <button onClick={() => countRef.current += 1}>Click</button>
                <button onClick={() => setRerender(!render)}>Reset</button>
            </div>
            
        </>
    )
}

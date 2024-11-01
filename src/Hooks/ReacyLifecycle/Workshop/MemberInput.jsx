import React, { useEffect, useState } from 'react'

export default function MemberInput() {
    const [msg, setMsg] = useState('')

    useEffect(() => {
        if(msg) localStorage.setItem('msg', msg)
    }, [msg])

    useEffect(() => {
      const msg = localStorage.getItem('msg')
      if(msg) setMsg(msg)
    }, [])

  return (
    <>
        <div>
            <input 
              type="text" 
              placeholder="Enter some value..."
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
            />
        </div>
    </>
  )
}

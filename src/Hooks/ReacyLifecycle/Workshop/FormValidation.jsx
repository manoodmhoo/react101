import React, { useEffect, useState } from 'react'

export default function FormValidation() {
  const [isValid, setIsValid] = useState(true)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    setIsValid(emailRegex.test(email))
  }, [email])

  return (
    <>
        <div>Validate Form Data</div>
        <label>Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        {!isValid && <div style={{color: 'red'}}>Form is not valid</div>}
    </>
  )
}

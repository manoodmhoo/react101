import React, { useState } from 'react'

export default function Worshop2() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '1234567890'
  });

  
  return (
    <>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>E-mail: {user.email}</p>
      <p>Telephone: {user.phone}</p>
      <button onClick={() => setUser({ 
           ...user,
           phone: '0987654321'
      })}>Change Telephone</button>
    </>
  )
}

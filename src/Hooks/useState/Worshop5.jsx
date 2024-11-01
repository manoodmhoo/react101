import React, { useState } from 'react'

export default function Worshop5() {
  const initForm = {
    name: "",
    email: "",
    password: "",
  }

  const [formData, setFormData] = useState(initForm)
  const [users, setUsers] = useState([])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsers([...users, formData])
    setFormData(initForm)
  }

  const handleReset = () => {
    setFormData(initForm)
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} onChange={handleInputChange} 
          />
        </div>
        <div>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} onChange={handleInputChange} 
          />
        </div>
        <div>
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} onChange={handleInputChange} 
          />
        </div>
        <div>
        <button type='submit'>Register</button>
        <button type='reset' onClick={handleReset}>Reset</button>
        </div>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

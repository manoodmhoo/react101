import React, { useEffect, useState } from 'react'

export default function SessionLogin() {
    const [userSession, setUserSession] = useState(null)
    const [user, setUser] = useState({ username: '', password: '' })

    useEffect(() => {
        const userSession = sessionStorage.getItem('user')

        if(userSession) {
            setUserSession(JSON.parse(userSession))
        }
    }, [])

    const handleLogin = () => {
        // console.log(user)
        sessionStorage.setItem('user', JSON.stringify(user))
        setUserSession(JSON.stringify(user))
    }

    const handleLogout = () => {
        sessionStorage.removeItem('user')
        setUserSession(null)
    }

  return (
    <>
        <div>
            { userSession ? <button onClick={() => handleLogout()}>Log out</button> : <>
                <div>Login</div>
                <div>
                <label>Username:
                    <input type="text" name="username" onChange={(e) => setUser({...user, username: e.target.value})} value={user.username} />
                </label>
                </div>
                <div>
                <label>Password:
                    <input type="password" name="password" onChange={(e) => setUser({...user, password: e.target.value})} value={user.password} />
                </label> 
                </div>
                <button onClick={() => handleLogin()}>Login</button>
            </> }
        </div>
    </>
  )
}

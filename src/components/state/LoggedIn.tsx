import React , { useState } from 'react'

function LoggedIn() {
    const [loggedin, setLoggedin] = useState(false)
    const handleLogin = () => {
        setLoggedin(true)
    }
    const handleLogout = () => {
        setLoggedin(false)
    }
  return (
    <div>
        <button onClick={handleLogin}>
            Login
        </button>
        <button onClick={handleLogout}>
            Logout
        </button>
        <div>User is {loggedin ? 'logged in' : 'logged out'}</div>
    </div>
  )
}

export default LoggedIn
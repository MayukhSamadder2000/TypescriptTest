import React from 'react'
type GreetProps = {
    name: string,
    msgCount?: number,
    isLoggedIn: boolean
}

function Greet(props : GreetProps) {
  const { msgCount = 0 } = props
  return (
    <div>
        {props.isLoggedIn ? <h2>Welcome {props.name}! you've {msgCount} unread messages!!</h2> : <h2>Welcome {props.name}!</h2>}
    </div>
  )
}

export default Greet
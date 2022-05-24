import React from "react"

type ButtonProps = {
    handleClick: (event : React.MouseEvent<HTMLButtonElement>, id : Number) => void,
}

function Button(props : ButtonProps) {
  return (
    <button onClick={e => props.handleClick(e, 1)}>Button</button>
  )
}

export default Button
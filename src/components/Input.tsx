import React from 'react'
type InputProps = {
    handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void,
    value : string,
}

function Input(props : InputProps) {
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }
  return (
    <input type="text" value={props.value} onChange={handleChange} />
  )
}

export default Input
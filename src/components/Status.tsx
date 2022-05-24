import React from 'react'
type StatusProp = {
    status: 'loading' | 'success' | 'error'
}

function Status(props : StatusProp) {
    let message
    if (props.status === 'loading') {
        message = <h2>Loading...</h2>
    }
    else if (props.status === 'error') {
        message = <h2>Error!</h2>
    }
    else if (props.status === 'success') {
        message = <h2>Success!</h2>
    }
  return (
    <div>
        {message}
    </div>
  )
}

export default Status
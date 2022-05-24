import React from 'react'
import { Person } from './Person'
import { Name } from './Person.types'
type PersonListProps = {
    names: Name[]
}

function PersonList(props : PersonListProps) {
  return (
    <div>
        {
            props.names.map((person, index) => <h2 key={index}><Person  name={person} /></h2>)
        }
    </div>
  )
}

export default PersonList
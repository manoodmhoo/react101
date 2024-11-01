import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
  const user = {name: 'John Doe', age: 25}

  return (
    <>
      <h1>Send Object Props </h1>
      <ChildComponent {...user} />
    </>
  )
}

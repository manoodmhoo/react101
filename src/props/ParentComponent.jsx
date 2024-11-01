import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
  const name = 'John Doe'
  const age = 25

  return (
    <>
      <h1>Send Props</h1>
      <ChildComponent name={name} age={age} />
    </>
  )
}

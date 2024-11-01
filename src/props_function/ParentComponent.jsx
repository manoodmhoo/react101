import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
  const customHeader = <h1>This is Header Component</h1>

  return (
    <>
      <h1>Send Funciton Props</h1>
      <ChildComponent header={customHeader} />
    </>
  )
}

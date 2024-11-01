import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
  return (
    <>
        <h1>Send Component Props</h1>
        <ChildComponent />
    </>
  )
}

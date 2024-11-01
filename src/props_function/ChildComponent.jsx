import React from 'react'

export default function ChildComponent({ onButtonClicked }) {
  return (
    <>
        <button onClick={onButtonClicked}>Click me</button>
    </>
  )
}

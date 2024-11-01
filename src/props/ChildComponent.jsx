import React from 'react'

export default function ChildComponent({ name, age }) {
  return (
    <>
        <p>Name: { name }</p>
        <p>Age: { age }</p>
    </>
  )
}

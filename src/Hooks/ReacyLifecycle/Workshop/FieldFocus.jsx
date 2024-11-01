import React, { useState, useEffect, useRef } from 'react'

export default function FieldFocus() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

  return (
    <>
        <div>Field Focus</div>
        <label>Name:
        <input type="text" />
        </label>
        <label>Email:
        <input type="email" ref={inputRef} />
        </label>
    </>
  )
}

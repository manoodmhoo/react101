import React, { useReducer } from 'react'

export default function Workshop6() {
  const initState = { result: 100 }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return { result: state.result + action.payload }
      case 'SUBTRACT':
        return { result: state.result - action.payload }
      case 'MULTIPLY':
        return { result: state.result * action.payload }
      case 'DIVIDE':
        return { result: state.result / action.payload }
      case 'RESET':
        return { result: 0 }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <>
      <p>Result: {state.result}</p>
      <button onClick={() => dispatch({ type: 'ADD', payload:10 })}>Add 10</button>
      <button onClick={() => dispatch({ type: 'SUBTRACT', payload:10 })}>Subtract 10</button>
      <button onClick={() => dispatch({ type: 'MULTIPLY', payload:10 })}>Multiply 10</button>
      <button onClick={() => dispatch({ type: 'DIVIDE', payload:10 })}>Divide 10</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </>
  )
}

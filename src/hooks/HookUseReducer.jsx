import React, { useReducer } from 'react'

const HookUseReducer = () => {

  const initialValue = {count : 0, value : ""}

  const reducer  = (state, action) =>{
    switch (action.type) {
      case 'INCREMENT':
        return {
          count : state.count + 1,
          value : action.payload
        }
      case 'DECREMENT':
        return {
          count : state.count - 1,
          value : action.payload
        }
      default:
        return state;
    }
  }

    const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <div>
        <button onClick={()=>dispatch({type : 'INCREMENT', payload:'Addition of numbers'})}>add</button>
        <button onClick={()=>dispatch({type : 'DECREMENT', payload:'Subtration of numbers'})}>subtract</button>

        <p>{state.count}</p>
        <p>{state.value}</p>
      
    </div>
  )
}

export default HookUseReducer

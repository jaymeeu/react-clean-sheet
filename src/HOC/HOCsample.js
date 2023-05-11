import React, { useEffect, useState } from 'react'

export const withMousePosition = (WrappedComponent) => {

  return (props) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

useEffect(() => {
  const handleMousePositionChange = (e)=>{
    setMousePosition({
      x : e.clientX,
      y: e.clientY
    })
  }
  window.addEventListener('mousemove', handleMousePositionChange)
 
  return ()=>{
    window.removeEventListener('mousemove', handleMousePositionChange)
  }
}, [])

    return <WrappedComponent {...props} mousePosition={mousePosition} />
  }
}
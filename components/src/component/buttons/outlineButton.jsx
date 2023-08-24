import React from 'react'

export default function OutlineButton({onClick, children}) {
  return (
    <button onClick={onClick}>
        {children}
    </button>
  )
}


const styles = {
    button:{
        color: 'red'
    }
}
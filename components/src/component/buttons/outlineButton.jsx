import React from 'react'
import colours from '../colours'

export default function OutlineButton({onClick, children}) {

  return (
    <button style={styles.button} onClick={onClick}>
        {children}
    </button>
  )
}
 

const styles = {
    button:{
        backgroundColor: 'inherit',
        color: colours.green,
        border: '0.1rem solid',
        padding: '0.9rem 1.9rem',
        fontFamily: 'Open Sans',
    }
}
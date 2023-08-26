import React from 'react'
import colours from '../colours'

export default function BackgroundButton({onClick, children}) {


  return (
    <button style={styles.button} onClick={onClick}>
        {children}
    </button>
  )
}


const styles = {
    button:{
        backgroundColor: colours.lightGreen,
        color: 'white',
        padding: '1rem 2rem',
        fontFamily: 'Open Sans',
        border: 'none',
    }
}
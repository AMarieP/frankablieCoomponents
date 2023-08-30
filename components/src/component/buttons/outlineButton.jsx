import React from 'react'
import colours from '../colours'

export default function OutlineButton({onClick, children}) {

  return (
    <button style={styles.button} onClick={onClick}>
        <p className='capitalOpensans'>{children}</p>
    </button>
  )
}
 

const styles = {
    button:{
        backgroundColor: 'inherit',
        colour: colours.green,
        borderColor: colours.yellow,
        borderWidth: '0.1rem',
        borderStyle: 'solid',
        padding: '0.3rem 1.9rem',
        boxShadow: '0px 2px 3px lightgrey',

    }
}
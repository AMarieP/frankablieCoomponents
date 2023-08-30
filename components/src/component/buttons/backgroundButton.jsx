import React from 'react'
import colours from '../colours'

export default function BackgroundButton({onClick, children}) {


  return (
    <button style={styles.button} onClick={onClick}>
        <p className='capitalOpensans'>{children}</p>
    </button>
  )
}


const styles = {
    button:{
        backgroundColor: colours.khaki,
        color: colours.lightYellow,
        padding: '0.4rem 2rem',
        border: 'none',
        boxShadow: '0px 2px 3px lightgrey',

    }
}
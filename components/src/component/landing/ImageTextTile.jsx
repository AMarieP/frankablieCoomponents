import React from 'react'
import colours from '../colours'

export default function ImageTextTile({image}) {


  return (
    <div style={styles.container} onClick={() => alert('clickedImage')}>
        <img style={styles.image} src={image} alt='' />
    </div>
  )
}

const styles = {
    container: {
        overflow: 'hidden',
        width: '90%',
        height: '90%',
        borderWidth: '1rem',
        borderStyle: 'solid', 
        borderColor: colours.yellow,
        boxShadow: '3px 3px 3px lightgrey',

    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'

    },
}
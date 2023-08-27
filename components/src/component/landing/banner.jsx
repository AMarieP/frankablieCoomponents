import React from 'react'
import colours from '../colours'
import '../landing/bannerAnimation.css'

export default function Banner({children}) {



  return (
    <div style={styles.bannerBackground}>
        <div className='bannerTransform'>
            <p style={styles.bannerText}>{children}</p>
        </div>
    </div>
  )
}


const styles = {
    bannerBackground: {
        width: '100%',
        height: '4rem',
        backgroundColor: colours.lightGreen,
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    bannerText: {
        color: colours.lightYellow,
        fontFamily: 'Open Sans',
    },

      

}

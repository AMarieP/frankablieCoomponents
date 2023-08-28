import React from 'react'
import colours from '../colours'
import frankAlbieLogo from 'C:/Users/Alyssa/Documents/GitHub/new/frankablieCoomponents/components/src/images/frankAlbieGreenPinkSquiggle.png'

export default function Footer() {
  return (
    <div>
        <div style={styles.topContainer}>
            <div style={styles.logoContainer}>
                <img src={frankAlbieLogo} alt='frank albie logo in pink doodle colourway'/>
            </div>
            <div style={styles.navContainer}>
                <div>
                    <h3>See More</h3>
                    <p>home</p>
                    <p>about</p>
                    <p>shop</p>
                </div>
                <div>
                    <h3>Connect With Us</h3>
                    <p>instagram</p>
                    <p>facebook</p>
                    <p>email</p>
                </div>    
            </div>
        </div>
        <div style={styles.bottomContainer}>
            <p>©FRANKALBIE 2023</p>
        </div>
    </div>
  )
}


const styles = {
    mainFooter: {
        width: '100%',
        height: '30%',
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'


    },
    topContainer: {
        backgroundColor: colours.khaki,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: '2',
        paddingLeft: '3rem'

    },

    logoContainer: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottomContainer: {
        backgroundColor: colours.lightKhaki,
        display: 'flex',
        justifyContent: 'center',
    },
    
}
import React from 'react'
import ProfileImage from '../component/about/ProfileImage'
import colours from '../component/colours'


import placeholderPfp from '../images/pfp_placeholder.jpg'

export default function About() {
  return (
    <div style={styles.container}>
        <div style={styles.profileContainer}>
            <div style={styles.profileImage}>
                <ProfileImage image={placeholderPfp} />
            </div>
            <h1>Hello there! My name is Gina.</h1>
        </div>
        <div style={styles.textContainer}>
            <p>During my Bachelor of Textile Design, I found a love for illustration and surface pattern design. I created Frankalbie as a way to share my illustrations and surface pattern designs with the people around me.</p>
            <p>All of my designs start by hand and consist of hand-made marks, drawings, or watercolour, and are then finished using digital processes. The collections are limited and made in small batch runs, and are designed to produce minimal waste; anything leftover is always repurposed. Everything is designed and assembled by me, right here in New Zealand.</p>
        </div>
        <div style={styles.contactMeContainer}>
            <h1>Contact Me: </h1>
            <a style={styles.emailLink} href='mailto:frankalbie@gmail.com'>frankalbie@gmail.com</a>
        </div>
        <div>
            <p>follow us on IG here</p>
        </div>
    </div>
  )
}


const styles = {
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        gap: '1rem',
        justifyContent: 'center',
        backgroundColor: colours.lightYellow

    },

    profileContainer:{
        backgroundColor: colours.pink,
        textAlign: 'center',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        flex: '2',
    },
    profileImage: {
        width: '50%',

    },

    textContainer: {
        textAlign: 'center',
        flex: '4',
        padding: '0px 30px',
        backgroundColor: colours.lightYellow


    },
    contactMeContainer:{
        backgroundColor: colours.pink,
        minHeight: 'fit-content',
        textAlign: 'center',
        paddingBottom: '30px',
        flex: '1',

    },
    emailLink: {
        backgroundColor: colours.yellow,
        color: colours.green,
        padding: '7px 50px',
        boxShadow: '0px 3px 3px lightgrey',
        borderRadius: '30px',
        fontSize: '1.5rem'

    },

}
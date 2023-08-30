import {React, useState} from 'react'

export default function ImageCard({product}) {

    const[pressed, isPressed] = useState(styles.container)
    
    function navigate() {
        alert("Pressed The Element!")
    }
    
  return (
    <div style={pressed} onClick={navigate} onMouseEnter={() => isPressed(styles.containerPressed)} onMouseLeave={() => isPressed(styles.container)}>
        <img src={product.imageUrl} alt={product.name} style={styles.image} />
        <div style={styles.prodNameContainer} >
            <p style={styles.prodName}>{product.name}</p>
        </div>
    </div>
  )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20rem',
        height: '20rem',
        margin: '0.5rem',
    },
    image: {
        objectFit: 'cover',
        overflow: 'hidden',
        flex: '5',
    },
    imageContainer: {
        // margin: '5%',
        // width: '90%',
        // height: '90%'
    },
    prodNameContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flex: '1',
    },

    prodName: {
        fontFamily: 'Open Sans',
        margin: 'auto',
        textTransform: 'uppercase',
    },
    containerPressed: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '10rem',
        height: '10rem',
        margin: '0.5rem',
        opacity: '0.5',
    },   


}
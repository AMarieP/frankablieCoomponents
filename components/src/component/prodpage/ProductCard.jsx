import React from 'react'

export default function ProductCard({product}) {
  return (
    <div style={styles.container}>
      <img style={styles.image} src={product.imageUrl} />
      <div style={styles.prodDetailContainer} >
        <p className='capitalOpensans'>{product.name}</p>
        <p className='capitalOpensans'>${product.price}</p>
      </div>
    </div>
  )
}

const styles = {
    container:{
        height: '40vh',
        width: '40vw',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: '1px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0.5rem',
        boxShadow: '3px 3px 3px lightgrey',


    },
    image: {
        objectFit: 'cover',
        overflow: 'hidden',
        width: '40vw',
        flex: '5',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: '1px',

    },
    prodDetailContainer: {
        flex: '1',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'

    },
    

}
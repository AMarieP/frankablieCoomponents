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
        height: '20rem',
        width: '11rem',
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
        width: '100%',
        flex: '5',
    },
    prodDetailContainer: {
        flex: '1',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'

    },
    

}
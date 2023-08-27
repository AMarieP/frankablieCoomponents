import React from 'react'
import ImageCard from './ImageCard'

// TO-DO: Scroll Bar

export default function ProductCarousel ({products}) {


  const prods = products.map((product) => <ImageCard key={product.id} product={product} />)

  return (
    <div style={styles.container}>
      {prods}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row nowrap',
    width: '100%',
    overflowX: 'auto',
    scrollSnapType: 'x mandatrory',
    scrollBehavior: 'smooth',

  }

}
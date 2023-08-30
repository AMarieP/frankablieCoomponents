import React from 'react'
import ProductCard from './ProductCard'
// TO-DO: Scroll Bar

export default function ProductCarouselProdCard ({products}) {


  const prods = products.map((product) => <ProductCard key={product.id} product={product} />)

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
    width: '95%',
    overflowX: 'auto',
    scrollSnapType: 'x mandatrory',
    scrollBehavior: 'smooth',
    gap: '20px',
    padding: '5%',
  },


}
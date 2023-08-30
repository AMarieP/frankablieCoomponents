import React from 'react'
import colours from '../component/colours'
import ProductCard from '../component/prodpage/ProductCard'
import listProdTest from '../testObj/products'

export default function AllProducts() {
    
    //Replace with real products when functionality is made
    const productList = listProdTest.map((product) => <ProductCard product={product} key={product.id} />)

  return (
    <div style={styles.container}>
        <div style={styles.backgroundShape}>
            <div style={styles.heading}>
                <h1>Shop</h1>
            </div>
            <div style={styles.productList}>
                {productList}
            </div>
        </div>

    </div>
  )
}

const styles = {
    backgroundShape: {
        zIndex: '-1',
        position: 'absolute',
        width: '60vw',
        height: 'fit-content',
        backgroundColor: colours.yellow,
        borderTopRightRadius: '100px', 
    },
    container: {
        height: '100%',
        backgroundColor: colours.lightYellow

    },
    heading: {

    },
    productList: {
        display: 'grid',
        gridTemplateAreas: 'a b b a'
    },

}

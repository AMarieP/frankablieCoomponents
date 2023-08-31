import React from 'react'
import colours from '../component/colours'
import ProductCard from '../component/prodpage/ProductCard'
import listProdTest from '../testObj/products'

export default function AllProducts() {
    
    //Replace with real products when functionality is made
    const productList = listProdTest.map((product) => <ProductCard product={product} key={product.id} />)

  return (
    <main style={styles.container}>
        <div style={styles.backgroundShape}>
            <div style={styles.contentContainer}>
                <header style={styles.heading}>
                    <p>sitemap {'>'} products {'>'} all</p>{/* will have sitemap component here  */}
                    <h1>shop</h1>
                    <p>sort by:</p> {/* will have sorting component here  */}
                </header>
                <section style={styles.productList}>
                    {productList}
                </section>
            </div>
        </div>

    </main>
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
        width: '100%',
        backgroundColor: colours.lightYellow,
    },
    contentContainer: {
        height: '100%',
        width: '100vw',

    },
    heading: {
        margin: '0px 15px',
        textAlign: 'left',


    },
    productList: {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        justifyContent: 'center',
        rowGap: '10px',
        columnGap: '10px',
        width: '100vw',
    },

}

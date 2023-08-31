import React from 'react'
import colours from '../component/colours'
import Banner from '../component/landing/Banner'
import ProductCarousel from '../component/landing/ProductCarousel'
import ProductCarouselProdCard from '../component/prodpage/ProductCarouselProdCard'
import listProdTest from '../testObj/products'
import ImageTextTile from '../component/landing/ImageTextTile'
import OutlineButton from '../component/buttons/OutlineButton'
import BackgroundButton from '../component/buttons/BackgroundButton'
import placeholder from '../images/pfp_placeholder.jpg'

export default function Landing() {
  return (
    <>
    <main style={styles.container}>
        <header style={styles.heroImage}>


        </header>
        <section style={styles.prodCarouselShopAll}>
            <div style={styles.prodCarouselShopAllHead}>
                <h1>Designed and Made in New Zealand</h1>
            </div>
            <ProductCarousel products={listProdTest}/>
            <BackgroundButton>Click to shop</BackgroundButton>


        </section>
        <Banner>Made and Designed in New Zealand</Banner>
        <section style={styles.imageTiles}>
            <ImageTextTile image={placeholder} />
            <ImageTextTile image={placeholder} />
            <ImageTextTile image={placeholder} />


        </section>
        <section style={styles.totesCarousel}>
            <h2 className='capitalOpensans'>Browse Totes</h2>
            <ProductCarouselProdCard products={listProdTest}/>
            {/* <ProductCard product={listProdTest[1]} /> */}

        </section>
        <section style={styles.instagramDiv}>

        </section>
    </main>
    </>
  )
}

const styles = {
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        gap: '1rem'
    },
    heroImage: {
        height: '90vh',
        backgroundColor: colours.lightYellow

    },
    prodCarouselShopAll:{
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: '30px' 
    },
    prodCarouselShopAllHead:{
        padding: '10px',

    },
    imageTiles: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-between',
        padding: '30px 10px',
        gap: '20px'

    },
    totesCarousel: {
        overflow: 'hidden',
        padding: '2rem 0',
        backgroundColor: colours.yellow,
        textAlign: 'center',
        boxShadow: '3px 3px 3px lightgrey',


    },
    instagramDiv:{

    },

}

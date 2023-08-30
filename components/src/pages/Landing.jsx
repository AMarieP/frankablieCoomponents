import React from 'react'
import colours from '../component/colours'
import Banner from '../component/landing/Banner'
import ProductCarousel from '../component/landing/ProductCarousel'
import ProductCarouselProdCard from '../component/prodpage/ProductCarouselProdCard'
import listProdTest from '../testObj/products'
import ImageTextTile from '../component/landing/ImageTextTile'
import ProductCard from '../component/prodpage/ProductCard'

import placeholder from '../images/pfp_placeholder.jpg'

export default function Landing() {
  return (
    <>
    <div style={styles.heroImage}>
        <h1>Designed and Made in New Zealand</h1>
        <h2 className='capitalOpensans'>see all</h2>
        <ProductCarousel products={listProdTest}/>

    </div>
    <div style={styles.prodCarouselShopAll}>

    </div>
    <Banner>Made and Designed in New Zealand</Banner>
    <div style={styles.imageTiles}>
        <ImageTextTile image={placeholder} />
        <ImageTextTile image={placeholder} />
        <ImageTextTile image={placeholder} />


    </div>
    <div style={styles.totesCarousel}>
        <h2 className='capitalOpensans'>Browse Totes</h2>
        <ProductCarouselProdCard products={listProdTest}/>
        {/* <ProductCard product={listProdTest[1]} /> */}

    </div>
    <div style={styles.instagramDiv}>

    </div>

    </>
  )
}

const styles = {
    heroImage: {
        textAlign: 'center',

    },
    prodCarouselShopAll:{

    },
    imageTiles: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-between',
        padding: '30px 10px',
        gap: '20px'

    },
    totesCarousel: {


    },
    instagramDiv:{

    },

}

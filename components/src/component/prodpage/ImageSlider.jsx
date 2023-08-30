import {React, useState} from 'react'

export default function ImageSlider({images}) {

    const [activeImage, imageIsActive] = useState(images[0])
    const [style, isStyle] = useState()
    
    function UpdateActive(selection){
        imageIsActive(selection)
        console.log('hello')
        
    }

    const thumbnail = images.map((image) => <div onClick={() => UpdateActive(image)}>
                                            <img style={styles.thumbnail} src={image.imageUrl} />
                                        </div>)
    
  return (
    <div>
        <div>
            <div>

            </div>
            <img src={activeImage.imageUrl} alt={activeImage.alt} style={styles.mainImg} />
        </div>
        <div style={styles.thumbnails}>
            {thumbnail}
        </div>
    </div>
  )
}

const styles = {
    container: {

    },
    mainImg: {
        width: '100%',
        height: '60vh',
        objectFit: 'cover',
        overflow: 'hidden',

    },
    arrows: {

    },
    thumbnails: {
        width: '100%',
        overflowX: 'auto',
        overflowY: 'hidden',
        scrollSnapType: 'x mandatrory',
        scrollBehavior: 'smooth',
        display: 'flex',
        flexFlow: 'row nowrap',
        height: '15vh',
        gap: '5px'
        

    },
    thumbnail: {
        height: '100%',
        width: '5rem',
        overflow: 'hidden',
        objectFit: 'cover',

    },

}
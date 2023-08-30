import React from 'react'

export default function ProfileImage({image}) {

  return (
    <div className='main' style={styles.main}>
      <img className='image' style={styles.image} src={image} alt="Frank Albie's Creator, Gina. She is a young adult with light brown hair, glasses and a big smile. " />
    </div>
  )
}

const styles = {
  main: {
    margin: '1rem',
  },
  image: {
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    border: '0.1rem solid #354622',
    objectFit: 'cover',
    width: '100%',
  },
}

//TO-DO: Set up API when live :)
import React from 'react'

export default function InstagramTile({posts}) {
  return (
    <div>
        <h1></h1>
      {posts.map((post) => <><div>
        <img src={post.url} alt={post.alt} />
        </div></>)}
    </div>
  )
}


const styles = {

}
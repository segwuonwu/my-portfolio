import React from 'react'
import PropTypes from 'prop-types'

const Gallery = ({ images }) => {

  const renderGallery = images => {
    if (!images) return

    const gallery = images.map((obj, i) => {
      return (
        <article className="6u 12u$(xsmall) work-item" key={i}>
          <a className="image fit thumb" href={obj.source} target="noopener">
            <img style={{height: 237.77}} src={obj.thumbnail} alt=""/>
          <h2>{obj.caption}</h2>
          </a>
          <p style={{fontSize:18}}>{obj.description}</p>
          <p style={{fontSize:18}}>Tech: {obj.tech}</p>
        </article>
      )
    })

    return <div className="row">{gallery}</div>
  }
  return (
    <div>
      {renderGallery(images)}
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery

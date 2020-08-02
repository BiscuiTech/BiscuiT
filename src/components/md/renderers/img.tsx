import React from 'react'

export default ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="my-2 w-full shadow-small hover:shadow-medium transition-shadow duration-200"
    loading="lazy"
  />
)

import React from 'react'
import { Link } from 'react-router-dom'

const FavoritesLink = () => {
  return (
    <Link className='text-white center' to={'/favorites'}>Favorite Meals</Link>
  )
}

export default FavoritesLink
import React from 'react'
import { useSelector } from 'react-redux'
import FavoriteButton from './FavoriteButton'
import HomeLink from '../../components/HomeLink'
import { favoriteSelector } from '../store/favoriteSelectors'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'


const AllFavorites = () => {
  const meal = useSelector(favoriteSelector);

  return (
    <div className='category d-flex flex-column mb-3 content'>
      <div className='zero'>
        <HomeLink />
        <h1 className='text-white'>Favorites</h1>
      </div>
      <div className="grid">
        {meal.map(favorite => (
          <div key={favorite.idMeal}>
            <div className='recipe-container p-3 my-3'>
              <Link className="link-underline-danger text-light link-underline-opacity-0" to={`/meals/${favorite.idMeal}`}>
                <div className='recipe d-flex' md={4}>
                  <Image className='pic img-fluid m-3' src={favorite.strMealThumb} alt={favorite.strMeal} roundedCircle />
                  <h3>{favorite.strMeal}</h3>
                </div>
              </Link>
              <FavoriteButton meal={favorite} />
            </div>
          </div>
        ))}
      </div>
      
      

    </div>
  )
}

export default AllFavorites
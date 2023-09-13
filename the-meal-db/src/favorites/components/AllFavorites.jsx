import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FavoriteButton from './FavoriteButton'
import { addFavorite, removeFavorite } from '../store/favoritesSlice'
import HomeLink from '../../components/HomeLink'


const AllFavorites = () => {
  const meal = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      <HomeLink />
      <h3>Favorites</h3>
      {meal.favorites.map(favorite => (
        <div key={meal.id}>{favorite}</div>
      ))}

      <FavoriteButton meal={meal} />
    </div>
  )
}

export default AllFavorites
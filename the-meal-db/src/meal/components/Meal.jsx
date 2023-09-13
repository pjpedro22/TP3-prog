import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams} from 'react-router-dom'
import Service from '../../service/Service'
import HomeLink from '../../components/HomeLink'
import Card from 'react-bootstrap/Card'
import RecipeAccordion from '../../components/RecipeAccordion'
import Loading from '../../components/Loading'
import FavoriteButton from '../../favorites/components/FavoriteButton'
import FavoritesLink from '../../favorites/components/FavoritesLink'

const service = new Service()

const Meal = () => {
  const params = useParams()

  const {isLoading, isError, data, error} = useQuery ({
    queryKey: ['meal', params.id],
    queryFn: () => service.getMeal(params.id)
  })

  if (isLoading) return <div><Loading /></div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div className='fixed'>
      <HomeLink />
      <FavoritesLink />
      <Card className='bg-secondary-subtle sticky'>
        {data && data.map(meal =>
          <React.Fragment key={meal.idMeal}>
            <div className='d-flex'>
              <Card.Title>{meal.strMeal}</Card.Title>
              <FavoriteButton meal={meal} />
            </div>
            <Card.Body>
              <Card.Subtitle>Category: {meal.strCategory}</Card.Subtitle>
              <Card.Img className='recipe' src={meal.strMealThumb} />
            </Card.Body>
              <RecipeAccordion mealInfo={meal} />
          </React.Fragment>
        )}
      </Card>
    </div>
  )
}

export default Meal
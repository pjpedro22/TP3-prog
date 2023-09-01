import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams} from 'react-router-dom'
import Service from '../../service/Service'
import HomeLink from '../../components/HomeLink'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Image } from 'react-bootstrap'
import RecipeAccordion from '../../components/RecipeAccordion'
import Loading from '../../components/Loading'

const service = new Service()

const Meal = () => {
  const params = useParams()
  console.log(params, 'meal params')

  const {isLoading, isError, data, error} = useQuery ({
    queryKey: ['meal', params.id],
    queryFn: () => service.getMeal(params.id)
  })

  if (isLoading) return <div><Loading /></div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <Container>
      <HomeLink />
      <Card>
        {data && data.map(meal =>
          <React.Fragment key={meal.idMeal}>
            <Card.Title>{meal.strMeal}</Card.Title>
            <Card.Body>
              <Card.Subtitle>Category: {meal.strCategory}</Card.Subtitle>
              <Card.Img src={meal.strMealThumb} />
            </Card.Body>
            <RecipeAccordion mealInfo={meal} />
          </React.Fragment>
        )}
      </Card>
    </Container>
  )
}

export default Meal
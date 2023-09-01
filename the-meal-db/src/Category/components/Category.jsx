import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Service from '../../service/Service'
import Container from 'react-bootstrap/Container'
import HomeLink from '../../components/HomeLink'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Image } from 'react-bootstrap'

const service = new Service()

const Category = () => {
  const params = useParams()
  console.log(params, 'params')

  const { isLoading, isError, data, error } =useQuery({
    queryKey: ['category', params.name],
    queryFn: () => service.getCategory(params.name)
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <Container>
      <HomeLink />
      <Card>
        <Col>
          <Card.Title>{params.meal}</Card.Title>
          {data && data.map(meals =>
            <div key={meals.strMeal}>
              <Link to={`/meals/${meals.idMeal}`}>
                {meals.strMeal}
              </Link>
              <Col><Image src={meals.strMealThumb} alt={meals.strMeal} /></Col>
            </div>
          )}
        </Col>
      </Card>
    </Container>
  )
}

export default Category
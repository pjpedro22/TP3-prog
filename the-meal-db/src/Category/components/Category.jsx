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
import Loading from '../../components/Loading'

const service = new Service()

const Category = () => {
  const params = useParams()
  console.log(params, 'params')

  const { isLoading, isError, data, error } =useQuery({
    queryKey: ['category', params.name],
    queryFn: () => service.getCategory(params.name)
  })

  if (isLoading) return <div><Loading /></div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <Container>
      <HomeLink />
      <h1>{params.name} recipes</h1>
      <Col>
        {data && data.map(meals =>
          <React.Fragment key={meals.strMeal}>
            <Card>
              <Link to={`/meals/${meals.idMeal}`}>
                <Card>
                  <Card.Img variant="top" src={meals.strMealThumb} alt={meals.strMeal} />
                  <Card.Title>{meals.strMeal}</Card.Title>
                </Card>
              </Link>
            </Card>
          </React.Fragment>
        )}
      </Col>
    </Container>
  )
}

export default Category
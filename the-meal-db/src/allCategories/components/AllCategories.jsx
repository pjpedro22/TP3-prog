import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import Service from '../../service/Service'
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loading from '../../components/Loading'

const service = new Service()

const AllCategories = () => {

  const {isLoading, isError, data, error} = useQuery ({
    queryKey: ['categories'],
    queryFn: () => service.getAllCategories()
  })

  if (isLoading) return <div><Loading /></div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <Container>
      <h1>Accueil</h1>
      <Row>
        <h2>Choose a meal category</h2>
        <>
          {data && data.map(categories =>
            <Link to={`/categories/${categories.strCategory}`} key={categories.idCategory} >
              <Col>{categories.strCategory}</Col>
            </Link>)}
        </>
      </Row>
    </Container>
  )
}

export default AllCategories
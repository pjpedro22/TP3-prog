import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import Service from '../../service/Service'
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loading from '../../components/Loading'
import FavoritesLink from '../../favorites/components/FavoritesLink'

const service = new Service()

const AllCategories = () => {

  const {isLoading, isError, data, error} = useQuery ({
    queryKey: ['categories'],
    queryFn: () => service.getAllCategories()
  })

  if (isLoading) return <div><Loading /></div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <Container className='text-white'>
      <h1 className='my-3 d-flex justify-content-center'>Home Style Cookery</h1>
      <Row>
        <h2 className='d-flex justify-content-center my-3'>Categories</h2>
        <>
          {data && data.map(categories =>
            <div className="d-flex justify-content-center">
              <Link className=" link-underline-danger text-white link-underline-opacity-0 link-underline-opacity-75-hover" to={`/categories/${categories.strCategory}`} key={categories.idCategory} >
                <Col>{categories.strCategory}</Col>
              </Link>
            </div>
          )}
        </>
      </Row>
      <Link to={`/favorites`}>
        <FavoritesLink />
      </Link>
      
    </Container>
  )
}

export default AllCategories
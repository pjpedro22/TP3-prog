import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import Service from '../../service/Service'
import Container from 'react-bootstrap/Container'

const service = new Service()

const AllCategories = () => {

  const {isLoading, isError, data, error} = useQuery ({
    queryKey: ['categories'],
    queryFn: () => service.getAllCategories()
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <Container>
      <h1>Accueil</h1>
      <div>
        <h2>Choose a meal category</h2>
        <div>
          {data && data.map(categories =>
            <Link to={`/categories/${categories.strCategory}`} key={categories.idCategory} >
              {categories.strCategory}
            </Link>)}
        </div>
      </div>
    </Container>
  )
}

export default AllCategories
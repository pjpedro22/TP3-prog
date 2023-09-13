import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Service from '../../service/Service'
import Container from 'react-bootstrap/Container'
import HomeLink from '../../components/HomeLink'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Image } from 'react-bootstrap'
import Loading from '../../components/Loading'

const service = new Service()

const Category = () => {
  const params = useParams()

  const { isLoading, isError, data, error } =useQuery({
    queryKey: ['category', params.name],
    queryFn: () => service.getCategory(params.name)
  })

  if (isLoading) return <div><Loading /></div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div className='category d-flex flex-column mb-3 content'>
      <div className='zero'>
        <HomeLink />
        <h1 className='text-white'>{params.name} recipes</h1>
      </div>
      <div className='grid'>
        {data && data.map(meals =>
          <div key={meals.strMeal}>
            <div className='recipe-container p-3 my-3'>
              <Link className="link-underline-danger text-light link-underline-opacity-0" to={`/meals/${meals.idMeal}`}>
                <div className='recipe d-flex' md={4}>
                  <Image className='pic img-fluid m-3' src={meals.strMealThumb} alt={meals.strMeal} roundedCircle/>
                  <Card.Title className='text-white mt-4'>{meals.strMeal}</Card.Title>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Category
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import CategoryService from '../service/CategoryService'

const categoryService = new CategoryService()

const MealCategory = () => {

  const {isLoading, isError, data, error} = useQuery ({
    queryKey: ['category'],
    queryFn: () => categoryService.getAllCategories()
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div>
      {data && data.map(category => <p key={category.strCategory}>{category.strCategory}</p>)}
    </div>
  )
}

export default MealCategory
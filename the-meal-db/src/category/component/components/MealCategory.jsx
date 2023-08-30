import React from 'react'
import { useQuery } from '@tanstack/react-query'

const MealCategory = () => {

  const getMeal = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    const res = await fetch(url)
    if (!res.ok) throw new Error('Error fetching data')
    const meal = await res.json()
    console.log(meal.categories)
    const category = meal.categories
    return category
  }

  const { isError, isLoading, error, data } = useQuery({
    queryKey: ['meal'],
    queryFn: getMeal
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div>{data && data.map(category => <p key={category.strCategory}>{category.strCategory}</p>)}</div>
  )
}

export default MealCategory
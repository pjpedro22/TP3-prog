import React from 'react'
import { useQuery } from '@tanstack/react-query'
import MealService from '../service/MealService'

const mealService = new MealService()

const Meal = () => {

  const {isLoading, isError, data, error} = useQuery ({
    queryKey: ['meal'],
    queryFn: mealService.getAllMeal()
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div>
      {data && data.map(meal => <p key={meal.strMeal}>{meal.strMeal}</p>)}
    </div>
  )
}

export default Meal
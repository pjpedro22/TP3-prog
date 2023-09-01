import React from 'react'
import { useState } from 'react'
import AllCategories from './allCategories/components/AllCategories'
import MealCategory from './allCategories/components/AllCategories'
import Meal from './meal/components/Meal'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routes, Route } from 'react-router-dom'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<AllCategories />} />
        <Route path='categories/:name' element={<MealCategory />} />
        <Route path='/meals/:id' element={<Meal />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App

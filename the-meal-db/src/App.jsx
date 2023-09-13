import React from 'react'
import AllCategories from './allCategories/components/AllCategories'
import Category from './category/components/Category'
import Meal from './meal/components/Meal'
import AllFavorites from './favorites/components/AllFavorites'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routes, Route } from 'react-router-dom'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<AllCategories />} />
        <Route path='categories/:name' element={<Category />} />
        <Route path='/meals/:id' element={<Meal />} />
        <Route path='favorites' element={<AllFavorites />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App

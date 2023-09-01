import React from 'react'
import { useState } from 'react'
import MealCategory from './category/components/MealCategory'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <h1>Accueil</h1>
      <MealCategory />
    </QueryClientProvider>
    
  )
}

export default App

import { config } from '../../config'

class MealService {
  endpoint = 'lookup.php?i=52772'
  baseUrl = config.baseUrl
  // mealUrl = `${this.baseUrl}${this.endpoint}`
  mealUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'

  async getAllMeal() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
    if (!res.ok) throw new Error()
    const data = await res.json()
    const dataMeal = data.meals
    console.log(dataMeal)
    return dataMeal
  }

  async getMealById() {
    console.log(this.mealUrl)
    const res = await fetch(this.mealUrl)
    if (!res.ok) throw new Error()
    return await res.json()
  }
}

export default MealService
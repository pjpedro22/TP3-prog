import { config } from '../config'

class Service {
  allCategories = 'categories.php'
  category = 'filter.php?c='
  meal = 'lookup.php?i='
  mainUrl = config.baseUrl

  async getAllCategories() {
    const res = await fetch(`${this.mainUrl}${this.allCategories}`)
    if (!res.ok) throw new Error()
    const data = await res.json()
    const newData = data.categories
    return newData
  }

  async getCategory(categoryName) {
    const res = await fetch(`${this.mainUrl}${this.category}${categoryName}`)
    if (!res.ok) throw new Error()
    const data = await res.json()
    const newData = data.meals
    return newData
  }

  async getMeal(id) {
    const res = await fetch(`${this.mainUrl}${this.meal}${id}`)
    if (!res.ok) throw new Error()
    const data = await res.json()
    const newData = data.meals
    return newData
  }

}

export default Service
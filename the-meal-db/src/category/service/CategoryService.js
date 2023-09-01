import { config } from '../../config'

class CategoryService {
  endpoint = 'categories.php';
  baseUrl = config.baseUrl;
  categoryUrl = `${this.baseUrl}/${this.endpoint}`;

  async getAllCategories() {
    const res = await fetch(`${this.baseUrl}/${this.endpoint}`)
    if (!res.ok) throw new Error()
    const data = await res.json()
    const dataCategory = data.categories
    return dataCategory
  }

}

export default CategoryService
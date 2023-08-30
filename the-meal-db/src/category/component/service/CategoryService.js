import { config } from '../../config'

class CategoryService {
  endpoint = '/categories'
  baseUrl = config.baseUrl
  categoryUrl = `${this.baseUrl}/${this.endpoint}`
}

export default CategoryService
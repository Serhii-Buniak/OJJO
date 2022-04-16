import instance from ".";
import Category from "./models/Category";

class CategoriesApi {
   private static url = 'categories'
   public async get(): Promise<Category[]> {
      return (await instance.get<Category[]>(CategoriesApi.url)).data
   }

   public async create(category: Category) {
      return await instance.post(CategoriesApi.url, category)
   }
}

export default CategoriesApi
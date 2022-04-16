import instance from ".";
import CategoryGroup from "./models/CategoryGroup";


class CategoryGroupsApi {
   private static url = 'categorygroups'
   public async get(): Promise<CategoryGroup[]> {
      return (await instance.get<CategoryGroup[]>(CategoryGroupsApi.url)).data
   }

   public async create(group: CategoryGroup) {
      return await instance
         .post(CategoryGroupsApi.url, group)
   }
}

export default CategoryGroupsApi
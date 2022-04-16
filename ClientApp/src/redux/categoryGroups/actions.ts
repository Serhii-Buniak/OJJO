import CategoryGroup from "../../api/models/CategoryGroup";
import CounterTypes from "./types";

interface CategoryGroupsAction {
    type: CounterTypes
}

export interface GetAllCategoryGroupsAction extends CategoryGroupsAction {
    items: CategoryGroup[]
}

export interface CreateCategoryGroupsAction extends CategoryGroupsAction {
    categoryGroup: CategoryGroup
}


export default CategoryGroupsAction
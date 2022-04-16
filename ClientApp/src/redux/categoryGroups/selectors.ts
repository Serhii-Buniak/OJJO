import CategoryGroup from "../../api/models/CategoryGroup"
import State from "../state"

export const getCategoryGroupsItems = (state: State): CategoryGroup[] => state.categoryGroups.items

import { Dispatch } from "react"
import CategoryGroupsAction from "./categoryGroups/actions"
import ProductsAction from "./products/actions"

type AppAction = CategoryGroupsAction 

export type AppDispatch = Dispatch<AppAction>

export default AppAction
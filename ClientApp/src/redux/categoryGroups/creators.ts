import CategoryGroupsApi from "../../api/CategoryGroupsApi"
import CategoryGroup from "../../api/models/CategoryGroup"
import { AppDispatch } from "../action"
import { useAppDispatch } from "../hooks"
import { CreateCategoryGroupsAction, GetAllCategoryGroupsAction } from "./actions"
import CategoryGroupsTypes from "./types"

export const getAllCategoryGroups = {
    action: (categoryGroups: CategoryGroup[]): GetAllCategoryGroupsAction => {
        return ({
            type: CategoryGroupsTypes.UpdateState,
            items: categoryGroups,
        })
    },
    thunk: () => (dispatch: AppDispatch) => {
        new CategoryGroupsApi().get().then(data => {
            dispatch(getAllCategoryGroups.action(data))
        })
    }

}


export const createCategoryGroups = {
    action: (group: CategoryGroup): CreateCategoryGroupsAction => {
        return ({
            type: CategoryGroupsTypes.Create,
            categoryGroup: group,
        })
    },
    thunk: (group: CategoryGroup) => (dispatch: AppDispatch) => {
        new CategoryGroupsApi().create(group).then(data => {
            dispatch(createCategoryGroups.action(group))
        })
    }
}


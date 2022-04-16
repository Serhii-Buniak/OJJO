import CategoriesApi from '../../api/CategoriesApi';
import CategoryGroupsApi from '../../api/CategoryGroupsApi';
import CategoryGroupsActions, { GetAllCategoryGroupsAction } from './actions';
import CategoryGroupsState from './state';
import CategoryGroupsTypes from "./types";

const initialState: CategoryGroupsState = {
    items: []
}

function categoryGroupsReducer(state = initialState, action: CategoryGroupsActions): CategoryGroupsState {
    switch (action.type) {
        case CategoryGroupsTypes.UpdateState:
            const updateAction = action as GetAllCategoryGroupsAction
            return {
                ...state,
                items: updateAction.items
            }
        case CategoryGroupsTypes.Create:
            return state
        default:
            return state
    }
}

export default categoryGroupsReducer
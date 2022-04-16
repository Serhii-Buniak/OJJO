import { CombinedState, Reducer, combineReducers, createStore, Store, applyMiddleware } from 'redux'
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import AppAction from './action'
import categoryGroupsReducer from './categoryGroups/reducer'
import productReducer from './products/reducer'
import State from './state'

const rootReducer: Reducer<CombinedState<State>, AppAction> = combineReducers({
    categoryGroups: categoryGroupsReducer,
    products: productReducer,
})

const store: Store<State, AppAction> = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)



export default store
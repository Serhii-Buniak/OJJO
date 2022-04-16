import { Dispatch } from "react"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import AppAction, { AppDispatch } from "./action"
import AppState from "./state"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// https://react-redux.js.org/using-react-redux/usage-with-typescript
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
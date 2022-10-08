import { configureStore, combineReducers, ThunkAction, AnyAction } from '@reduxjs/toolkit'
import clientsSlice from './features/clients/clientsSlice'
import logger from 'redux-logger'
import postSlice from './features/posts/postSlice'

const reducer = combineReducers({
	clients: clientsSlice,
	post: postSlice,
})

export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import clientsSlice from './features/clients/clientsSlice'
import logger from 'redux-logger'

const reducer = combineReducers({
	clients: clientsSlice,
})

export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import ClientReducer from './clients/reducer'
import CounterReducer from './counter/reducer'

const reducers = combineReducers({
	counter: CounterReducer,
	clients: ClientReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))

// export type RootState = ReturnType<typeof store.getState>

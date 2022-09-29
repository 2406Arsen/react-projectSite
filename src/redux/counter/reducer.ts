import { COUNT_REDUCER_TYPES } from './types'

interface ICountReducerState {
	count: number
}

export interface ICounterAction {
	type: COUNT_REDUCER_TYPES
	payload: number
}

const initialState: ICountReducerState = {
	count: 0,
}

const countReducer = (state = initialState, action: ICounterAction): ICountReducerState => {
	switch (action.type) {
		case COUNT_REDUCER_TYPES.INCREMENT:
			return { ...state, count: state.count + action.payload }
		case COUNT_REDUCER_TYPES.DECREMENT:
			return { ...state, count: state.count - action.payload }

		default:
			return state
	}
}

export default countReducer

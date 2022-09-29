import { ICounterAction } from './reducer'
import { COUNT_REDUCER_TYPES } from './types'

export const counterIncrementAction = (payload: number): ICounterAction => ({
	type: COUNT_REDUCER_TYPES.INCREMENT,
	payload,
})
export const counterDecrementAction = (payload: number): ICounterAction => ({
	type: COUNT_REDUCER_TYPES.DECREMENT,
	payload,
})

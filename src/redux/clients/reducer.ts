import { ISelfClient } from '../../module'
import { CLIENT_REDUCER_TYPES } from './types'

interface IClientReducerState {
	currentClient: ISelfClient
}

export interface IClientsAction {
	type: CLIENT_REDUCER_TYPES
	payload: ISelfClient
}

const initialState: IClientReducerState = {
	currentClient: {
		comment: '',
		fullName: '',
		id: 0,
		img: '',
		job: '',
	},
}

const clientReducer = (state = initialState, action: IClientsAction): IClientReducerState => {
	switch (action.type) {
		case CLIENT_REDUCER_TYPES.SET_CURRENT_CLIENT:
			return { ...state, currentClient: action.payload }
		default:
			return state
	}
}

export default clientReducer

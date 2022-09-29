import { ISelfClient } from '../../module'
import { IClientsAction } from './reducer'
import { CLIENT_REDUCER_TYPES } from './types'

export const setCurrentClientAction = (payload: ISelfClient): IClientsAction => ({
	payload,
	type: CLIENT_REDUCER_TYPES.SET_CURRENT_CLIENT,
})

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISelfClient } from '../../../module'

interface IClientsState {
	currentClient: ISelfClient
	clients: ISelfClient[]
}

// export interface IClientsAction {
// 	type: CLIENT_REDUCER_TYPES
// 	payload: ISelfClient
// }

const initialState: IClientsState = {
	currentClient: {
		comment: '',
		fullName: '',
		id: 0,
		img: '',
		job: '',
	},
	clients: [],
}

const clientsSlice = createSlice({
	name: 'clients',
	initialState,
	reducers: {
		setAllClients: (state, action: PayloadAction<ISelfClient[]>) => {
			state.clients = action.payload
		},
		setCurrentClient: (state, { payload }: PayloadAction<ISelfClient>) => {
			state.currentClient = payload
		},
		editClientInfo: (state, { payload }: PayloadAction<Partial<ISelfClient>>) => {
			let currentClient = state.clients.find(({ id }) => id === payload.id)
			if (currentClient) {
				currentClient = { ...currentClient, ...payload }
			}
		},
	},
})

export const { setCurrentClient, editClientInfo, setAllClients } = clientsSlice.actions

export default clientsSlice.reducer

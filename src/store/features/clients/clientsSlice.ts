import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { ISelfClient } from '../../../module'

interface IClientsState {
	currentClient: ISelfClient
	clients: ISelfClient[]
	posts: IPosts[]
}

// export interface IClientsAction {
// 	type: CLIENT_REDUCER_TYPES
// 	payload: ISelfClient
// }
interface IPosts {
	userId: number
	id: number
	title: string
	body: string
}
export const receivePosts = createAsyncThunk('clients/receivePosts', async () => {
	const res = await axios.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts')
	return res.data
})

const initialState: IClientsState = {
	currentClient: {
		comment: '',
		fullName: '',
		id: 0,
		img: '',
		job: '',
	},
	clients: [],
	posts: [],
}

const clientsSlice = createSlice({
	name: 'clients',
	initialState,
	reducers: {
		setAllClients: (state, { payload }: PayloadAction<ISelfClient[]>) => {
			state.clients = payload
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
	extraReducers: (builder) => {
		builder.addCase(receivePosts.pending, (state, { payload }) => {})
		builder.addCase(receivePosts.fulfilled, (state, { payload }: PayloadAction<IPosts[]>) => {
			state.posts = payload
		})
		builder.addCase(receivePosts.rejected, (state, { payload }) => {})
	},
})

export const { setCurrentClient, editClientInfo, setAllClients } = clientsSlice.actions

export default clientsSlice.reducer

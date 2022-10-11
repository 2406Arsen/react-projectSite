import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { api } from '../../../Api/axios'
// import { AppThunk } from '../..'

import { IPost } from './model'

// import { receivePostsFailure, receivePostsSuccess, setLoading } from './postSlice'

//  export const fetchPosts = (): AppThunk => async (dispatch) => {

// 	dispatch(setLoading(true))
// 	try {
// 		const res = await axios.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts', {
// 			params: { _limit: 10 },
// 		})
// 		dispatch(receivePostsSuccess(res.data))
// 	} catch (error) {
// 		dispatch(receivePostsFailure('my error failure'))
// 	}
// }

export const receivePosts = createAsyncThunk(
	'clients/receivePosts',
	async (_, { rejectWithValue }) => {
		try {
			const res = await api.get<IPost[]>('posts', {
				params: { _limit: 10 },
			})
			return res.data
		} catch (error) {
			if (!(error as AxiosError).response) {
				throw new Error()
			}
			return rejectWithValue('my Error')
		}
	},
)
export const createPost = createAsyncThunk(
	'clients/createPost',
	async (newPost: IPost, { rejectWithValue }) => {
		try {
			const res = await api.post<IPost>('posts', newPost)
			return res.data
		} catch (error) {
			return rejectWithValue('something went wrong !!!')
		}
	},
)

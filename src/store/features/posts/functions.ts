import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
// import { AppThunk } from '../..'

import { IPosts } from './model'

// import { receivePostsFailure, receivePostsSuccess, setLoading } from './postSlice'

// export const fetchPosts = (): AppThunk => async (dispatch) => {
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
			const res = await axios.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts', {
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

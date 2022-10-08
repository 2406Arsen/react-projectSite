import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '../../../Api/Api'
import { receivePosts } from './functions'
import { IPostState } from './model'

const initialState: IPostState = {
	posts: [],
	errors: '',
	loading: false,
}

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		setLoading: (state, { payload }: PayloadAction<boolean>) => {
			state.loading = payload
		},
		receivePostsSuccess: (state, { payload }: PayloadAction<IPost[]>) => {
			state.loading = false
			state.posts = payload
		},
		receivePostsFailure: (state, { payload }: PayloadAction<string>) => {
			state.loading = false
			state.errors = payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(receivePosts.pending, (state) => {
				state.loading = true
			})
			.addCase(receivePosts.fulfilled, (state, { payload }) => {
				state.loading = false
				state.posts = payload
			})
			.addCase(receivePosts.rejected, (state, action) => {
				state.loading = false
				state.errors = action.payload as string
			})
	},
})

export const { receivePostsSuccess, receivePostsFailure, setLoading } = postSlice.actions
export default postSlice.reducer

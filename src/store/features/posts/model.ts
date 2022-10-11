export interface IPostState {
	loading: boolean
	posts: IPost[]
	errors: string
}

export interface IPost {
	userId: number
	id: number
	title: string
	body: string
}


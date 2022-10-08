export interface IPostState {
	loading: boolean
	posts: IPosts[]
	errors: string
}

export interface IPosts {
	userId: number
	id: number
	title: string
	body: string
}


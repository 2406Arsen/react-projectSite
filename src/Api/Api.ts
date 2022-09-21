import axios from 'axios'

export interface IPost {
	userId: number
	id: number
	title: string
	body: string
}

type TGetPostsResponse = IPost[]

export const getUsersData = (): Promise<void> =>
	axios
		.get('users.json')
		.then((res) => localStorage.setItem('comments', JSON.stringify(res.data)))
		.catch((e) => console.error(e))

export const getPosts = (): Promise<TGetPostsResponse> =>
	axios
		.get('https://jsonplaceholder.typicode.com/posts')
		.then((res) => res.data)
		.catch((e) => console.error(e.message))

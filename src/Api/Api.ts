import axios from 'axios'

export const getUsersData = () => axios
	.get('users.json')
	.then((res) => localStorage.setItem('comments', JSON.stringify(res.data)))
	.catch((e) => console.error(e))

import { BASE_API_URL } from "@/constants"

export const getPosts = async (page?: string): Promise<Post[]> => {
	const response = await fetch(BASE_API_URL + '/posts' + `?_page=${page ? page : 1}&_limit=${6}`)
	return await response.json()
}

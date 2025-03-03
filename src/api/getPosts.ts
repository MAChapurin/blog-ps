import { BASE_API_URL } from "@/constants"

export const getPosts = async (): Promise<Post[]> => {
	const response = await fetch(BASE_API_URL + '/posts')
	return await response.json()
}

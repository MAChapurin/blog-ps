import { BASE_API_URL } from "@/constants"

export const getPostById = async (id: string): Promise<Post> => {
	const response = await fetch(
		BASE_API_URL + '/posts/' + id
	)
	return await response.json()
}

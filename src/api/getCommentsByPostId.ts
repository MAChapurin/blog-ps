import { BASE_API_URL } from "@/constants"

export const getCommentsByPostId = async (id: string): Promise<Comment[]> => {
	const response = await fetch(
		BASE_API_URL + '/posts/' + id + '/comments'
	)
	return await response.json()
}

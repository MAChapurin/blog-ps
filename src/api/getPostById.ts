export const getPostById = async (id: string): Promise<Post> => {
	const response = await fetch(
		'https://jsonplaceholder.typicode.com/posts/' + id
	)
	return await response.json()
}

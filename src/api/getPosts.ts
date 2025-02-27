export const getPosts = async (): Promise<Post[]> => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts')
	return await response.json()
}

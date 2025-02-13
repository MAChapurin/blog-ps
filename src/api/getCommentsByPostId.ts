export const getCommentsByPostId = async (id: string | number): Promise<Comment[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
  return await response.json()
}
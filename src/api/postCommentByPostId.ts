import { BASE_API_URL } from "@/constants"

export const postCommentByPostId = async (id: string, body: Partial<Comment>) => {
  const response = await fetch(
    BASE_API_URL + '/posts/' + id + '/comments',
    {
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        body
      }),
    },

  )
  return await response.json()
}
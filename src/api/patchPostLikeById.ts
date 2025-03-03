import { BASE_API_URL } from "@/constants"

export const patchPostLikeById = async (id: string, isLiked: boolean) => {
  const response = await fetch(
    BASE_API_URL + '/posts/' + id,
    {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        isLiked
      }),
    },

  )
  return await response.json()
}
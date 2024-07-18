import { useQuery } from "@tanstack/react-query"
import api from "../../../lib/axios"
import { isEmpty, isNotNil, pickBy } from "ramda"

type PostQuery = {
  station?: string
  start?: number
  end?: number
  city?: string
}
export const getPosts = async (query: PostQuery) => {
  const params = pickBy((val) => isNotNil(val) && !isEmpty(val), query)
  return await api.get('/posts', { params }).then(res => res.data)
}

export const useGetPosts = (query: PostQuery) =>
  useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(query)
  })
import { useQuery } from "@tanstack/react-query";
import api from "../../../lib/axios";
import { isEmpty, isNotNil, pickBy } from 'ramda'

export type postQuery = {
  limit?: number
  skip?: number
  start?: number
  end?: number
  city?: string
  room_type?: string
  station?: string
}

export const getAllPosts = async (query: postQuery) => {
  const params = pickBy((val) => isNotNil(val) && !isEmpty(val), query)
  return await api.get('/posts', { params }).then(res => res.data)
};

export const useGetAllPosts = (query: postQuery) =>
  useQuery({
    queryKey: ['post', query],
    queryFn: () => getAllPosts(query)
  })
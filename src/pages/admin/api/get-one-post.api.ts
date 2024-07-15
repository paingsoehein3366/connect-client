import { useQuery } from "@tanstack/react-query";
import api from "../../../lib/axios"
import { PostTypeTDO } from "../pages/types";

export const getOnePost = async (id: string) => {
  return await api.get<PostTypeTDO>(`/posts/${id}`).then(res => res.data);
};

export const useGetOnePost = (id: string) =>
  useQuery({
    queryKey: ['posts', id],
    queryFn: () => getOnePost(id)
  })
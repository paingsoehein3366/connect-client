import { useMutation } from "@tanstack/react-query";
import api from "../../../lib/axios"

export const deletePost = async (id: string) => {
  return api.delete(`/posts/${id}`)
};

export const useDeletePost = () => useMutation({ mutationFn: deletePost });
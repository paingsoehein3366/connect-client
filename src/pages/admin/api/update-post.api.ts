import { useMutation } from "@tanstack/react-query";
import api from "../../../lib/axios";
import { PostTypes } from "../pages/types";

export const updatePost = async ({ id, data }: { id: string, data: PostTypes }) => {
  return api.patch(`/posts/${id}`, data);
};

export const useUpdatePost = () => useMutation({
  mutationFn: updatePost
});
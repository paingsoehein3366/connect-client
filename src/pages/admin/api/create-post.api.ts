import { useMutation } from "@tanstack/react-query";
import api from "../../../lib/axios";
import { PostTypes } from "../pages/types";

export const createPost = async (data: PostTypes) => {
  return await api.post('/posts', data);
};

export const useCreatePost = () => useMutation({
  mutationFn: createPost
});
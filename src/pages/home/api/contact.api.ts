import { useMutation } from "@tanstack/react-query";
import api from "../../../lib/axios";
import { ContactSchemaType } from "../schema";

export const addContact = async (data: ContactSchemaType) => {
  return api.post('/contact', data).then(res => res.data)
}

export const useAddContact = () => useMutation({ mutationFn: addContact })
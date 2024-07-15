import { ActionIcon, Button, Modal, Text, Title } from '@mantine/core'
import { useDeletePost } from '../api/delete-post.api'
import { queryClient } from '../../../lib/react-query'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface Props {
  open: boolean
  setOpen: () => void
  id: string
}

const DeletePost = ({ open, setOpen, id }: Props) => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate()
  const deletePost = useDeletePost();
  const deleteFn = async () => {
    setLoading(true)
    deletePost.mutate(id, {
      onSuccess: () => {
        setLoading(false)
        queryClient.invalidateQueries({
          queryKey: ['posts']
        }),
          navigate('/admin')
      },
      onError: (err) => {
        console.log(err.message);
      }
    })
  }
  return (
    <Modal opened={open} onClose={setOpen} centered>
      <Title className='text-center' order={3}>Are you sure to delete this post?</Title>
      <div className='flex justify-end gap-2 mt-5'>
        <Button variant='outline'>CANCLE</Button>
        {isLoading ?
          <ActionIcon className='w-24 h-9 bg-red-500' loading loaderProps={{ type: 'dots' }} /> :
          <Button onClick={deleteFn} color='red'>DELETE</Button>
        }
      </div>
    </Modal>
  )
}

export default DeletePost

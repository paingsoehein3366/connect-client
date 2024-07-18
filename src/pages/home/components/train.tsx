import { Button, CloseButton, Modal, Select } from '@mantine/core'
import { useState } from 'react'
import { useGetPosts } from '../api/get-posts.api'
import { PostTypes } from '../types'
import { useNavigate } from 'react-router-dom'

interface Props {
  open: boolean
  setOpen: () => void
}

const Train = ({ open, setOpen }: Props) => {
  const navigate = useNavigate();
  const [station, setStation] = useState<string | null>();
  const [city, setCity] = useState<string | null>();

  const { data } = useGetPosts({})

  const removeDuplicates = (array: string[]) => {
    return Array.from(new Set(array));
  };

  const stations = removeDuplicates(data?.data?.map((item: PostTypes) => item.station))

  const citys = removeDuplicates(data?.data?.map((item: PostTypes) => item.city))

  const searchFn = () => {
    if (!city || !station) return
    navigate(`${city}/${station}`)
  }
  return (
    <Modal opened={open} onClose={setOpen} withCloseButton={false} centered>
      <div className='flex justify-end mb-1'>
        <CloseButton onClick={setOpen} />
      </div>
      <Select label="町" placeholder='町入力してください' data={citys} onChange={(value) => setCity(value)} searchable />
      <Select label="駅名" placeholder='駅名入力してください' data={stations} onChange={(value) => setStation(value)} searchable />
      <div className='flex justify-end mt-3'>
        <Button onClick={searchFn}>Search</Button>
      </div>
    </Modal>
  )
}

export default Train

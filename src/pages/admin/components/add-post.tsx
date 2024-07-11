import { Modal, TextInput, Text, Button, FileButton, Image } from '@mantine/core'
import { Controller, useForm } from 'react-hook-form'
import { PostSchemaTDO, postSchema } from '../pages/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

interface Props {
  open: boolean,
  setOpen: () => void
}

export const AddPost = ({ open, setOpen }: Props) => {
  const [file, setFile] = useState<File[]>([]);
  console.log({ file });

  const { handleSubmit, control, formState: { errors } } = useForm<PostSchemaTDO>({ resolver: zodResolver(postSchema) });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  })
  return (
    <Modal opened={open} onClose={setOpen} size="lg" centered>
      <Text className='flex justify-center mb-4 text-xl'>Add Post</Text>
      <form onSubmit={onSubmit} className='p-4'>
        <div className='flex justify-between'>
          <Controller
            control={control}
            name="title"
            render={({ field }) => (
              <TextInput
                label="Title"
                size='md'
                className='w-[45%]'
                placeholder='Enter Title'
                value={field.value}
                onChange={field.onChange}
                error={errors.title?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <TextInput
                label="City"
                size='md'
                className='w-[45%]'
                placeholder='Enter City'
                value={field.value}
                onChange={field.onChange}
                error={errors.city?.message}
              />
            )}
          />
        </div>
        <div className='flex my-4 justify-between'>
          <Controller
            control={control}
            name="price"
            render={({ field }) => (
              <TextInput
                size='md'
                label="Price"
                type='number'
                placeholder='Enter Price'
                value={field.value}
                className='w-[45%]'
                onChange={field.onChange}
                error={errors.price?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="room_type"
            render={({ field }) => (
              <TextInput
                size='md'
                label="Room Type"
                placeholder='Enter Room Type'
                className='w-[45%]'
                value={field.value}
                onChange={field.onChange}
                error={errors.room_type?.message}
              />
            )}
          />
        </div>
        <div className='flex mb-4 justify-between'>
          <Controller
            control={control}
            name="build_type"
            render={({ field }) => (
              <TextInput
                size='md'
                label="Build Type"
                className='w-[45%]'
                placeholder='Enter Build Type'
                value={field.value}
                onChange={field.onChange}
                error={errors.build_type?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="station"
            render={({ field }) => (
              <TextInput
                size='md'
                label="Station"
                placeholder='Enter Station'
                className='w-[45%]'
                value={field.value}
                onChange={field.onChange}
                error={errors.station?.message}
              />
            )}
          />
        </div>
        <Controller
          control={control}
          name="address"
          render={({ field }) => (
            <TextInput
              size='md'
              label="Address"
              placeholder='Enter Address'
              className='mb-4'
              value={field.value}
              onChange={field.onChange}
              error={errors.address?.message}
            />
          )}
        />
        <FileButton onChange={setFile} accept="image/png,image/jpeg" multiple>
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
        <div className='flex'>
          {file.map((item, index) => (
            <Image className='mr-4 mt-4' key={index} src={URL.createObjectURL(item)} h={100} alt="" />
          ))}
        </div>
        <div className='flex justify-end my-4 '>
          <Button variant="outline" mr="md" onClick={setOpen}>CANCLE</Button>
          <Button type='submit'>SUBMIT</Button>
        </div>
      </form>
    </Modal>
  )
}


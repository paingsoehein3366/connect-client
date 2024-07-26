import { zodResolver } from '@hookform/resolvers/zod'
import { ActionIcon, Button, Modal, TextInput, Textarea, Title } from '@mantine/core'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useAddContact } from '../api/contact.api'
import { ContactSchemaType, contactSchema } from '../schema'

interface Prop {
  open: boolean
  setOpen: () => void
}

const Contact = ({ open, setOpen }: Prop) => {
  const [isLoading, setLoading] = useState(false)
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<ContactSchemaType>({ resolver: zodResolver(contactSchema) })

  const sendContact = useAddContact()

  const onSubmit = handleSubmit((data) => {
    setLoading(true)
    sendContact.mutate(data, {
      onSuccess: () => {
        setLoading(false)
        setOpen()
      },
      onError: (err) => {
        console.log(err.message);
      }
    })
  })
  return (
    <Modal opened={open} onClose={setOpen} withCloseButton={false} centered size="lg">
      <Title className="text-center" order={3}>Contact</Title>
      <form onSubmit={onSubmit} className="mx-5">
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextInput
              label="Name"
              size="md"
              placeholder="Enter Name"
              value={field.value}
              onChange={field.onChange}
              error={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextInput
              label="Email"
              size="md"
              placeholder="Enter Email"
              className="my-5"
              value={field.value}
              onChange={field.onChange}
              error={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="message"
          render={({ field }) => (
            <Textarea
              label="Message"
              size="md"
              placeholder="Enter Message"
              autosize={true}
              minRows={4}
              value={field.value}
              onChange={field.onChange}
              error={errors.name?.message}
            />
          )}
        />
        <div className="flex justify-end gap-4 mt-4 mb-3">
          <Button variant="outline" onClick={setOpen}>CANCLE</Button>
          {isLoading ?
            <ActionIcon className='w-20 h-9' loading loaderProps={{ type: 'dots' }} />
            :
            <Button type="submit">SEND</Button>
          }
        </div>
      </form>
    </Modal>
  )
}

export default Contact

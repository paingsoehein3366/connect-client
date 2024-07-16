import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import { ActionIcon, Button, CloseButton, FileButton, Image, LoadingOverlay, TextInput, Textarea } from '@mantine/core';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import app from '../../../lib/firebase';
import { queryClient } from '../../../lib/react-query';
import { useGetOnePost } from '../api/get-one-post.api';
import { useUpdatePost } from '../api/update-post.api';
import { UpdatePostSchemaTDO, updatePostSchema } from '../pages/schema';
import DeletePost from './delete-post';

export const CardDetail = () => {
  const id = useParams().id as string;
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);
  const [oldImage, setOldImage] = useState<string[]>()
  const [removeFile, setRemoveFile] = useState<File | string>();
  const [removeNewFile, setRemoveNewFile] = useState<File | string>();
  const [isLoading, setLoading] = useState(false);
  const [deletOpen, setDeleteOpen] = useState(false);

  const { data } = useGetOnePost(id);
  const oldData = data?.data;

  const oldFileFilter = oldImage?.filter(item => removeFile !== item) || files;
  const newFileFilter = files?.filter(item => removeNewFile !== item) || files;


  const { handleSubmit, control, reset } = useForm<UpdatePostSchemaTDO>({
    resolver: zodResolver(updatePostSchema),
    defaultValues: {
      title: oldData?.title || '-',
      price: oldData?.price || 0,
      room_type: oldData?.room_type || "-",
      build_type: oldData?.build_type || '-',
      station: oldData?.station || "-",
      address: oldData?.address || '-',
      city: oldData?.city || '-'
    }
  })

  useEffect(() => {
    setOldImage(oldData?.image_url)
    reset({
      title: oldData?.title || '-',
      price: oldData?.price || 0,
      room_type: oldData?.room_type || "-",
      build_type: oldData?.build_type || '-',
      station: oldData?.station || "-",
      address: oldData?.address || '-',
      city: oldData?.city || '-'
    })
  }, [oldData, reset])

  const updatePost = useUpdatePost();

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    const newImageUrl = newFileFilter.map(async item => {
      const storage = getStorage(app)
      const storageRef = ref(storage, `image/` + item.name)
      await uploadBytes(storageRef, item)
      const downloadUrl = await getDownloadURL(storageRef)
      return downloadUrl
    });

    const ImageUrl = await Promise.all(newImageUrl);

    data.image_url = [...ImageUrl, ...oldFileFilter] as string[];

    updatePost.mutate({ id, data }, {
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

  })

  function getPathFromUrl(downloadUrl) {
    const indexOfPath = downloadUrl.indexOf('/o/') + 3;
    const indexOfAlt = downloadUrl.indexOf('?alt=media');
    return decodeURIComponent(downloadUrl.substring(indexOfPath, indexOfAlt));
  }

  return (
    <div>
      {
        oldData ? (
          <div className='flex' >
            <div className='w-[50%] flex flex-wrap'>
              {oldFileFilter?.map((item, index) => (
                <div key={index} className='m-4 w-[40%]'>
                  <CloseButton onClick={() => {
                    const storage = getStorage(app);
                    const filePath = getPathFromUrl(item);
                    const fileRef = ref(storage, filePath);

                    const deserRef = ref(storage, fileRef as unknown as string)

                    deleteObject(deserRef).then(() => console.log("success")
                    ).catch((err) => console.log(err)
                    )
                    setRemoveFile(item)
                    setOldImage(oldFileFilter as string[])
                  }}
                  />
                  <Image src={item} />
                </div>
              ))}
              {newFileFilter.length && files.map((item, index) => (
                <div key={index} className='m-4 w-[40%]'>
                  <CloseButton onClick={() => {
                    setRemoveNewFile(item)
                    setFiles(newFileFilter)
                  }}
                  />
                  <Image src={URL.createObjectURL(item)} />
                </div>
              ))}
              <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
                {(props) => <Button {...props} className='m-4'>Add Photo</Button>}
              </FileButton>
            </div>
            <form onSubmit={onSubmit} className='w-[40%] p-2'>
              <Controller
                control={control}
                name="title"
                render={({ field }) => (
                  <TextInput
                    size='md'
                    label="Title"
                    value={field.value}
                    onChange={field.onChange}
                    variant="filled"
                  />
                )}
              />
              <Controller
                control={control}
                name="price"
                render={({ field }) => (
                  <TextInput
                    size='md'
                    label="Price"
                    value={field.value}
                    onChange={field.onChange}
                    variant="filled"
                    className='my-4'
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
                    value={field.value}
                    onChange={field.onChange}
                    variant="filled"
                  />
                )}
              />
              <Controller
                control={control}
                name="build_type"
                render={({ field }) => (
                  <TextInput
                    size='md'
                    label="Build Type"
                    value={field.value}
                    onChange={field.onChange}
                    variant="filled"
                    className='my-4'
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
                    value={field.value}
                    onChange={field.onChange}
                    variant="filled"
                  />
                )}
              />
              <Controller
                control={control}
                name="city"
                render={({ field }) => (
                  <TextInput
                    size='md'
                    label="City"
                    value={field.value}
                    onChange={field.onChange}
                    variant="filled"
                    className='my-4'
                  />
                )}
              />
              <Controller
                control={control}
                name="address"
                render={({ field }) => (
                  <Textarea
                    size='md'
                    label="Address"
                    value={field.value}
                    onChange={field.onChange}
                    variant="filled"
                    autosize={true}
                    minRows={4}
                  />
                )}
              />
              <div className='flex justify-end mt-10 gap-5'>
                <Button variant="outline" onClick={() => navigate('/admin')}>CANCLE</Button>
                {isLoading ?
                  <ActionIcon className='w-24 h-9' loading loaderProps={{ type: 'dots' }} /> :
                  <Button type='submit'> UPDATE</Button>
                }
              </div>
            </form>
            <div className='relative bottom-10'>
              <Button color="red" onClick={() => setDeleteOpen(true)}>DELETE</Button>
            </div>
          </div >
        ) : (
          <LoadingOverlay
            visible={true}
            zIndex={1000}
            overlayProps={{ radius: 'sm', blur: 2 }}
            loaderProps={{ type: 'bars' }}
          />)}
      {id &&
        <DeletePost open={deletOpen} setOpen={() => setDeleteOpen(false)} id={id} />
      }
    </div>
  )
};

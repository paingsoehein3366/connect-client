import { Card, Text, Image, Button, LoadingOverlay } from "@mantine/core";
import { useGetAllPosts } from "../api/get-post.api";
import { PostTypes } from "./types";
import { FaPlusCircle } from "react-icons/fa";
import { AddPost } from "../components/add-post";
import { useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [openAddPost, setOpenAddPost] = useState(false)
  const { data } = useGetAllPosts({})

  return (
    <div className="">
      <div className="flex justify-end mr-1">
        <Button mr={10} onClick={() => setOpenAddPost(true)}><FaPlusCircle className="mr-1" />Add Post</Button>
      </div>
      <div className="flex flex-wrap justify-center">
        {data?.data ?
          data?.data.map((item: PostTypes) => (
            <Link to={`${item._id}`} key={item._id} className="m-4">
              <Card
                shadow="sm"
                padding="xl"
                component="a"
                target="_blank"
              >
                <Card.Section>
                  <Image
                    src={item.image_url?.[0]}
                    h={160}
                    alt="No way!"
                  />
                </Card.Section>
                <Text fw={500} size="lg" mt="md">
                  {item.title}
                </Text>

                <Text mt="xs" c="dimmed" size="sm">
                  {item.address}
                </Text>
              </Card>
            </Link>
          )) : (
            <LoadingOverlay
              visible={true}
              zIndex={1000}
              overlayProps={{ radius: 'sm', blur: 2 }}
              loaderProps={{ type: 'bars' }}
            />
          )}
      </div>
      <AddPost open={openAddPost} setOpen={() => setOpenAddPost(false)} />
    </div>
  )
}

export default Admin

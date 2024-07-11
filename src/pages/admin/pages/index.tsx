import { Card, Text, Image, Button } from "@mantine/core";
import { useGetAllPosts } from "../api/get-post.api";
import { PostTypes } from "./types";
import { FaPlusCircle } from "react-icons/fa";
import { AddPost } from "../components/add-post";
import { useState } from "react";

const Admin = () => {
  const [openAddPost, setOpenAddPost] = useState(false)
  const { data } = useGetAllPosts({})

  return (
    <div className="">
      <div className="flex justify-end mr-36">
        <Button mr={10} onClick={() => setOpenAddPost(true)}><FaPlusCircle className="mr-1" />Add Post</Button>
      </div>
      <div className="flex flex-wrap justify-center">
        {data?.data.map((item: PostTypes) => (
          <Card
            shadow="sm"
            padding="xl"
            component="a"
            href=""
            target="_blank"
            key={item._id}
            className="m-4 w-[25%]"
          >
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
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
        ))}

      </div>
      <AddPost open={openAddPost} setOpen={() => setOpenAddPost(false)} />
    </div>
  )
}

export default Admin

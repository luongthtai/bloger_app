'use client'

import MainLayout from "@/layouts/MainLayout"
import PostItem from "../components/PostItem"
import StoriesSection from "@/sections/StoriesSection"
import CreatePost from "@/sections/CreatePost"
import FriendRequest from "@/sections/FriendRequest"
import { useQuery } from "@tanstack/react-query"
import { get } from "@/helps/api"
import { IPostItem } from '../models/posts.model';

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => get('/post/get')
  })

  return (
    <MainLayout>
      <div className="w-2/3 flex flex-col gap-16">
        <StoriesSection />
        <CreatePost />

        <div className="grid gap-16">
          {
            !isLoading && data.data.map((item: IPostItem) =>
              <PostItem
                key={item._id}
                media={item.media}
                comments={item.comments}
                likes={item.likes}
                type={item.type}
                author={item.author}
                _id={item._id}
                avatar={item.avatar}
                content={item.content}
                createdAt={item.createdAt}
              />)
          }
        </div>
      </div>

      <div className="w-1/3">
        <FriendRequest />
      </div>
    </MainLayout>
  )
}

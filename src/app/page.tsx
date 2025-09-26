import PostItem from "./components/PostItem"
import MainLayout from "./layouts/MainLayout"
import CreatePost from "./sections/CreatePost"
import FriendRequest from "./sections/FriendRequest"
import StoriesSection from "./sections/StoriesSection"

export default function Home() {
  return (
    <MainLayout>
      <div className="w-2/3 flex flex-col gap-16">
        <StoriesSection />
        <CreatePost />

        <div className="grid gap-16">
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
      </div>

      <div className="w-1/3">
        <FriendRequest />
      </div>
    </MainLayout>
  )
}

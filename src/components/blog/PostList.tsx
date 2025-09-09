import { Post } from '@/domain/types'
import PostCard from './PostCard'

interface Props {
  posts: Post[]
}

export default function PostList({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  )
}

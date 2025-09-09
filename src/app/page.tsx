import { getAllPosts } from '@/lib/queries'
import PostList from '@/components/blog/PostList'

export default async function HomePage() {
  const posts = await getAllPosts()

  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="mb-8 text-center text-4xl font-bold">
        New Generation Blog
      </h1>
      <PostList posts={posts} />
    </main>
  )
}

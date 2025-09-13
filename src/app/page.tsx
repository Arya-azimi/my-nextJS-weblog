import LatestPosts from '@/components/blog/LatestPosts'
import { getLatestPosts } from '@/lib/queries'

export default async function HomePage() {
  const latestPosts = await getLatestPosts()

  return (
    <div>
      <LatestPosts posts={latestPosts} />
    </div>
  )
}

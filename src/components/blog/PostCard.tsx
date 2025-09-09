import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { Post } from '@/domain/types'

interface Props {
  post: Post
}

export default function PostCard({ post }: Props) {
  if (!post.slug) {
    return null
  }

  return (
    <Link href={`/${post.slug}`}>
      <article className="dark:hover:shadow-lg-dark overflow-hidden rounded-lg border transition-shadow hover:shadow-lg dark:border-gray-700">
        <div className="relative h-56 w-full">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            By {post.author.name} on{' '}
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </article>
    </Link>
  )
}

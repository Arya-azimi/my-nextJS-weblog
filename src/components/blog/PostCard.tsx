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
    <Link
      href={`/articles/${post.slug}`}
      className="group block overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl dark:shadow-gray-800"
    >
      <article className="relative">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={`Cover image for ${post.title}`}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // 3. جلوه زوم روی تصویر
          />
        </div>

        <div className="flex flex-col bg-white p-5 dark:bg-gray-900">
          <h2 className="text-xl leading-tight font-bold text-gray-800 transition-colors duration-200 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
            {post.title}
          </h2>

          <div className="mt-4 flex items-center space-x-3">
            {post.author.picture && (
              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={urlFor(post.author.picture).url()}
                  alt={`Picture of ${post.author.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {post.author.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

import { getPostBySlug } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'

type Props = {
  params: {
    slug: string
  }
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto p-4 md:p-8">
      <h1 className="mb-4 text-center text-4xl font-bold md:text-5xl">
        {post.title}
      </h1>
      <div className="my-4 flex items-center justify-center space-x-4">
        {post.author.picture && (
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={urlFor(post.author.picture).url()}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <p className="text-lg text-gray-600 dark:text-gray-400">
          By {post.author.name}
        </p>
      </div>
      <div className="relative mx-auto my-8 h-96 w-full">
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      <div className="prose dark:prose-invert mx-auto mt-8 max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  )
}

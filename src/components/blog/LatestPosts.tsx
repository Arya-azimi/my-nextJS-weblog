import { Post } from '@/domain/types'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

interface Props {
  posts: Post[]
}

export default function LatestPosts({ posts }: Props) {
  if (!posts || posts.length < 3) {
    return null
  }

  const [heroPost, sidePost1, sidePost2] = posts

  return (
    <section className="container mx-auto h-screen px-4 py-6">
      <div className="grid h-[60vh] grid-cols-1 gap-6 lg:grid-cols-4 lg:grid-rows-2">
        <div className="col-span-1 row-span-1 lg:col-span-3 lg:row-span-2">
          <Link
            href={`/articles/${heroPost.slug}`}
            className="group block h-full"
          >
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src={urlFor(heroPost.mainImage).url()}
                alt={heroPost.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-bold text-white lg:text-3xl">
                  {heroPost.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  {new Date(heroPost.publishedAt).toLocaleDateString('fa-IR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-span-1 row-span-1">
          <Link
            href={`/articles/${sidePost1.slug}`}
            className="group block h-full"
          >
            <div className="relative h-full min-h-[190px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src={urlFor(sidePost1.mainImage).url()}
                alt={sidePost1.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <h4 className="font-semibold text-white">{sidePost1.title}</h4>
                <p className="mt-2 text-sm text-gray-300">
                  {new Date(sidePost1.publishedAt).toLocaleDateString('fa-IR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-span-1 row-span-1">
          <Link
            href={`/articles/${sidePost2.slug}`}
            className="group block h-full"
          >
            <div className="relative h-full min-h-[190px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src={urlFor(sidePost2.mainImage).url()}
                alt={sidePost2.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <h4 className="font-semibold text-white">{sidePost2.title}</h4>
                <p className="mt-2 text-sm text-gray-300">
                  {new Date(sidePost2.publishedAt).toLocaleDateString('fa-IR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

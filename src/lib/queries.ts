import { client } from './sanity' // کلاینتی که در مرحله قبل ساختیم
import { Post } from '@/domain/types'
import { groq } from 'next-sanity' // ابزار کمکی برای نوشتن کوئری‌های GROQ

const postFields = groq`
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  "author": author->{name, picture}
`
export async function getAllPosts(): Promise<Post[]> {
  const posts = await client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      ${postFields}
    }`,
  )
  return posts
}

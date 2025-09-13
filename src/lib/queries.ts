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

export async function getPostBySlug(slug: string): Promise<Post> {
  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      "author": author->{name, picture}, // اطلاعات نویسنده را هم کامل کن
      "slug": slug.current,
    }`,
    { slug },
  )
  return post
}

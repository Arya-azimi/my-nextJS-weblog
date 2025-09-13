import { client } from './sanity'
import { Post } from '@/domain/types'
import { groq } from 'next-sanity'

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
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      mainImage,
      body,
      publishedAt,
      "author": author->{name, picture}
    }`,
    { slug },
  )
  return post
}

export async function getLatestPosts(): Promise<Post[]> {
  const posts = await client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc)[0...3] {
      _id,
      title,
      "slug": slug.current,
      mainImage,
      publishedAt,
      "author": author->{name, picture}
    }`,
  )
  return posts
}

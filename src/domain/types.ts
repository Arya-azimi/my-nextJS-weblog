import type { Image as SanityImage, Slug as SanitySlug } from 'sanity'
import type { PortableTextBlock } from '@portabletext/types'

export interface Author {
  _type: 'author'
  name: string
  picture: SanityImage
}

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string

  title: string
  slug: SanitySlug
  mainImage: SanityImage
  author: Author
  publishedAt: string
  body: PortableTextBlock[]
}

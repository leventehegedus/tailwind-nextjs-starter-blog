import Link from '@/components/Link'
import PostMeta from '@/components/post-shared/PostMeta'
import PostExcerpt from '@/components/post-shared/PostExcerpt'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import Image from 'next/image'

interface HighlightedPostListItemProps {
  post: {
    slug: string
    date: string
    title: string
    summary: string
    tags: string[]
    images?: string[] // first image url
    [key: string]: unknown
  }
}

export default function HighlightedPostListItem({ post }: HighlightedPostListItemProps) {
  const { slug, title, summary, tags, images } = post
  return (
    <li
      className="highlighted-article-container flex items-end overflow-hidden md:col-span-2 lg:col-span-2"
      style={{
        backgroundImage:
          images && images[0]
            ? `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${images[0]})`
            : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="block flex h-full w-full items-end">
        <div className="p-6 text-white">
          <PostMeta slug={slug} title={title} tags={tags} />
          <PostExcerpt summary={summary} textColor="text-gray-200" />
        </div>
      </div>
    </li>
  )
}

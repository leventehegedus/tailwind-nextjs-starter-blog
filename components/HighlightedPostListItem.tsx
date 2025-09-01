import Link from '@/components/Link'
import { PostMeta, PostExcerpt } from '@/components/PostShared'
import Tag from '@/components/Tag'
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
      className="highlighted-article-container flex items-end overflow-hidden rounded-xl md:col-span-2 lg:col-span-2"
      style={{
        backgroundImage:
          images && images[0]
            ? `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${images[0]})`
            : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <a href={`/blog/${slug}`} className="block h-full w-full">
        <div className="p-6 text-white">
          <header>
            {tags.length > 0 && (
              <div className="font-tag mb-2 text-gray-200 hover:font-bold">{tags[0]}</div>
            )}
            <h3 className="mb-2 line-clamp-3 text-2xl font-bold">{title}</h3>
          </header>
          <PostExcerpt summary={summary} textColor="text-gray-200" />
        </div>
      </a>
    </li>
  )
}

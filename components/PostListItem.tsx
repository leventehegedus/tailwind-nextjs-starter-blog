import Link from '@/components/Link'
import PostMeta from '@/components/post-shared/PostMeta'
import PostExcerpt from '@/components/post-shared/PostExcerpt'
import PostTags from '@/components/post-shared/PostTags'
import Image from 'next/image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

interface PostListItemProps {
  post: {
    slug: string
    date: string
    title: string
    summary: string
    tags: string[]
    images?: string[]
    [key: string]: unknown
  }
}

export default function PostListItem({ post }: PostListItemProps) {
  const { slug, date, title, summary, tags, images } = post
  return (
    <li key={slug} className="article-preview post story">
      <a className="block overflow-hidden" href={`/blog/${slug}`}>
        {images && images.length ? (
          <Image
            className="w-full object-cover transition-all duration-500 hover:scale-110 md:h-[314px]"
            src={images[0]}
            alt={title}
            width={600}
            height={314}
            sizes="(max-width: 1000px) 400px, 800px"
            priority={false}
            loading="lazy"
            style={{ objectFit: 'cover' }}
          />
        ) : null}
      </a>
      <div className="mb-1">
        <PostMeta slug={slug} title={title} tags={tags} />
        <PostExcerpt summary={summary} />
        <div className="mb-1 text-sm text-gray-400">
          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
        </div>
        <PostTags tags={tags} />
      </div>
    </li>
  )
}

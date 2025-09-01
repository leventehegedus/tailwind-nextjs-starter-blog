import Link from '@/components/Link'
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
      <a className="article-preview-link block overflow-hidden" href={`/blog/${slug}`}>
        {images && images.length ? (
          <Image
            className="article-preview-image w-full object-cover transition-all duration-500 hover:scale-110 md:h-[390px]"
            src={images[0]}
            alt={title}
            width={600}
            height={390}
            sizes="(max-width: 1000px) 400px, 800px"
            priority={false}
            loading="lazy"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <></>
        )}
      </a>
      <div className="article-preview-container">
        <a className="article-preview-link" href={`/blog/${slug}`}>
          <header className="article-preview-header">
            {tags.length > 0 && (
              <div className="font-tag mt-2 mb-2 text-gray-500 hover:font-bold">{tags[0]}</div>
            )}
            <h3 className="line-clamp-3 overflow-hidden text-xl leading-tight font-bold hover:text-gray-400">
              {title}
            </h3>
          </header>
        </a>
        <div className="excerpt mt-2">
          <span className="font-body-text line-clamp-4 text-gray-500">{summary}</span>
        </div>
        <div className="mt-2 text-sm text-gray-400">
          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
        </div>
        <div className="mt-2 flex flex-wrap">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      </div>
    </li>
  )
}

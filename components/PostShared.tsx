import React from 'react'
import Link from '@/components/Link'
import Tag from '@/components/Tag'

interface PostMetaProps {
  slug: string
  title: string
  tags: string[]
  className?: string
}

export function PostMeta({ slug, title, tags, className = '' }: PostMetaProps) {
  return (
    <Link href={`/blog/${slug}`} className={className}>
      <header>
        {tags.length > 0 && (
          <div className="font-tag mb-2 text-gray-500 hover:font-bold dark:text-gray-200">
            {tags[0]}
          </div>
        )}
        <h3 className="mb-2 line-clamp-3 text-xl font-bold hover:text-gray-400 lg:text-2xl">
          {title}
        </h3>
      </header>
    </Link>
  )
}

interface PostExcerptProps {
  summary: string
  className?: string
  textColor?: string
}

export function PostExcerpt({
  summary,
  className = '',
  textColor = 'text-gray-500',
}: PostExcerptProps) {
  return (
    <div className={`excerpt ${className}`}>
      <span className={`font-body-text line-clamp-4 ${textColor}`}>{summary}</span>
    </div>
  )
}

interface PostTagsProps {
  tags: string[]
  className?: string
}

export function PostTags({ tags, className = '' }: PostTagsProps) {
  return (
    <div className={`flex flex-wrap ${className}`}>
      {tags.map((tag) => (
        <Tag key={tag} text={tag} />
      ))}
    </div>
  )
}

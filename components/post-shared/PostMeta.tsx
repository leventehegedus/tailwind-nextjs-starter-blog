import Link from '@/components/Link'

interface PostMetaProps {
  slug: string
  title: string
  tags: string[]
  className?: string
}

export default function PostMeta({ slug, title, tags, className = '' }: PostMetaProps) {
  return (
    <Link href={`/blog/${slug}`} className={className}>
      <header>
        {tags.length > 0 && <div className="mb-1 text-gray-500 dark:text-gray-200">{tags[0]}</div>}
        <h3 className="mb-1 line-clamp-3 text-xl font-bold hover:text-gray-400 lg:text-2xl">
          {title}
        </h3>
      </header>
    </Link>
  )
}

import Link from '@/components/Link'
import Tag from '../Tag'

interface PostMetaProps {
  slug: string
  title: string
  tags: string[]
  className?: string
}

export default function PostMeta({ slug, title, tags, className = '' }: PostMetaProps) {
  return (
    <Link href={`/blog/${slug}`} className={`block ${className}`}>
      <h3 className="mb-2 line-clamp-3 text-xl font-bold hover:text-gray-400 lg:text-2xl">
        {title}
      </h3>
    </Link>
  )
}

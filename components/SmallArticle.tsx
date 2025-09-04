import Link from '@/components/Link'
import Image from 'next/image'
import Tag from './Tag'
import PostTags from './post-shared/PostTags'

interface Post {
  slug: string
  title: string
  tags: string[]
  images?: string[]
}

interface SmallArticleProps {
  post: Post
}

export default function SmallArticle({ post }: SmallArticleProps) {
  const { slug, title, tags, images } = post
  const imageSrc = images && images.length > 0 ? images[0] : '/static/images/default.png'
  const imageAlt = title
  const href = `/blog/${slug}`
  const tagHref = tags && tags.length > 0 ? `/tag/${tags[0]}` : undefined

  return (
    <div className="flex w-full items-end justify-start gap-2 border-b border-gray-200 pb-6 last:border-b-0 dark:border-gray-700">
      <Link href={href} className="block h-24 w-24 shrink-0 overflow-hidden md:h-20 md:w-20">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={96}
          height={96}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
          sizes="(max-width: 1000px) 400px, 800px"
          loading="lazy"
        />
      </Link>
      <Link
        href={href}
        className="line-clamp-3 block w-full text-base leading-tight font-semibold break-words md:line-clamp-3 md:text-sm"
      >
        {title}
      </Link>
    </div>
  )
}

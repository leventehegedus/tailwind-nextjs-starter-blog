import Tag from '@/components/Tag'

interface PostTagsProps {
  tags: string[]
  className?: string
}

export default function PostTags({ tags, className = '' }: PostTagsProps) {
  return (
    <div className={`mb-1 flex flex-wrap ${className}`}>
      {tags.slice(0, 5).map((tag) => (
        <Tag key={tag} text={tag} />
      ))}
    </div>
  )
}

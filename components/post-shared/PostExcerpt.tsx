interface PostExcerptProps {
  summary: string
  className?: string
  textColor?: string
}

export default function PostExcerpt({
  summary,
  className = '',
  textColor = 'text-gray-500',
}: PostExcerptProps) {
  return (
    <div className={`mb-2 ${className}`}>
      <span className={`font-body-text line-clamp-3 ${textColor}`}>{summary}</span>
    </div>
  )
}

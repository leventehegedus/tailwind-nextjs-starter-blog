import Link from '@/components/Link'
import PostListItem from '@/components/PostListItem'
import GridSection from '@/components/GridSection'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import HighlightedPostListItem from '@/components/HighlightedPostListItem'

const MAX_DISPLAY = 20

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <GridSection title="latest">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, 1).map((post) => (
            <HighlightedPostListItem key={post.slug} post={post} />
          ))}
          {posts.slice(1, MAX_DISPLAY).map((post) => (
            <PostListItem key={post.slug} post={post} />
          ))}
        </GridSection>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}

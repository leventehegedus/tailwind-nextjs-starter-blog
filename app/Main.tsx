import Link from '@/components/Link'
import PostListItem from '@/components/PostListItem'
import GridSection from '@/components/GridSection'
import HighlightedPostListItem from '@/components/HighlightedPostListItem'
import SmallArticle from '@/components/SmallArticle'

const MAX_DISPLAY = 6

const renderPostSection = (title, postList) => {
  return (
    <GridSection title={title}>
      {!postList.length && 'No posts found.'}
      {postList.length > 0 && <HighlightedPostListItem key={postList[0].slug} post={postList[0]} />}
      {postList.slice(1, MAX_DISPLAY).map((post) => (
        <PostListItem key={post.slug} post={post} />
      ))}
      <div className="flex flex-col gap-4">
        <div className="col-span-1 text-gray-500 uppercase md:col-span-2 lg:col-span-4">
          Editor picks
        </div>
        {postList.slice(0, 4).map((post) => (
          <SmallArticle key={post.slug} post={post} />
        ))}
      </div>
    </GridSection>
  )
}

const Home = ({ posts }) => {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {renderPostSection('Latest', posts)}
        {renderPostSection(
          'Guide',
          posts.filter((post) => post.tags?.includes('guide'))
        )}
        {renderPostSection(
          'Tailwind',
          posts.filter((post) => post.tags?.includes('tailwind'))
        )}
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
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}

export default Home

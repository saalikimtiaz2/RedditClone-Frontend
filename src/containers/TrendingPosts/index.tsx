import AllTrendingPosts from 'src/data/TrendingPosts'
import TrendingPostCard from '../../components/TrendingPostCard'

function TrendingPosts() {
  return (
    <>
      <h3 className='mt-4 pb-2 text-sm font-semibold text-gray-800 dark:text-gray-200'>Trending today</h3>
      <div className='grid grid-cols-12 gap-x-4'>
        {AllTrendingPosts.map(trend => (
          <div key={trend.title} className='xs:col-span-12 md:col-span-4 lg:col-span-3'>
            <TrendingPostCard {...trend} />
          </div>
        ))}
      </div>
    </>
  )
}

export default TrendingPosts

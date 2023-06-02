import TrendingPostCard from 'components/TrendingPostCard'
import AllTrendingPosts from 'data/TrendingPosts'
import { useEffect, useState } from 'react'

function TrendingPosts() {
  const [numberToMap, setNumberToMap] = useState(0)

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setNumberToMap(4)
    } else if (window.innerWidth > 1024 && window.innerWidth < 1200) {
      setNumberToMap(3)
    } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
      setNumberToMap(2)
    } else {
      setNumberToMap(1)
    }
  }, [])

  return (
    <>
      <h3 className='mt-4 pb-2 text-sm font-semibold text-gray-800 dark:text-gray-200'>Trending today</h3>
      {numberToMap === 0 ? (
        <div>Loading</div>
      ) : (
        <div className='grid grid-cols-12 gap-4'>
          {AllTrendingPosts.slice(0, numberToMap).map(trend => (
            <div key={trend.title} className='xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3'>
              <TrendingPostCard {...trend} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default TrendingPosts

import { TrendingPostInterface } from '@/interfaces/trendingPostsInterface'
import { FC } from 'react'

const TrendingCard: FC<TrendingPostInterface> = ({ imageUrl, title, subtitle, category }) => {
  return (
    <div className='relative flex h-52 cursor-pointer flex-col justify-end overflow-hidden rounded-lg bg-gradient-to-t from-black from-10% to-transparent p-3 text-white '>
      <h3 className='text-lg font-semibold'>{title}</h3>
      <h4 className='w-11/12 truncate pb-2 text-sm'>{subtitle}</h4>
      <h6>{category}</h6>
      <img
        src={imageUrl}
        alt=''
        className='absolute bottom-0 left-0 right-0 top-0 -z-50 h-full w-full object-cover object-center'
      />
    </div>
  )
}

export default TrendingCard

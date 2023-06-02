import { TrendingPostInterface } from 'interfaces/trendingPostsInterface'
import { FC } from 'react'

const TrendingCard: FC<TrendingPostInterface> = ({ imageUrl, title, subtitle, category }) => {
  return (
    <div className='overlay relative z-50 flex h-52 cursor-pointer flex-col justify-end overflow-hidden rounded-lg  p-3 text-white  '>
      <div className='z-[101]'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <h4 className='w-11/12 truncate pb-2 text-sm'>{subtitle}</h4>
        <h6>{category}</h6>
      </div>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full bg-cover bg-center'
      />
    </div>
  )
}

export default TrendingCard

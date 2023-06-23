import { TrendingPostInterface } from 'interfaces/trendingPostsInterface'
import { FC } from 'react'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const TrendingCard: FC<TrendingPostInterface> = ({ imageUrl, title, subtitle, category, listView }) => {
  const navigate = useNavigate()

  const slug = title.toLowerCase().replaceAll(' ', '-')

  if (listView) {
    return (
      <div
        onClick={() => navigate(`/post/${slug}`)}
        className='flex cursor-pointer items-start gap-x-4 border-b border-gray-100 p-4 last-of-type:border-b-0 hover:bg-secondary/5 dark:border-gray-600 dark:hover:bg-gray-700'
      >
        <BsArrowUpRightCircle className='mt-2 text-2xl text-secondary' />
        <div className='w-2/3'>
          <h3 className='truncate text-base font-semibold'>{title}</h3>
          <h4 className='truncate pb-2 text-sm text-gray-500'>{subtitle}</h4>
          <p className='text-xs text-gray-500'>{category}</p>
        </div>
        <img src={imageUrl} className='h-18  w-24 rounded-md' />
      </div>
    )
  } else
    return (
      <div
        onClick={() => navigate(`/post/${slug}`)}
        className='overlay relative z-50 flex h-52 cursor-pointer flex-col justify-end overflow-hidden rounded-lg  p-3 text-white  '
      >
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

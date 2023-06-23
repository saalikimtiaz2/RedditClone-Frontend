import { FC } from 'react'

type AvatarTypes = {
  active?: boolean
  circle?: boolean
}

const Avatar: FC<AvatarTypes> = ({ active, circle }) => {
  return (
    <button className='relative'>
      <img
        src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'
        alt=''
        className={`h-10 w-10 ${circle ? 'rounded-full' : 'rounded-md'}`}
      />
      {active && (
        <div className='absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-4 border-white bg-green-500 dark:border-gray-700' />
      )}
    </button>
  )
}

export default Avatar

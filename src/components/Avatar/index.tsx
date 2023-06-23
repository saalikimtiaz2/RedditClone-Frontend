import { FC } from 'react'

type AvatarTypes = {
  active?: boolean
  circle?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const Avatar: FC<AvatarTypes> = ({ active, circle, size = 'md' }) => {
  return (
    <button className='relative'>
      <img
        src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'
        alt=''
        className={`${size === 'sm' && 'h-6 w-6'} ${size === 'md' && 'h-8 w-8'}  ${size === 'lg' && 'h-10 w-10'} ${
          circle ? 'rounded-full' : 'rounded-md'
        }`}
      />
      {active && (
        <div
          className={`absolute -bottom-1 -right-1 ${size === 'sm' && 'h-3 w-3 border-2'} ${
            size === 'md' && 'h-4 w-4 border-4'
          } ${size === 'lg' && 'h-5 w-5 border-4'} rounded-full border-white bg-green-500 dark:border-gray-700`}
        />
      )}
    </button>
  )
}

export default Avatar

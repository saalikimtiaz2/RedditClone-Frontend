import { postInterface } from 'interfaces/postInterfaces'
import { FC } from 'react'
import { BiComment } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'
import { TbArrowBigDown, TbArrowBigUp, TbArrowRampRight2 } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { openSignupModal } from 'redux/reducers/loginModalSlice'
import { useAppDispatch, useAppSelector } from 'redux/store'

const PostCard: FC<postInterface> = ({
  _id,
  imageUrl,
  title,
  overview: subtitle,
  category,
  postedBy: user,
  postTime,
  likes,
  categoryImage,
}) => {
  const navitgate = useNavigate()
  const dispatch = useAppDispatch()

  const { isAuth } = useAppSelector(state => state.authSlice)

  return (
    <div
      onClick={() => navitgate(`/post/${_id}`)}
      className='mb-4 flex cursor-pointer overflow-hidden rounded border border-gray-200 bg-gray-200 shadow-xl hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:shadow-gray-800 hover:dark:border-gray-500 xs:flex-col-reverse md:flex-row'
    >
      <div className='flex h-full items-center gap-2 bg-gray-200 p-2 dark:bg-gray-800 xs:flex-row md:flex-col '>
        <button
          onClick={evt => evt.stopPropagation()}
          className='h-6 w-6 text-gray-500 hover:bg-gray-100 hover:text-primary hover:dark:bg-gray-700'
        >
          <TbArrowBigUp className='text-2xl' />
        </button>
        <p className='w-max text-center text-[10px] font-semibold'>{likes}k</p>
        <button
          onClick={evt => evt.stopPropagation()}
          className='h-6 w-6 text-gray-500 hover:bg-gray-100 hover:text-secondary hover:dark:bg-gray-700'
        >
          <TbArrowBigDown className='text-2xl' />
        </button>
      </div>
      <div className='grow bg-white dark:bg-gray-700'>
        <div className='p-2'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-x-2'>
              <img src={categoryImage} alt='' className='h-6 w-6 rounded-full object-cover object-center' />
              <p className='text-sm'>
                {category}.{' '}
                <span className='text-[10px] text-gray-500'>
                  Posted by {user} {postTime}
                </span>
              </p>
            </div>
            {!isAuth && (
              <button
                onClick={evt => {
                  evt.stopPropagation()
                  dispatch(openSignupModal())
                }}
                className='btn btn-sm rounded-full bg-secondary text-xs font-semibold text-white'
              >
                Join
              </button>
            )}
          </div>
          <p className='mt-2'>{title}</p>
          <p>{subtitle}</p>
        </div>
        <div className='post-canvas'>
          <img src={imageUrl} className='h-full w-full object-contain' alt='' />
        </div>
        <div className='flex items-center'>
          <button
            onClick={evt => evt.stopPropagation()}
            className='btn btn-xs text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-600'
          >
            <BiComment className='text-xl' />
            Comment
          </button>
          <button
            onClick={evt => evt.stopPropagation()}
            className='btn btn-xs text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-600'
          >
            <TbArrowRampRight2 className='text-xl' />
            Share
          </button>
          <button
            onClick={evt => evt.stopPropagation()}
            className='btn btn-xs text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-600'
          >
            <BsBookmark className='text-xl' />
            Save
          </button>
          <button
            onClick={evt => evt.stopPropagation()}
            className='btn btn-xs text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-600'
          >
            <FiMoreHorizontal className='text-xl' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostCard

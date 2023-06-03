import { BiComment } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'
import { TbArrowBigDown, TbArrowBigUp, TbArrowRampRight2 } from 'react-icons/tb'

function PostCard() {
  return (
    <div className='mb-4 flex rounded border border-gray-100 bg-white hover:border-gray-200 dark:border-gray-600 dark:bg-gray-800 hover:dark:border-gray-500 xs:flex-col-reverse md:flex-row'>
      <div className='flex h-full gap-2 bg-gray-200 p-2 dark:bg-gray-800 xs:flex-row xs:items-center xs:justify-center md:flex-col md:items-start md:justify-start'>
        <button className='h-6 w-6 text-gray-500 hover:bg-gray-100 hover:text-primary hover:dark:bg-gray-700'>
          <TbArrowBigUp className='text-2xl' />
        </button>
        <p className='w-max text-center text-[10px] font-semibold'>48.5k</p>
        <button className='h-6 w-6 text-gray-500 hover:bg-gray-100 hover:text-secondary hover:dark:bg-gray-700'>
          <TbArrowBigDown className='text-2xl' />
        </button>
      </div>
      <div className='grow bg-gray-700'>
        <div className='p-2'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-x-2'>
              <img
                src='https://i0.wp.com/mvslim.com/wp-content/uploads/2017/08/the-shah-faisal-mosque-islamabad-80985.jpg?w=610&ssl=1'
                alt=''
                className='h-6 w-6 rounded-full object-cover object-center'
              />
              <p className='text-sm'>
                r/islamabad. <span className='text-[10px] text-gray-500'>Posted by u/salik.imtiaz 6 hours ago</span>
              </p>
            </div>
            <button className='btn btn-sm rounded-full bg-secondary text-xs'>Join</button>
          </div>
          <p className='mt-2'>Questions raised over top leaders quitting Imran Khan&apos;s party.</p>
        </div>
        <div className='post-canvas'>
          <img
            src='https://www.aljazeera.com/wp-content/uploads/2023/05/2023-05-12T145627Z_1326663711_RC2ZW0AFPLL5_RTRMADP_3_PAKISTAN-POLITICS-KHAN-1684295414.jpg?resize=770%2C513&quality=80'
            className='h-full w-full object-contain'
            alt=''
          />
        </div>
        <div className='flex items-center'>
          <button className='btn btn-xs text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-600'>
            <BiComment className='text-xl' />
            Comment
          </button>
          <button className='btn btn-xs text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-600'>
            <TbArrowRampRight2 className='text-xl' />
            Share
          </button>
          <button className='btn btn-xs text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-600'>
            <BsBookmark className='text-xl' />
            Save
          </button>
          <button className='btn btn-xs text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-600'>
            <FiMoreHorizontal className='text-xl' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostCard

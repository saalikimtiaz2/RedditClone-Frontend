import Avatar from 'components/Avatar'
import { BsLink45Deg } from 'react-icons/bs'
import { CiImageOn } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'

function CreatePost() {
  const navigate = useNavigate()
  return (
    <>
      <div className='pb-4'>
        <div className='flex items-center gap-x-2 rounded bg-white p-2 dark:bg-gray-700'>
          <Avatar active circle />
          <button
            onClick={() => navigate('/submit?type=post')}
            className='btn grow rounded border border-gray-200 py-2 hover:border-gray-700 dark:border-gray-600 dark:hover:border-gray-300'
          >
            Create Post
          </button>
          <button
            onClick={() => navigate('/submit?type=media')}
            className='rounded-md p-2 text-xl text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-600'
          >
            <CiImageOn className='text-2xl' />
          </button>
          <button
            onClick={() => navigate('/submit?type=url')}
            className='rounded-md p-2 text-xl text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-600'
          >
            <BsLink45Deg className='text-2xl' />
          </button>
        </div>
      </div>
    </>
  )
}

export default CreatePost

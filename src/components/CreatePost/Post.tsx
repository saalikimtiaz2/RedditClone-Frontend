import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const BASE_URL = import.meta.env.VITE_APP_API

const Post = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')

  const onSubmit = async () => {
    const body = {
      postType: 'text',
      title,
      overview,
    }

    const apiConfig = {
      url: `${BASE_URL}/posts`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access-token')}`,
      },
      method: 'post',
      data: body,
    }

    try {
      const { data } = await axios(apiConfig)
      navigate(`/post/${data.post.id}`)
    } catch (err) {
      toast.error('Something went wrong.')
    }
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title'
        className='input-item block w-full'
        value={title}
        onChange={evt => setTitle(evt.target.value)}
      />
      <textarea
        rows={2}
        placeholder='Text (Optional)'
        className='input-item block w-full'
        value={overview}
        onChange={evt => setOverview(evt.target.value)}
      />
      <div className='mt-6 flex items-center justify-end gap-x-2 border-t border-gray-200 pt-6 dark:border-gray-700'>
        <button
          type='button'
          className='btn btn-sm rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 hover:dark:bg-gray-600'
        >
          Save Draft
        </button>
        <button
          type='submit'
          className='btn btn-sm rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 hover:dark:bg-gray-600'
          onClick={evt => {
            evt.preventDefault()
            onSubmit()
          }}
        >
          Post
        </button>
      </div>
    </form>
  )
}

export default Post

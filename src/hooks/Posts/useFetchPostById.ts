import axios from 'axios'
import { postInterface } from 'interfaces/postInterfaces'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const BASE_URL = import.meta.env.VITE_APP_API

const useFetchPostById = (postId: string): [boolean, postInterface, () => Promise<void>] => {
  const [loading, setLoading] = useState(true)
  const [postData, setPostData] = useState<postInterface>({
    _id: '',
    postType: '',
    title: '',
    overview: '',
    postedBy: '',
    postTime: '',
    likes: 0,
    disLikes: 0,
  })

  const fetchPost = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/posts/${postId}`)
      setPostData({ ...res.data.post })
    } catch (err) {
      toast.error('Error Fetching post')
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return [loading, postData, fetchPost]
}

export default useFetchPostById

import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'

function Profile() {
  const { data } = useSelector((state: RootState) => state.authSlice)

  return (
    <div className='relative flex h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-purple-500'>
      <h1 className='mb-4 text-5xl font-bold text-white'>WELCOME</h1>
      <p className='text-3xl text-white'>{data?.email}🔥</p>
      <button className='mt-8 rounded bg-white px-4 py-2 text-gray-800 hover:bg-gray-200'>Get Started ❤️</button>
    </div>
  )
}

export default Profile

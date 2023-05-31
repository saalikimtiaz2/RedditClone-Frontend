import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from 'src/redux/reducers/authSlice'

type LoginCredentials = {
  email: string
  password: string
}

const Login = () => {
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  })

  const dispatch = useDispatch()

  const handleUserLogin = () => {
    if (credentials.email !== '' && credentials.password !== '') {
      dispatch(loginUser({ name: '', email: credentials.email }))
      navigate('/profile')
    }
  }

  return (
    <div className='flex h-screen items-center justify-center bg-gradient-to-b from-blue-500 to-purple-500'>
      <div className='max-w-md rounded-lg bg-white bg-opacity-40 px-8 py-6 shadow-md backdrop-blur-sm'>
        <h2 className='mb-4 text-center text-2xl font-bold text-gray-800'>Login to your account</h2>
        <form>
          <div className='mb-4'>
            <label htmlFor='email' className='font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              name='email'
              value={credentials.email}
              onChange={evt =>
                setCredentials({
                  ...credentials,
                  email: evt.target.value,
                })
              }
              className='mt-1 w-full rounded-lg bg-gray-200 bg-opacity-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={credentials.password}
              onChange={evt =>
                setCredentials({
                  ...credentials,
                  password: evt.target.value,
                })
              }
              className='mt-1 w-full rounded-lg bg-gray-200 bg-opacity-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <button
              type='submit'
              onClick={evt => {
                evt.preventDefault()
                handleUserLogin()
              }}
              className='focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
            >
              Login
            </button>
          </div>
        </form>
        <p className='mt-4 text-center text-gray-600'>
          Don't have an account?{' '}
          <button onClick={() => navigate('/signup')} className='font-medium text-blue-500 hover:text-blue-700'>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login

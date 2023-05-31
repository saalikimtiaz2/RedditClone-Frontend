import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signupUser } from 'src/redux/reducers/authSlice'

type SignupCredentials = {
  name: string
  email: string
  password: string
}

const Signup = () => {
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState<SignupCredentials>({
    name: '',
    email: '',
    password: '',
  })

  const dispatch = useDispatch()

  const handleUserSignup = () => {
    if (credentials.email !== '' && credentials.password !== '' && credentials.name !== '') {
      dispatch(signupUser({ name: credentials.email, email: credentials.email }))
      navigate('/profile')
    }
  }

  return (
    <div className='flex h-screen items-center justify-center bg-gradient-to-b from-primary to-secondary'>
      <div className='max-w-md rounded-lg bg-white bg-opacity-40 px-8 py-6 shadow-md backdrop-blur-sm'>
        <h2 className='mb-4 text-center text-2xl font-bold text-gray-800'>Create an Account</h2>
        <form>
          <div className='mb-4'>
            <label htmlFor='name' className='text-gray-700 font-medium'>
              Name
            </label>
            <input
              type='text'
              id='name'
              value={credentials.name}
              onChange={evt =>
                setCredentials({
                  ...credentials,
                  name: evt.target.value,
                })
              }
              className='focus:ring-blue-500 mt-1 w-full rounded-lg bg-gray-200 bg-opacity-50 px-4 py-2 focus:outline-none focus:ring-2'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='text-gray-700 font-medium'>
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
              className='focus:ring-blue-500 mt-1 w-full rounded-lg bg-gray-200 bg-opacity-50 px-4 py-2 focus:outline-none focus:ring-2'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='text-gray-700 font-medium'>
              Password
            </label>
            <input
              type='password'
              name='password'
              value={credentials.password}
              onChange={evt =>
                setCredentials({
                  ...credentials,
                  password: evt.target.value,
                })
              }
              className='focus:ring-blue-500 mt-1 w-full rounded-lg bg-gray-200 bg-opacity-50 px-4 py-2 focus:outline-none focus:ring-2'
            />
          </div>
          <div>
            <button
              type='submit'
              onClick={evt => {
                evt.preventDefault()
                handleUserSignup()
              }}
              className='focus:shadow-outline bg-blue-500 hover:bg-blue-700 w-full rounded px-4 py-2 font-bold text-white focus:outline-none'
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className='text-gray-600 mt-4 text-center'>
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className='text-blue-500 hover:text-blue-700 font-medium'>
            Sign In
          </button>
        </p>
      </div>
    </div>
  )
}

export default Signup

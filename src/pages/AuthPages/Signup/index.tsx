import { SignupCredentialsInterface } from 'interfaces/authSliceInterfaces'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signupUsers } from 'redux/reducers/authSlice'
import { useAppDispatch } from 'redux/store'

const Signup = () => {
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState<SignupCredentialsInterface>({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
  })

  const dispatch = useAppDispatch()

  const handleUserSignup = () => {
    const authData = {
      username: credentials.username,
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      passwordConfirm: credentials.passwordConfirm,
    }

    if (credentials.email !== '' && credentials.password !== '' && credentials.name !== '') {
      dispatch(signupUsers(authData))
      navigate('/profile')
    }
  }

  return (
    <div className='flex h-screen items-center justify-center bg-gradient-to-b from-primary to-secondary'>
      <div className='max-w-md rounded-lg bg-white bg-opacity-40 px-8 py-6 shadow-md backdrop-blur-sm'>
        <h2 className='mb-4 text-center text-2xl font-bold text-gray-800'>Create an Account</h2>
        <form>
          <div className='mb-4'>
            <label htmlFor='name' className='font-medium text-gray-700'>
              Username
            </label>
            <input
              type='text'
              value={credentials.username}
              onChange={evt =>
                setCredentials({
                  ...credentials,
                  name: evt.target.value,
                })
              }
              className='mt-1 w-full rounded-lg bg-gray-200 bg-opacity-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='name' className='font-medium text-gray-700'>
              Name
            </label>
            <input
              type='text'
              value={credentials.name}
              onChange={evt =>
                setCredentials({
                  ...credentials,
                  name: evt.target.value,
                })
              }
              className='mt-1 w-full rounded-lg bg-gray-200 bg-opacity-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
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
              name='password'
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
          <div className='mb-4'>
            <label htmlFor='password' className='font-medium text-gray-700'>
              Confirm Password
            </label>
            <input
              type='passwordConfirm'
              name='password'
              value={credentials.passwordConfirm}
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
                handleUserSignup()
              }}
              className='focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className='mt-4 text-center text-gray-600'>
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className='font-medium text-blue-500 hover:text-blue-700'>
            Sign In
          </button>
        </p>
      </div>
    </div>
  )
}

export default Signup

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../../redux/reducers/authSlice'

type LoginCredentials = {
  email: string
  password: string
}

const LoginForm = () => {
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  })

  const dispatch = useDispatch()

  const handleUserLogin = () => {
    if (credentials.email !== '' && credentials.password !== '') {
      dispatch(loginUser({ password: credentials.password, email: credentials.email }))
      navigate('/profile')
    }
  }

  return (
    <>
      <div className='md:px-10 md:pt-10'>
        <h3 className=' text-lg font-bold text-gray-800'>Login</h3>
        <p className='mb-10 text-xs'>
          By continuing, you are setting up a Reddit account and agree to our User Agreement and Privacy Policy.
        </p>
        <form className='auth-form'>
          <div className='relative'>
            <input
              name='email'
              value={credentials.email}
              onChange={evt =>
                setCredentials({
                  ...credentials,
                  email: evt.target.value,
                })
              }
            />
            <label className='floating-label'>Username or Email</label>
          </div>
          <div className='relative'>
            <input
              name='password'
              type='password'
              value={credentials.password}
              onChange={evt =>
                setCredentials({
                  ...credentials,
                  password: evt.target.value,
                })
              }
            />
            <label className='floating-label'>Password</label>
          </div>
          <p className='mb-4 text-xs'>Forgot your username or password?</p>
          <div>
            <button
              type='submit'
              onClick={evt => {
                evt.preventDefault()
                handleUserLogin()
              }}
              disabled={credentials.email === '' && credentials.password === ''}
              className='focus:shadow-outline w-full rounded-full bg-primary px-4 py-2 font-bold text-white focus:outline-none disabled:opacity-40'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginForm

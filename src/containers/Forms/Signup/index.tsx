import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signupUser } from '../../../redux/reducers/authSlice'

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
    <>
      <div className='md:px-10 md:pt-10'>
        <h2 className='text-lg font-bold text-gray-800'>Signup</h2>
        <p className='mb-10 text-xs'>
          By continuing, you are setting up a Reddit account and agree to our User Agreement and Privacy Policy.
        </p>
        <form className='auth-form'>
          <div className='relative'>
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
            />
            <span className='floating-label'>Name</span>
          </div>
          <div className='relative'>
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
            />
            <span className='floating-label'>Email</span>
          </div>
          <div className='relative'>
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
            />
            <span className='floating-label'>Password</span>
          </div>
          <div>
            <button
              type='submit'
              onClick={evt => {
                evt.preventDefault()
                handleUserSignup()
              }}
              className='focus:shadow-outline mt-4 w-full rounded-full bg-primary px-4 py-2 font-bold text-white  focus:outline-none'
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup

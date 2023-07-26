import { LoginCredentialsInterface } from 'interfaces/authSliceInterfaces'
import { useState } from 'react'
import { Puff } from 'react-loader-spinner'
import { loginUser } from 'redux/reducers/authSlice'
import { closeLoginModal } from 'redux/reducers/loginModalSlice'
import { useAppDispatch, useAppSelector } from 'redux/store'

const LoginForm = () => {
  const { loading, isAuth } = useAppSelector(state => state.authSlice)

  const [credentials, setCredentials] = useState<LoginCredentialsInterface>({
    email: '',
    password: '',
  })

  const dispatch = useAppDispatch()

  const handleUserLogin = () => {
    if (credentials.email !== '' && credentials.password !== '') {
      dispatch(loginUser(credentials))
    }
  }

  if (isAuth) {
    dispatch(closeLoginModal())
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
              disabled={(credentials.email === '' && credentials.password === '') || loading}
              className='btn mt-4 w-full rounded-full bg-primary text-white disabled:opacity-50'
            >
              {loading ? <Puff color='#fff' width='20px' height='20px' /> : 'Login'}
            </button>
          </div>

          {/* {error !== null && <p className='mt-4 text-center text-sm text-red-600'>{error.data.message}</p>} */}
        </form>
      </div>
    </>
  )
}

export default LoginForm

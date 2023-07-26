// 1) Local Imports
import { SignupCredentialsInterface } from 'interfaces/authSliceInterfaces'
import { closeLoginModal } from 'redux/reducers/loginModalSlice'
import { useAppDispatch, useAppSelector } from 'redux/store'

// 2) Packages Imports
import { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Puff } from 'react-loader-spinner'
import { signupUsers } from 'redux/reducers/authSlice'

const Signup = () => {
  const dispatch = useAppDispatch()
  const { loading, isAuth } = useAppSelector(state => state.authSlice)

  const [step, setStep] = useState<'one' | 'two'>('one')
  const [credentials, setCredentials] = useState<SignupCredentialsInterface>({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
  })

  const handleUserSignup = () => {
    const authData = {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      passwordConfirm: credentials.passwordConfirm,
      username: credentials.username,
    }
    dispatch(signupUsers(authData))
  }

  if (isAuth) {
    dispatch(closeLoginModal())
  }

  return (
    <>
      <div className='md:px-10 md:pt-10'>
        <h2 className='text-lg font-bold text-gray-800'>Signup</h2>
        <p className='mb-10 text-xs'>
          By continuing, you are setting up a Reddit account and agree to our User Agreement and Privacy Policy.
        </p>
        <form className='auth-form'>
          {step === 'one' ? (
            <>
              <div className='relative'>
                <input
                  name='username'
                  value={credentials.username}
                  onChange={evt =>
                    setCredentials({
                      ...credentials,
                      username: evt.target.value,
                    })
                  }
                />
                <span className='floating-label'>Username</span>
              </div>
              <div className='relative'>
                <input
                  name='name'
                  value={credentials.name}
                  onChange={evt =>
                    setCredentials({
                      ...credentials,
                      name: evt.target.value,
                    })
                  }
                />
                <span className='floating-label'>Full Name</span>
              </div>
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
                <span className='floating-label'>Email</span>
              </div>
              <p className='text-xs text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, beatae.
              </p>
              <div>
                <button
                  type='submit'
                  onClick={evt => {
                    evt.preventDefault()
                    setStep('two')
                  }}
                  disabled={credentials.username === '' || credentials.name === '' || credentials.email === ''}
                  className='focus:shadow-outline mt-4 w-full rounded-full bg-primary px-4 py-2 font-bold text-white focus:outline-none  disabled:opacity-50'
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={evt => {
                  evt.preventDefault()
                  setStep('one')
                }}
                className='btn btn-sm mb-4 rounded-full bg-gray-100 hover:bg-gray-200'
              >
                <BiArrowBack /> Back
              </button>
              <p className='mb-4 text-xs text-gray-500'>Please set password for your account.</p>
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
              <div className='relative'>
                <input
                  type='password'
                  name='password'
                  className={`${
                    credentials.passwordConfirm !== '' &&
                    credentials.password !== credentials.passwordConfirm &&
                    'error-input'
                  }`}
                  value={credentials.passwordConfirm}
                  onChange={evt =>
                    setCredentials({
                      ...credentials,
                      passwordConfirm: evt.target.value,
                    })
                  }
                />
                <span className='floating-label'>Confirm Password</span>
              </div>
              <p className='text-xs text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, beatae.
              </p>

              <div>
                <button
                  type='submit'
                  onClick={evt => {
                    evt.preventDefault()
                    handleUserSignup()
                  }}
                  disabled={credentials.passwordConfirm === '' || credentials.password === '' || loading}
                  className='btn mt-4 w-full rounded-full bg-primary text-white disabled:opacity-50'
                >
                  {loading ? <Puff color='#fff' width='20px' height='20px' /> : 'Signup'}
                </button>
              </div>
            </>
          )}
          {/* {error !== null && <p className='mt-4 text-center text-sm text-red-600'>{error.data.message}</p>} */}
        </form>
      </div>
    </>
  )
}

export default Signup

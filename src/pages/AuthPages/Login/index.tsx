import LoginForm from 'containers/Forms/Login'

const Login = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-gradient-to-b from-primary to-secondary'>
      <div className='max-w-md rounded-lg bg-white bg-opacity-40 px-8 py-6 shadow-md backdrop-blur-sm'>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login

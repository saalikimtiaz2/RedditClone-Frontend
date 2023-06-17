import SignupForm from 'containers/Forms/Signup'

const Signup = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-gradient-to-b from-primary to-secondary'>
      <div className='max-w-md rounded-lg bg-white bg-opacity-40 px-8 py-6 shadow-md backdrop-blur-sm'>
        <SignupForm />
      </div>
    </div>
  )
}

export default Signup

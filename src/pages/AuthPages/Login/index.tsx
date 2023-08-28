import Layout from 'components/Layout'
import LoginForm from 'containers/Forms/Login'

const Login = () => {
  return (
    <Layout closedSidebar isAuthPage>
      <div className='min-h-screen'>
        <div className='grid h-screen grid-cols-12 gap-4 bg-white dark:bg-black'>
          <div className='h-full bg-primary p-4 xs:col-span-1 md:col-span-1' />
          <div className='flex items-center  xs:col-span-12 md:col-span-4'>
            <LoginForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login

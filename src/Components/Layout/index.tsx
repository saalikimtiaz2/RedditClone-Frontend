import Header from '@/components/Navigation/Header'
import Sidebar from '@/components/Navigation/Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className='flex'>
        <Sidebar />
        <div className='bg-grey-300 z-0 dark:bg-black'>{children}</div>
      </main>
    </>
  )
}

export default Layout

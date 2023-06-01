import Header from 'src/components/Navigation/Header'
import Sidebar from 'src/components/Navigation/Sidebar'

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

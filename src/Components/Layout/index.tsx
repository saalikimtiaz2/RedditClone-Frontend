import Header from 'src/Components/Navigation/Header'
import Sidebar from 'src/Components/Navigation/Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className='flex'>
        <Sidebar />
        <div className='grow'>{children}</div>
      </main>
    </>
  )
}

export default Layout

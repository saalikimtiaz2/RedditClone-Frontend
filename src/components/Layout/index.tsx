import Header from 'components/Navigation/Header'
import Sidebar from 'components/Navigation/Sidebar'
import { FC } from 'react'

type LayoutProps = {
  closedSidebar?: boolean
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ closedSidebar, children }) => {
  return (
    <>
      <Header showDD={closedSidebar} />
      <main className={`${!closedSidebar && 'lg:flex'}`}>
        {!closedSidebar && <Sidebar />}
        <div className='bg-grey-300 z-50 dark:bg-black'>{children}</div>
      </main>
    </>
  )
}

export default Layout

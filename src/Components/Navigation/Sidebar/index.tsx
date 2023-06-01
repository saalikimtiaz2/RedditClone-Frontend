import Menu from './Menu'

function Sidebar() {
  return (
    <div
      className={`w-[270px] border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 xs:hidden lg:inline`}
    >
      <div className='sticky top-14'>
        <Menu />
      </div>
    </div>
  )
}

export default Sidebar

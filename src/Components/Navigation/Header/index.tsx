import { Menu } from '@headlessui/react'
import { BsChevronDown, BsFillArrowUpRightCircleFill, BsQrCodeScan, BsReddit, BsSearch } from 'react-icons/bs'
import ThemeSwitcher from 'src/Components/ThemeSwitcher'
import { colors } from 'src/styles/colors'

function Header() {
  return (
    <nav
      className={`sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white py-1 dark:border-gray-700 dark:bg-gray-800 xs:gap-x-2 xs:px-2 lg:gap-x-6 lg:px-6`}
    >
      <button className='flex items-center gap-x-2 text-3xl'>
        <BsReddit color={colors.primary} />
        <span className='text-lg xs:hidden lg:inline'>reddit</span>
      </button>

      <div className='xs:inline md:hidden'>
        <button className='btn btn-sm'>
          <BsFillArrowUpRightCircleFill /> <BsChevronDown />
        </button>
        <Menu>
          <Menu.Button>More</Menu.Button>
          <Menu.Items>
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && 'bg-blue-500'}`} href='/account-settings'>
                  Documentation
                </a>
              )}
            </Menu.Item>
            <Menu.Item disabled>
              <span className='opacity-75'>Invite a friend (coming soon!)</span>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>

      <div
        className={`flex items-center overflow-hidden rounded-full border border-gray-500 dark:bg-gray-700 dark:hover:bg-gray-800 xs:pl-2 md:grow lg:pl-4 `}
      >
        <BsSearch />
        <input type='text' className='grow bg-transparent py-2 outline-none xs:px-2 xs:text-xs lg:px-4 lg:text-base' />
      </div>

      <div className='items-center gap-x-4 xs:hidden md:flex'>
        <button className='btn btn-gray rounded-full'>
          <BsQrCodeScan /> Get The App
        </button>
        <button className='btn btn-primary rounded-full'>Login</button>
      </div>
      {/* <button className='btn btn-sm rounded-lg border border-gray-400'>
        <AiOutlineUser />
        <BsChevronDown />
      </button> */}
      <ThemeSwitcher />
    </nav>
  )
}

export default Header

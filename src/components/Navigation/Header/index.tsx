import { Menu, Transition } from '@headlessui/react'
import DialogBox from 'components/DialogBox'
import { Feeds, Topics, navList } from 'components/Navigation/Navlinks'
import ThemeSwitcher from 'components/ThemeSwitcher'
import LoginForm from 'containers/Forms/Login'
import SignupForm from 'containers/Forms/Signup'
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector'
import { feedsInterface, topicsInterface } from 'interfaces/menuInterfaces'
import { Fragment, useEffect, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsChevronDown, BsFillArrowUpRightCircleFill, BsQrCodeScan, BsReddit, BsSearch } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { closeLoginModal, openLoginModal } from 'redux/reducers/loginModalSlice'
import { colors } from 'styles/colors'

function Header() {
  const { isLoginModalOpen, isSignupModal } = useAppSelector(state => state.loginModalSlice)
  const dispatch = useAppDispatch()

  const [isQrDialogOpen, setIsQrDialogOpen] = useState<boolean>(false)
  const [isSignup, setIsSignup] = useState<boolean>(false)

  const authModalOpen = () => {
    dispatch(openLoginModal())
  }

  const authModalClose = () => {
    dispatch(closeLoginModal())
  }

  const toggleForm = () => {
    setIsSignup(prevState => !prevState)
  }
  const toggleQrOpen = () => {
    setIsQrDialogOpen(prevState => !prevState)
  }

  useEffect(() => {
    if (!isLoginModalOpen) {
      setIsSignup(false)
    }
    if (isSignupModal) {
      setIsSignup(true)
    }
  }, [isLoginModalOpen, isSignupModal])

  return (
    <>
      <DialogBox isOpen={isLoginModalOpen} closeModal={authModalClose}>
        <img
          src='https://www.redditinc.com/assets/images/site/reddit-logo.png'
          className='absolute -right-10 -top-10 z-0 h-[350px] rotate-45 opacity-5'
        />
        {isSignup ? <SignupForm /> : <LoginForm />}
        <div className='mt-4 md:p-10'>
          <span className='text-sm text-gray-500'>{isSignup ? 'Already a redditor? ' : 'New to Reddit?'}</span>
          <button className='ml-1 text-sm text-secondary' onClick={toggleForm}>
            {isSignup ? 'Login' : 'Signup'}
          </button>
        </div>
      </DialogBox>
      <DialogBox isOpen={isQrDialogOpen} closeModal={toggleQrOpen}>
        <img
          src='https://www.redditinc.com/assets/images/site/reddit-logo.png'
          className='absolute -right-10 -top-10 z-0 h-[350px] rotate-45 opacity-5'
        />

        <h1 className='text-2xl font-medium'>Scan QR</h1>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='py-14'>
          <img src='/images/qrcode.png' className='mx-auto w-4/5' alt='' />
        </div>
      </DialogBox>

      <nav
        className={`sticky top-0 z-[150] flex w-full items-center justify-between border-b border-gray-200 bg-white py-1 dark:border-gray-700 dark:bg-gray-800 xs:gap-x-2 xs:px-2 lg:gap-x-6 lg:px-6`}
      >
        <button className='flex items-center gap-x-2 text-3xl'>
          <BsReddit color={colors.primary} />
          <span className='text-lg xs:hidden lg:inline'>reddit</span>
        </button>

        <div className='lg:hidden'>
          <Menu as='div' className='relative inline-block text-left'>
            <Menu.Button className='flex items-center gap-x-4 rounded-lg border border-gray-100 px-4 py-3 dark:border-gray-700'>
              <BsFillArrowUpRightCircleFill /> <BsChevronDown />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute left-0 top-6 mt-2 w-60 origin-top-left overflow-hidden border-x border-b border-gray-100 bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white'>
                <h6 className='px-8 pb-2 pt-6 dark:text-gray-500'>Feeds</h6>
                {Feeds.map((feed: feedsInterface) => (
                  <Menu.Item key={feed.label}>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-gray-200 dark:bg-gray-700'
                            : 'bg-white text-black dark:bg-gray-800 dark:text-white'
                        } group flex w-full items-center gap-x-4 px-8 py-2 text-sm`}
                      >
                        <span className='text-xl'>{feed.icon}</span> {feed.label}
                      </button>
                    )}
                  </Menu.Item>
                ))}
                <h6 className='px-8 pb-2 pt-6 dark:text-gray-500'>Topics</h6>
                {Topics.map((topic: topicsInterface) => (
                  <Menu.Item key={topic.label}>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-gray-200 dark:bg-gray-700'
                            : 'bg-white text-black dark:bg-gray-800 dark:text-white'
                        } group flex w-full items-center gap-x-4 px-8 py-2 text-sm`}
                      >
                        <span className='text-xl'>{topic.icon}</span> {topic.label}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div
          className={`flex items-center overflow-hidden rounded-full border border-gray-500 dark:bg-gray-700 dark:hover:border-gray-200 dark:hover:bg-gray-800 xs:pl-2 md:w-2/5  lg:pl-4 `}
        >
          <BsSearch />
          <input
            placeholder='Search Reddit'
            type='text'
            className='grow bg-transparent py-2 outline-none  xs:px-2 xs:text-xs lg:px-4 lg:text-base'
          />
        </div>

        <div className='flex items-center gap-x-4'>
          <div className='items-center gap-x-4 xs:hidden md:flex'>
            <button className='btn btn-gray rounded-full' onClick={toggleQrOpen}>
              <BsQrCodeScan /> Get The App
            </button>
            <button className='btn btn-primary rounded-full' onClick={authModalOpen}>
              Login
            </button>
          </div>
          {/* <button className='btn btn-sm rounded-lg border border-gray-400'>
        <AiOutlineUser />
        <BsChevronDown />
      </button> */}
          <ThemeSwitcher />
          <div className='relative'>
            <Menu as='div' className='relative inline-block text-left'>
              <Menu.Button className='flex items-center gap-x-4 rounded-lg border border-gray-100 px-4 py-3 dark:border-gray-700'>
                <AiOutlineUser />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 top-6 z-50 mt-2 w-56 origin-top-right overflow-hidden border-x border-b border-gray-100 bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white'>
                  {navList.map((item: feedsInterface) => (
                    <Menu.Item key={item.label}>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'bg-gray-200 dark:bg-gray-700'
                              : 'bg-white text-black dark:bg-gray-800 dark:text-white'
                          } group flex w-full items-center gap-x-4 px-8 py-2 text-sm`}
                        >
                          <span className='whitespace-nowrap text-xl'>{item.icon}</span> {item.label}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                  <div className='mx-6 border-b border-gray-200 dark:border-gray-600' />
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-gray-200 dark:bg-gray-700'
                            : 'bg-white text-black dark:bg-gray-800 dark:text-white'
                        } group flex w-full items-center gap-x-4 px-8 py-2 text-sm`}
                        onClick={authModalOpen}
                      >
                        <FiLogOut className='3xl' />
                        Login/Signup
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header

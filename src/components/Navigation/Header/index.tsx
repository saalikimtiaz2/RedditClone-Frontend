import DialogBox from 'components/DialogBox'
import ThemeSwitcher from 'components/ThemeSwitcher'
import LoginForm from 'containers/Forms/Login'
import SignupForm from 'containers/Forms/Signup'
import { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsChevronDown, BsFillArrowUpRightCircleFill, BsQrCodeScan, BsReddit, BsSearch } from 'react-icons/bs'
import { colors } from 'styles/colors'

function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [isSignup, setIsSignup] = useState<boolean>(false)

  const toggleModal = () => {
    setIsDialogOpen(prevState => !prevState)
    setIsSignup(false)
  }
  const toggleForm = () => {
    setIsSignup(prevState => !prevState)
  }

  return (
    <>
      <DialogBox isOpen={isDialogOpen} closeModal={toggleModal}>
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

      <nav
        className={`sticky top-0 z-[150] flex w-full items-center justify-between border-b border-gray-200 bg-white py-1 dark:border-gray-700 dark:bg-gray-800 xs:gap-x-2 xs:px-2 lg:gap-x-6 lg:px-6`}
      >
        <button className='flex items-center gap-x-2 text-3xl'>
          <BsReddit color={colors.primary} />
          <span className='text-lg xs:hidden lg:inline'>reddit</span>
        </button>

        <div className='xs:inline md:hidden'>
          <button className='btn btn-sm'>
            <BsFillArrowUpRightCircleFill /> <BsChevronDown />
          </button>
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
            <button className='btn btn-gray rounded-full'>
              <BsQrCodeScan /> Get The App
            </button>
            <button className='btn btn-primary rounded-full' onClick={toggleModal}>
              Login
            </button>
          </div>
          {/* <button className='btn btn-sm rounded-lg border border-gray-400'>
        <AiOutlineUser />
        <BsChevronDown />
      </button> */}
          <ThemeSwitcher />
          <button className='btn-sm rounded-lg border border-gray-400 xs:inline md:hidden' onClick={toggleModal}>
            <AiOutlineUser />
          </button>
        </div>
      </nav>
    </>
  )
}

export default Header

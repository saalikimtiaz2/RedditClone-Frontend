import { openSignupModal } from 'redux/reducers/loginModalSlice'
import { useAppDispatch } from 'redux/store'
import Menu from './Menu'

function Sidebar() {
  const dispatch = useAppDispatch()
  return (
    <div
      className={`sidebar w-[270px] shrink-0 border-r border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800  xs:hidden lg:inline`}
    >
      <div className='sticky top-14'>
        <Menu />
        <div className='px-8 py-4'>
          <p className='border-t border-gray-200 py-4 text-sm dark:border-black'>
            Create an account to follow your favorite communities and start taking part in conversations.
          </p>
          <button
            className='btn btn-primary w-full rounded-full'
            onClick={() => {
              dispatch(openSignupModal())
            }}
          >
            Join Reddit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

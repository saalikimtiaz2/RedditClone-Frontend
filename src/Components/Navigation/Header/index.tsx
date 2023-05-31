import { AiOutlineUser } from 'react-icons/ai'
import { BsQrCodeScan, BsReddit, BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { changeThemeMode } from 'src/redux/reducers/themeSlice'
import { RootState } from 'src/redux/store'
import { colors } from 'src/styles/colors'

function Header() {
  const { dark } = useSelector((state: RootState) => state.themeSlice)
  const dispatch = useDispatch()
  return (
    <nav
      className={`sticky top-0 z-50 flex w-full justify-between border-b border-gray-500 py-1 xs:gap-x-2 xs:px-2 lg:gap-x-6 lg:px-6 ${
        dark && 'dark'
      }`}
    >
      <button className='flex items-center gap-x-2 text-3xl'>
        <BsReddit color={colors.primary} />
        <span className='text-lg xs:hidden lg:inline'>reddit</span>
      </button>

      <div
        className={`flex items-center overflow-hidden rounded-full border border-gray-200 xs:pl-2 lg:grow lg:pl-4 ${
          dark ? 'bg-gray-700 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        <BsSearch />
        <input type='text' className='grow bg-transparent py-2 outline-none xs:px-2 xs:text-xs lg:px-4 lg:text-base' />
      </div>

      <div className='items-center gap-x-4 xs:hidden lg:flex'>
        <button className='btn btn-gray rounded-full'>
          <BsQrCodeScan /> Get The App
        </button>
        <button className='btn btn-primary rounded-full'>Login</button>
      </div>
      <button onClick={() => dispatch(changeThemeMode())}>
        <AiOutlineUser />
      </button>
    </nav>
  )
}

export default Header

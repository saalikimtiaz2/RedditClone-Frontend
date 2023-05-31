import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'

function Sidebar() {
  const { dark } = useSelector((state: RootState) => state.themeSlice)

  return <div className={`w-[270px] xs:hidden lg:inline ${dark ? 'dark' : 'light'}`}>Sidebar</div>
}

export default Sidebar

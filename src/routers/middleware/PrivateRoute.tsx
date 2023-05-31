import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { RootState } from 'src/redux/store'

export { PrivateRoute }

function PrivateRoute() {
  const { isAuth } = useSelector((state: RootState) => state.authSlice)

  if (!isAuth) {
    return <Navigate to='/login' replace />
  }
  return <Outlet />
}
export default PrivateRoute

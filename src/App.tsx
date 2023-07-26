import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Router from './routers'

function App() {
  return (
    <>
      <ToastContainer position='bottom-center' pauseOnHover theme='colored' />
      <Router />
    </>
  )
}

export default App

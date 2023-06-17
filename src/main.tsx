import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import store from 'redux/store'
import 'styles/global.scss'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from 'src/redux/store'
import App from './App.tsx'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

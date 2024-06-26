import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserContextProvider } from './context/user/userContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
)

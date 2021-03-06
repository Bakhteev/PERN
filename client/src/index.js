import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UserStore from './store/User.store'
import DeviceStore from './store/Device.store'

export const Context = createContext(null)

console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        device: new DeviceStore()
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavigationBar from './components/NavBar'

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App


import './index.css'
import './App.scss'
import MainRoutes from './Routes'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </>
  )
}

export default App

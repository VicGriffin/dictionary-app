import { useState } from 'react'
import './App.css'
import { Route ,Router,Routes,BrowserRouter} from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Translation from './pages/translation/Translation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/translation' element={<Translation/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ExportPage from './pages/ExportPage'
import TernaryPage from './pages/TernaryPage'
import PropPage from './pages/PropPage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/export' element={<ExportPage />} />
        <Route path='/ternary' element={<TernaryPage />} />
        <Route path='/props' element={<PropPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ExportPage from './pages/ExportPage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/export' element={<ExportPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

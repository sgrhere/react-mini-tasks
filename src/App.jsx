import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ExportPage from './pages/ExportPage'
import TernaryPage from './pages/TernaryPage'
import PropPage from './pages/PropPage'
import SkeletonLoaderPage from './pages/SkeletonLoaderPage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/export' element={<ExportPage />} />
        <Route path='/ternary' element={<TernaryPage />} />
        <Route path='/props' element={<PropPage />} />
        <Route path='/skeleton-profile' element={<SkeletonLoaderPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

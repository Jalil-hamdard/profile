import { Routes, Route } from 'react-router-dom'
import BairesHeader from './components/BairesHeader.jsx'
import BairesFooter from './components/BairesFooter'
import Landing from './pages/Landing'
import OurStory from './pages/OurStory'
import WorkPage from './pages/WorkPage'

function App() {
  return (
    <>
      <BairesHeader />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<OurStory />} />
        </Routes>
      </main>
      <BairesFooter />
    </>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import WhoWeAre from './components/WhoWeAre'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<WhoWeAre />} />
      </Routes>
    </Layout>
  )
  
}


export default App

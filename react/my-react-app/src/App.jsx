
import './App.css'
import Heder from './components/Heder'
import Main from './components/Main'
import Video from './components/Video'
import Products from './components/Products'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (

    <Router>
      <Heder />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/video" element={<Video />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>

  )
}

export default App

import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HamburgerMenu from "./components/HamburgerMenu"
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import NotFound from "./components/NotFound"

function App() {
   
  return (
    <>
    <Router>
      <HamburgerMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />  
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Tour from "./pages/tour"
import Package from "./pages/package"
import Contact from "./pages/contact"
import Header from "./components/header"

export default function App() {

  return (
    <Router>
      <Header/>  

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/tour" element={<Tour/>}/>
        <Route path="/packages" element={<Package/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <Router/>
    </Router>
  )
}
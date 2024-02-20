import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
        <Navbar/>
        <Routes>
        </Routes>
      </div>
    </Router>
  )
}

export default App

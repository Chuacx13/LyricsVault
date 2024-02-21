import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './utils/auth';

function App() {

  return (
    <Router>
      <AuthContextProvider>
        <div className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </div>
      </AuthContextProvider>
    </Router>
  )
}

export default App

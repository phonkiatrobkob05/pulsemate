import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/Signup';
import PulsemateBP from './pages/PulsemateBP';
import History from './pages/History';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';
import Dashboard from './pages/dashboard';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/History" element={<History />} />
          <Route path="/PulsemateBp" element={<PulsemateBP/>}/>
          <Route path="/Sidebar" element={<Sidebar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

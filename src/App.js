import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import UserProfile from './components/UserProfile';
import Navbar from './components/Nav.js';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/userprofile" element={<UserProfile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Header from './compontents/Header';
import Home from './compontents/Home';
import About from './compontents/About';
import FollowUs from './compontents/FollowUs';

function App() {

  return (
    <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/followus" element={<FollowUs/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default App

import './App.css';
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import Projects from './component/Projects'
import Blogs from './component/Blogs'
import PageNotFound from './component/PageNotFound'
import Footer from './component/Footer';
import {  useEffect, useState } from 'react';

function App() {
  const [bg,setBg]=useState(()=>localStorage.getItem("bg") || "white");
  const [color,setColor]=useState(()=>localStorage.getItem("color") || "black");

  useEffect(()=>{
    localStorage.setItem("bg",bg);
    localStorage.setItem("color",color);
  },[bg,color])
  
  return (
    <div className="App" style={{backgroundColor:bg,color:color}}>
      <Navbar setBg={setBg} bg={bg} color={color} setColor={setColor}/>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/projects" element={<Projects bg={bg}/>} />
        <Route path="/blogs" element={<Blogs bg={bg} />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;

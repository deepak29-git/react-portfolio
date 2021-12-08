import './App.css';
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import Projects from './component/Projects'
import Blogs from './component/Blogs'
import PageNotFound from './component/PageNotFound'
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;

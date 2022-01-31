import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Home } from './components/Pages/Home';
import About from './components/Pages/About';
import Blogs from './components/Pages/Blogs';
import BlogContent from './components/BlogContent';
import Newzealand from './components/Newzealand';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blogcontent" element={<BlogContent />} />
          <Route path="/moments/*" element={<Newzealand />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

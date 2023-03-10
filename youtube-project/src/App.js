
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Video from './components/Video';
import VideoIndex from './components/VideoIndex';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/videos" element={<VideoIndex/>} />
          <Route path="/videos/:id" element={<Video/>} />
        </Routes>
      </Router>
    </div>
  );
  }
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Video from './components/Video/Video';
import VideoIndex from './components/VideoIndex/VideoIndex';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './index.css';

export default function App() {
  const [videos, setVideos] = useState([]);

  return (
    <div className="wrapper">
      <Router>
        <Nav videos={videos} setVideos={setVideos} />
        <Routes>
          <Route path="/" />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<VideoIndex videos={videos} />} />
          <Route path="/videos/:id" element={<Video />} />
        </Routes>
      </Router>
    </div>
  );
}

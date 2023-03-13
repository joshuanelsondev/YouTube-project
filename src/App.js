import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Video from './components/Video';
import VideoIndex from './components/VideoIndex';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";


export default function App() {

  const [videos, setVideos ] = useState([])




  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home videos={videos} setVideos={setVideos} />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<VideoIndex videos={videos} />} />
          <Route path="/videos/:id" element={<Video />} />
        </Routes>
      </Router>
    </div>
  );
}

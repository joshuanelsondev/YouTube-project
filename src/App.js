/* Component Imports */
import Nav from './components/Nav/Nav';
import SearchBar from './components/Nav/SearchBar/SearchBar';
import About from './components/About/About';
import Video from './components/Video/Video';
import VideoIndex from './components/VideoIndex/VideoIndex';
import Home from './components/Home/Home';
/* React, ReactRouter and Style Imports */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './index.css';

export default function App() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);

  return (
    <div className="wrapper">
      <Router>
        <Nav error={error} setError={setError}>
          <SearchBar setError={setError} setVideos={setVideos} />
        </Nav>
        <Routes>
          <Route path="/" element={<Home error={error} />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<VideoIndex videos={videos} />} />
          <Route path="/videos/:id" element={<Video allComments={allComments} setAllComments={setAllComments}/>} />
        </Routes>
      </Router>
    </div>
  );
}

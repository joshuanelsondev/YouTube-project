import './Home.css';
// import { useState } from "react";

export default function Home() {
  // const [error, setError ] = useState(false)
  // const [videos, setVideos ] = useState([])

  // function handleSearch(event){};

  return (
    <>
      <main>
        <div className="search-bar">
          <input type="text" id="searchInput" />
          <input type="submit" />
        </div>
        <div>{/* Initial thumbnails/map over api data will go here */}</div>
      </main>
    </>
  );
}

import './Home.css';
import { useState } from "react";
import { getVideos } from '../../api/fetch';
import {v1 as generateUniqueID} from "uuid";

export default function Home() {
  // const [error, setError ] = useState(false)
  // const [videos, setVideos ] = useState([])

  const [userSearchInput, setUserSearchInput] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  function handleTextInput(event) {
    setUserSearchInput(event.target.value)
  }

  function handleSearch(event){
    event.preventDefault();
    const duplicateSearch = searchHistory.find(input => (input.search).toLowerCase() === userSearchInput.toLowerCase())
    if (!duplicateSearch) {
      setSearchHistory([...searchHistory, {search: userSearchInput, id: generateUniqueID()}]);
    }

  };

  return (
    <>
      <main>
        <div className="search-bar">
          <input onChange={handleTextInput} type="text" id="searchInput" />
          <input onClick={handleSearch} type="submit" />
        </div>
        <div>{/* Initial thumbnails/map over api data will go here */}</div>
      </main>
    </>
  );
}

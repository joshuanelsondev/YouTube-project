import './Home.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVideos } from '../../api/fetch';
import {v1 as generateUniqueID} from "uuid";
import VideoIndex from "../VideoIndex";
import testApi from "../../assets/testApi.json";


export default function Home() {
  // const [error, setError ] = useState(false)
  const [videos, setVideos ] = useState([])
  const navigate = useNavigate();

  const [userSearchInput, setUserSearchInput] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [videoQuantity, setVideoQuantity] = useState(10);

  function handleTextInput(event) {
    setUserSearchInput(event.target.value)
  }

  function handleSearch(event){
    event.preventDefault();
    //For possible future use of displaying search history
    const duplicateSearch = searchHistory.find(input => (input.search).toLowerCase() === userSearchInput.toLowerCase())
    if (!duplicateSearch) {
      setSearchHistory([...searchHistory, {search: userSearchInput, id: generateUniqueID()}]);
    }

    //Reset the state
    setUserSearchInput("")
    
    //Make fetch call
    getVideos(testApi, videoQuantity)
    .then(response => {
      
      setVideos(response.items);
      navigate(`/videos`, { state: { videos } });

      }).catch(error => {
        console.log(error)
      })
  };

        console.log(videos)
  
  
  return (
    <>
      <main>
        <form onSubmit={handleSearch} className="search-bar">
          <input onChange={handleTextInput} value={userSearchInput} type="text" id="searchInput" />
          <input type="submit" />
        </form>
        <div>{/* Initial thumbnails/map over api data will go here */}</div>
        {/* <VideoIndex videos={videos} /> */}
      </main>
    </>
  );
}

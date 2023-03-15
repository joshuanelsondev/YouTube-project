import './SearchBar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getVideos } from '../../../api/fetch';
import { v1 as generateUniqueID } from 'uuid';
<<<<<<< HEAD
=======
// import VideoIndex from '../../VideoIndex/VideoIndex';   
// import testApi from '../../../api/testApi.json';
>>>>>>> 6c8725694ea51c13736d92947634ff9457cf6be9
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../../features/VideosSlice/VieoSlice';

export default function SearchBar({ setError }) {
  const navigate = useNavigate();
  const [userSearchInput, setUserSearchInput] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [videoQuantity, setVideoQuantity] = useState(10);
  const dispatch = useDispatch();

  function handleTextInput(event) {
    setUserSearchInput(event.target.value);
  }
  function handleSearch(event) {
    event.preventDefault();
    if (userSearchInput) {
      const duplicateSearch = searchHistory.find(
        (input) => input.search.toLowerCase() === userSearchInput.toLowerCase()
      );
      if (!duplicateSearch) {
        setSearchHistory([
          ...searchHistory,
          { search: userSearchInput, id: generateUniqueID() },
        ]);
      }

      //Reset the state
      setUserSearchInput('');

      setVideoQuantity(10);
      //Make fetch call
      getVideos(userSearchInput, videoQuantity) //Use testApi when trying to limit the number of calls to the api, otherwise use useSearchInput
        .then((response) => {
          if (response.error) {
            setError(true);
          } else {
            dispatch(setSearch(response.items));
            navigate(`/videos`);
          }
        });
    }
  }

  return (
    <>
      <form onSubmit={handleSearch} className="search-bar">
        <input
          onChange={handleTextInput}
          value={userSearchInput}
          type="text"
          id="searchInput"
          placeholder="Search"
        />
        <button type="submit">
          <AiOutlineSearch className="search-icon" />
        </button>
      </form>
    </>
  );
}

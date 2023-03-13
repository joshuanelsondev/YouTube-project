import testApi from "./testApi.json";
const BASE_URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=";
const API_KEY = process.env.REACT_APP_API_KEY;



// For a regular search use BASE_URL + 'part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]'

// When searching for videos use the <snippet.channelId> after 'relatedToVideoId=' from the JSON: BASE_URL + 'part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&key=[YOUR_API_KEY]'

export function getVideos(keyword, videoQuantity) {
    // return fetch(`${BASE_URL}${videoQuantity}&q=${keyword}&key=${API_KEY}`).then(response => response.json());

   
   
    // Temporary mock fetch used when limiting the number of api calls
    return fetch(keyword).then(response => keyword);
}


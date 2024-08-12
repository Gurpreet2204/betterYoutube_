import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "c54350f9ffmsh3dc0f11927de260p16599ejsn5e94816c2de5", 
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url)=>{
    const {data}= await axios.get(`${BASE_URL}/${url}`, options)
    return data
}
 
 
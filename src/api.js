import axios from "axios";
export const getShow = async (query) => {
    console.log("api call");
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=` + query);
    console.log(response);
    return response.data.map((d) => d.show);
};

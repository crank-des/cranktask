import axios from "axios";
import { Shows } from "./Models/Shows";

type ShowObj = {
  show: Shows;
};

export const getShow = async (query: string) => {
  console.log("api call");
  const response = await axios.get<ShowObj[]>(
    `https://api.tvmaze.com/search/shows?q=` + query
  );
  console.log(response);
  return response.data.map((d) => d.show);
};

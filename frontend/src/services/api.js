import axios from "axios";

const baseAPI = (baseURL) => {
  //função que recebe a base URL
  const api = axios.create({
    baseURL,
  });

  return api;
};
export default baseAPI;

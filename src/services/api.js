import axios from "axios";

const api = axios.create({
  baseURL: "https://be-the-hero-backend-alpha.herokuapp.com/"
});

export default api;

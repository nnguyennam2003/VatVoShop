import axios from "axios";

const apiRenderServer = process.env.REACT_APP_API_URL || "http://localhost:8001/api";
const instance = axios.create({
  baseURL: apiRenderServer,
});

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;

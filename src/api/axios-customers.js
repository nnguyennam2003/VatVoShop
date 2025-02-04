import axios from "axios";

// const apiLocal = "http://localhost:8000/" //Thay vào dòng 6 khi api render bị sập hoặc đang chạy với môi trường start-dev
const apiRenderServer = process.env.REACT_APP_API_URL || "http://localhost:8001/api";
const instance = axios.create({
  baseURL: apiRenderServer,
});

instance.interceptors.response.use(
  function (response) {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    return response.data;
  },
  function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    return Promise.reject(error);
  }
);

export default instance;

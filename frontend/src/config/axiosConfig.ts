import axios from "axios";
import { REACT_APP_API_URL } from "./Contant";
// let token = localStorage.getItem("ACCESS_TOKEN") ?? "";
// token = token ? token.replace(/"/g, "") : "";
const request = axios.create({
  baseURL: REACT_APP_API_URL,
  timeout: 10000,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export const FETCHDATA = async (
  method: "get" | "post" | "patch" | "put" | "delete",
  path: string,
  options: object = {}
) => {
  try {
    const response = await request[method](path, options);
    return { ...response.data, statusCode: response.status };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
   
    if (axios.isAxiosError(error) && error.response) {
      // Handle token expiration specifically
      if (error.response.status === 401) {
        try {
          const refreshToken = localStorage.getItem("REFRESH_TOKEN");
          if (!refreshToken) {
            
            localStorage.clear();
            window.location.href = "/login";
          }
          const refreshResponse = await axios
            .create({
              baseURL: REACT_APP_API_URL
            })
            .post(`${REACT_APP_API_URL}auth/refresh-token`,{
              refreshToken,
            });
           
          const newToken = refreshResponse.data.access_token;
          localStorage.setItem("ACCESS_TOKEN", newToken);
          localStorage.setItem("REFRESH_TOKEN", refreshResponse.data.refresh_token);

          // Retry the original request with the new token
          options = {
            ...options,
            headers: {
              ...options,
              Authorization: `Bearer ${newToken}`,
            },
          };
          const retryResponse = await request[method](path, options);
          return { ...retryResponse.data, statusCode: retryResponse.status };
        } catch (refreshError) {
          if (axios.isAxiosError(refreshError) && refreshError.response) {
            return {
              ...refreshError.response.data,
              statusCode: refreshError.response.status,
            };
          }
          localStorage.clear();
          window.location.href = "/login";
        }
      }

      // General Axios error handling
      return { ...error.response.data, statusCode: error.response.status };
    }

    // Handle non-Axios errors
    return {
      status: false,
      statusCode: 500,
      data: null,
      message: "Hệ thống đang trong bảo trì! Vui lòng thử lại sau.",
    };
  }
};
export const POSTASYNC = async (path: string, options = {}, token_: string) => {
  try {
    const response = await axios
      .create({
        baseURL: REACT_APP_API_URL,
        headers: {
          Authorization: `Bearer ${token_}`,
        },
      })
      .post(path, options);
    return { ...response.data, statusCode: response.status };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { ...error.response.data, statusCode: error.response.status };
    }
    return {
      status: false,
      statusCode: 500,
      data: null,
      message: "Hệ thống bị lỗi hoặc đang trong bảo trì! Vui lòng thử lại",
    };
  }
};
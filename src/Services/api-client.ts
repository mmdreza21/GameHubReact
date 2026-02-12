import axios, { type AxiosRequestConfig } from "axios";

export const BASEURL = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: `${BASEURL}/api`,
});

class APIClient<T> {
  private endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(params?: AxiosRequestConfig) {
    console.log(this.endpoint);

    return axiosInstance.get<T>(this.endpoint, params).then((res) => res.data);
  }
}

export default APIClient;

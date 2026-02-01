import axios from "axios";

export const BASEURL = "http://localhost:8080";

export default axios.create({
  baseURL: `${BASEURL}/api`,
  timeout: 1000,
});

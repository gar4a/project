import Axios from "axios";
export const API = "http://localhost:3000/api";
export default Axios.create({ baseURL: API, timeout: 100000 });

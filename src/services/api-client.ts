import axios from "axios";
// with this config key will be included on every req that is sent to backend
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY
  },
});

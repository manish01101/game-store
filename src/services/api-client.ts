import axios from "axios";
// with this config key will be included on every req that is sent to backend
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c4b68a155bdf46e69b91b4fe5d704881'
    }
})
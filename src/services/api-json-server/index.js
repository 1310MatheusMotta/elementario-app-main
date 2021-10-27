import axios from "axios";

const api = axios.create({
    baseURL: "https://antoniosalainfo.github.io/",
});

export default api;
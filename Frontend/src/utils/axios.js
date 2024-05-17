import axios from "axios";

const token = window.localStorage.getItem("token");

const instance = axios.create({
    baseURL: "http://localhost:8080/admin",
    // withCredentials: true,
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
})

export default instance;
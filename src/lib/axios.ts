import axios from "axios";

const apiUrl = "https://sifat.com.br";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
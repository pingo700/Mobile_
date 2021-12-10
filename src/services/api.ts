import axios from "axios";

const api = axios.create({
  baseURL: "https://forunsrc.herokuapp.com//api",
  headers: {
    'Content-Type': 'application/json',
  }
})

export default api;
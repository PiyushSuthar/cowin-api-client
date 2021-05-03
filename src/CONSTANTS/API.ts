import axios from "axios"

export const API_URL = "https://cdn-api.co-vin.in/api"

export const API = axios.create({
  baseURL: API_URL
})
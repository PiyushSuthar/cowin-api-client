import axios from "axios"

export const API_URL = "https://cdn-api.co-vin.in/api"

export const API = axios.create({
  baseURL: API_URL,
  headers: {
    // To make it work in React Native :)
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'
  }
})
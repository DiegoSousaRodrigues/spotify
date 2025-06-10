import axios from 'axios'

export const spotify = axios.create({
  baseURL: 'https://accounts.spotify.com', 
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

import axios from 'axios'

export async function GetTopTracks(token: string) {
  if (token) {
    return await axios.get(
      'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  }
}

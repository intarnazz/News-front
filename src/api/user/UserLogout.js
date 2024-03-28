const API_URL = import.meta.env.VITE_API_URL

export async function UserLogout(token) {
  return await fetch(`${API_URL}logout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => response.json())
    .then((json) => {
      return json
    })
    .catch((e) => {
      throw e
    })
}

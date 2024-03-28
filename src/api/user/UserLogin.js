const API_URL = import.meta.env.VITE_API_URL

export async function UserLogin(email, password) {
  return await fetch(`${API_URL}authorization`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then((response) => response.json())
    .then((json) => {
      return json
    })
    .catch((e) => {
      throw e
    })
}

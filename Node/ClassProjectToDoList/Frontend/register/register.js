register = () => {
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  let rPassword = document.getElementById('rPassword').value

  console.log(email, password, rPassword)

  if (password != rPassword) return 'Passwords do not match'

  let body = {
    email,
    password
  }

  fetch('http://localhost:3000/v1/user/register', {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(body)
  }).then((response) => {
    if (!response.ok) {
      throw response
    }
    return response.json()
  }).then((response) => {
    window.location.href = '../login/index.html'
    console.log(response)
  }).catch(async (e) => {
    console.log(await e.json())
  })
}
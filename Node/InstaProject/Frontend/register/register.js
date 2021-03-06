register = () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let username = document.getElementById('userName').value
  
    let body = {
      email,
      password,
      username
    }
  
    fetch('http://localhost:3000/v2/user/register', {
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
      window.location.href = '../login'
      console.log(response)
    }).catch(async (e) => {
      console.log(await e.json())
    })
  }
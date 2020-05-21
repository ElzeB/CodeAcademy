login = () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
  
  
    let body = {
      email,
      password
    }
  
    fetch('http://localhost:3000/v2/user/login', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(body)
    }).then((response) => {
  
      if (!response.ok) {
        throw response
      }
      localStorage.setItem('x-auth-node', response.headers.get('x-auth-node'));
      return response.json()
    }).then((response) => {
      localStorage.setItem('appName-user', JSON.stringify(response));
      window.location.href = '../UserAccount'
  
    }).catch(async (e) => {
      console.log(await e.json())
    })
  }
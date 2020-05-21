Parse.initialize("myAppId");
Parse.serverURL = 'http://localhost:1337/parse'

login = async () => {
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value

  try {
    await Parse.User.logIn(email, password);
    window.location.href = '/parseFrontend'
  } catch (e) {
    alert(e)
  }
}
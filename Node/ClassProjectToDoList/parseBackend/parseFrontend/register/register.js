Parse.initialize("myAppId");
Parse.serverURL = 'http://localhost:1337/parse'

register = async () => {
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  let rPassword = document.getElementById('rPassword').value


  if (password != rPassword) return 'Passwords do not match'

  try {
    let user = new Parse.User();
    user.set("username", email);
    user.set("password", password);
    user.set("email", email);

    await user.save()
    window.location.href = '/login'
  } catch (e) {
    console.log(e)
  }
}
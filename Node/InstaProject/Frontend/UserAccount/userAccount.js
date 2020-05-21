let token;


document.addEventListener('DOMContentLoaded', function() {
    token = localStorage.getItem('x-auth-node')
    if (!token) {
      window.location.href = '/Frontend/login'
    } else {
      changeNavBarInfo()
      getPosts()
    }
  }, false);

changeProfilePicture = async (e) => {
e.preventDefault();
    if (document.getElementById('profilePicInput').files.length == 0) return
    let picture = document.getElementById('profilePicInput').files[0]
  
    let formData = new FormData();
    formData.append('profilePicture', picture)
    try {
      let response = await fetch('http://localhost:3000/v2/user/changeProfilePicture', {
        method: "POST",
        headers: {
          "x-auth-node": token
        },
        body: formData
      })
      if (!response.ok) throw response
      let user = await response.json()
      localStorage.setItem('appName-user', JSON.stringify(user))
      changeNavBarInfo()
    } catch (e) {
      console.log(e)
    }
  }

  changeNavBarInfo = () => {
    // let emailElement = document.getElementById('userEmail')
    let pictureElement = document.getElementById('userPicture')
  
    let userObject = JSON.parse(localStorage.getItem('appName-user'))
  
    // emailElement.innerHTML = userObject.email
    pictureElement.src = userObject.profilePicture ? userObject.profilePicture : 'https://pngimage.net/wp-content/uploads/2018/06/no-user-image-png-200x200.png'
  
  }

  logout = () => {
    fetch('http://localhost:3000/v2/user/logout', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "x-auth-node": token
      }
    }).then((response) => {
      if (!response.ok) {
        throw response
      }
      return response.json()
    }).then((response) => {
      localStorage.removeItem('x-auth-node')
      window.location.href = '../login'
  
    }).catch(async (e) => {
      console.log(await e.json())
    })
  }

  getPosts = async () => {
    try {
      let items = await fetch('http://localhost:3000/v2/getPosts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-node': token,
        }
      })
      if (!items.ok) throw items.json()
      items = await items.json()
      // await drawPost(items)
    } catch (e) {
      console.log(await e)
    }
  }

  createPost = async () => {
    let picture = document.getElementById('postPicInput').files[0];
    let post = document.getElementById('caption').value;
    if (!post) return;
    
    // let body = {
    //   Post
    // }

    let formData = new FormData();
    formData.append('postPicture', picture);
    formData.append('postCaption', post);
    console.log(formData);
    
    try {
      let response = await fetch('http://localhost:3000/v2/createPost', {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          'x-auth-node': token
        },
        body: formData
      });
      
      if (!response.ok) throw response.json();
      
      // $('#createPostModal').modal('hide')
      // getPosts();
      console.log(await response.json());
    } catch (e) {
      console.log(e);
    }
  }

  drawPost = (items) => {
    return new Promise((resolve) => {
      let postsContainer = document.getElementById('userAccountMainContainer');

      // postsContainer.innerHTML = '';
      for (let i = 0; i < items.length; i++) {
        
        let div = document.createElement('div');
        div.className = 'col-md-4';
        let image = document.createElement('img');
        image.src = `${items[i].image}`;

        // div.innerHTML = items.items[i].Post;
        // document.getElementById('postPost').addEventListener('click', () => {
        //   checkItem(div, items[i]._id)
        // })
        div.appendChild(image);
        postsContainer.appendChild(div);
      }
    })
  }
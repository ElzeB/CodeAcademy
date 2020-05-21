let token;
let itemsPerPage = 3;
let currentPage = 1;

document.addEventListener('DOMContentLoaded', function() {
  token = localStorage.getItem('x-auth-node')
  console.log(token)
  if (!token) {
    window.location.href = '/Frontend/login'
  } else {
    changeNavBarInfo()
    getToDoItems()
  }
}, false);

logout = () => {
  fetch('http://localhost:3000/v1/user/logout', {
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
    window.location.href = '/login'

  }).catch(async (e) => {
    console.log(await e.json())
  })
}

checkItem = async (el, id) => {
  if (el.classList.contains("checked")) {
    el.classList.remove('checked')
  } else {
    el.classList.add("checked");
  }
  try {
    let response = await fetch(`http://localhost:3000/v1/toggleItemChecked/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "x-auth-node": token
      }
    })
    if (!response.ok) throw response

  } catch (e) {
    console.log(e)
  }
}

getToDoItems = async () => {
  try {
    let items = await fetch(`http://localhost:3000/v1/getAllUserItem/${currentPage}/${itemsPerPage}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-node': token
      }
    })
    if (!items.ok) throw items.json()
    items = await items.json()
    await createPaginator(items.count)
    await drawItemsInList(items.items)
  } catch (e) {
    console.log(await e)
  }
}

createItem = async () => {

  let title = document.getElementById('title').value;
  if (!title) return;

  let body = {
    title
  }
  try {
    let response = await fetch('http://localhost:3000/v1/createToDoItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-node': token
      },
      body: JSON.stringify(body)
    })
    if (!response.ok) throw response.json();
    $('#createItemModal').modal('hide')
    getToDoItems();
    console.log(await response.json());
  } catch (e) {
    console.log(e)
  }
}

drawItemsInList = (items) => {
  return new Promise((resolve) => {
    let list = document.getElementById('itemsList')
    list.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
      let li = document.createElement("li");
      li.className = 'list-group-item d-flex justify-content-between align-items-center'
      if (items[i].checked) li.classList.add("checked");
      let div = document.createElement("div");
      div.className = 'innerLi'
      div.innerHTML = items[i].title
      div.addEventListener('click', () => {
        checkItem(li, items[i]._id)
      })
      li.appendChild(div)
      let span = document.createElement('span')
      span.className = 'badge'
      span.innerHTML = 'X'
      span.addEventListener('click', () => {
        deleteItem(items[i]._id)
      })
      li.appendChild(span)
      list.appendChild(li)
    }
  })
}

createPaginator = (count) => {
  return new Promise((resolve) => {
    let pagesCount = Math.ceil(count / itemsPerPage)
    let paginatorElement = document.getElementById('pagination')
    paginatorElement.innerHTML = ''

    for (let i = 0; i < pagesCount; i++) {
      let li = document.createElement("li");
      li.className = 'page-item'
      if (i + 1 == currentPage) li.className += ' active'
      let span = document.createElement('span')
      span.className = 'page-link'
      span.innerHTML = i + 1
      li.appendChild(span)

      li.addEventListener(('click'), () => {
        goToPage(i + 1)
      })

      paginatorElement.appendChild(li)

    }
    resolve()
  })
}

goToPage = (page) => {
  currentPage = page;
  getToDoItems()
}

deleteItem = async (id) => {

  try {
    let response = await fetch(`http://localhost:3000/v1/deleteSingleItem/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "x-auth-node": token
      }
    })
    if (!response.ok) throw response
    getToDoItems()
  } catch (e) {
    console.log(e)
  }
}

changeProfilePicture = async () => {
  if (document.getElementById('profilePicInput').files.length == 0) return
  let picture = document.getElementById('profilePicInput').files[0]

  let formData = new FormData();
  formData.append('profilePicture', picture)
  try {
    let response = await fetch('http://localhost:3000/v1/user/changeProfilePicture', {
      method: "POST",
      headers: {
        "x-auth-node": token
      },
      body: formData
    })
    if (!response.ok) throw response
    console.log(await response.json())
  } catch (e) {
    console.log(e)
  }
}

changeNavBarInfo = () => {
  let emailElement = document.getElementById('userEmail')
  let pictureElement = document.getElementById('userPicture')

  let userObject = JSON.parse(localStorage.getItem('appName-user'))

  emailElement.innerHTML = userObject.email
  pictureElement.src = userObject.profilePicture ? userObject.profilePicture : 'https://pngimage.net/wp-content/uploads/2018/06/no-user-image-png-200x200.png'

}
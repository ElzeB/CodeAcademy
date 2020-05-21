Parse.initialize("myAppId");
Parse.serverURL = 'http://localhost:1337/parse'

let token;
let itemsPerPage = 3;
let currentPage = 1;

let currentUser = Parse.User.current();

document.addEventListener('DOMContentLoaded', function() {



  if (!currentUser) {
    window.location.href = '/login'
  } else {
    changeNavBarInfo()
    getToDoItems()
  }
}, false);

logout = async () => {
  await Parse.User.logOut()
  window.location.href = '/login'

}

checkItem = async (el, item) => {
  if (el.classList.contains("checked")) {
    el.classList.remove('checked')
  } else {
    el.classList.add("checked");
  }
  try {
    item.set('checked', item.attributes.checked ? false : true)
    item.save()
  } catch (e) {
    console.log(e)
  }
}

getToDoItems = async () => {
  try {
    const ToDo = Parse.Object.extend("ToDo");
    const query = new Parse.Query(ToDo);
    query.withCount()
    query.limit(itemsPerPage);
    query.skip((currentPage - 1) * itemsPerPage);
    const results = await query.find();
    await createPaginator(results.count)
    await drawItemsInList(results.results)
  } catch (e) {
    console.log(await e)
  }
}

createItem = async () => {

  let title = document.getElementById('title').value;
  if (!title) return;


  try {
    const ToDo = Parse.Object.extend("ToDo");
    const toDo = new ToDo();

    toDo.set("title", title);
    toDo.setACL(new Parse.ACL(currentUser));

    await toDo.save()
    $('#createItemModal').modal('hide')
    getToDoItems();

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
      if (items[i].attributes.checked) li.classList.add("checked");
      let div = document.createElement("div");
      div.className = 'innerLi'
      div.innerHTML = items[i].attributes.title
      div.addEventListener('click', () => {
        checkItem(li, items[i])
      })
      li.appendChild(div)
      let span = document.createElement('span')
      span.className = 'badge'
      span.innerHTML = 'X'
      span.addEventListener('click', () => {
        deleteItem(items[i])
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

deleteItem = async (item) => {

  try {
    await item.destroy()
    getToDoItems()
  } catch (e) {
    console.log(e)
  }
}

changeProfilePicture = async () => {
  if (document.getElementById('profilePicInput').files.length == 0) return
  let picture = document.getElementById('profilePicInput').files[0]
  let parseFile = new Parse.File('profilePicture', picture);

  try {

    currentUser.set('profilePicture', parseFile);
    let savedUser = await currentUser.save()
    $('#userInfoModal').modal('hide')
    let pictureElement = document.getElementById('userPicture')
    pictureElement.src = savedUser.attributes.profilePicture._url
    console.log(savedUser)
  } catch (e) {
    console.log(e)
  }

}

changeNavBarInfo = () => {
  let emailElement = document.getElementById('userEmail')
  let pictureElement = document.getElementById('userPicture')


  emailElement.innerHTML = currentUser.attributes.username
  pictureElement.src = currentUser.attributes.profilePicture ? currentUser.attributes.profilePicture._url : 'https://pngimage.net/wp-content/uploads/2018/06/no-user-image-png-200x200.png'

}
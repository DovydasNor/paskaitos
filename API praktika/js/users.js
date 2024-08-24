import navigation from './navMenu.js'

async function init() {
  const mainUsers = document.querySelector('#content')
  const pageTitle = createPageTitle('Users')
  const usersList = await createUsersList()
  mainUsers.append(navigation(), pageTitle, usersList,)
}
init()

function createPageTitle(text){
  const element = document.createElement('h1')
  element.textContent = text
  element.classList.add('page-title')

  return element
}

async function createUsersList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts')
  const users = await res.json()
  console.log(users)

  const usersList = document.createElement('ul')
  usersList.classList.add('users-list')

  users.forEach(user => {
    const {id, name, username, posts} = user
    
    const userItem = document.createElement('li')
    userItem.classList.add('user-item')
    usersList.append(userItem)

    const nameLink = document.createElement('a')
    nameLink.classList.add('name-link')
    nameLink.href = `/user.html?user_id=${id}`
    nameLink.textContent = name

    userItem.append(`Username: ${username} User posts:(${posts.length}) - `, nameLink)
  });
  return usersList
}
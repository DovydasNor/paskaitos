
import navigation from './navMenu.js'

async function init() {
  const mainAlbums = document.querySelector('#content')
  const pageTitle = createPageTitle('Albums')
  const albumsList = await createAlbumsList()
  mainAlbums.append(navigation(), pageTitle, albumsList)
}
init()

function createPageTitle(text){
  const element = document.createElement('h1')
  element.textContent = text
  element.classList.add('page-title')

  return element
}

async function createAlbumsList() {

  const res = await fetch('https://jsonplaceholder.typicode.com/albums?_embed=photos')
  const albums = await res.json()
  console.log(albums)

  const resUser = await fetch('https://jsonplaceholder.typicode.com/users?')
  const users = await resUser.json()
  console.log(users)

  const albumsList = document.createElement('ul')
  albumsList.classList.add('albums-list')

  albums.forEach(async album => {
    const {photos, title, userId} = album
    
    const albumItem = document.createElement('li')
    albumItem.classList.add('album-item')
    albumsList.append(albumItem)

    const thumbnailImgLink = document.createElement('a')
    thumbnailImgLink.classList.add('album-link')
    thumbnailImgLink.href = photos[0].thumbnailUrl
    
    const thumbnailImg = document.createElement('img')
    thumbnailImg.src = photos[0].thumbnailUrl
    thumbnailImgLink.append(thumbnailImg)

    const author = users.find(user => user.id === album.userId)

    const titleLink = document.createElement('a')
    titleLink.href = `/album.html?user_id=${userId}`
    titleLink.textContent = `${title}`

 


    albumItem.append(titleLink , thumbnailImgLink, `(${photos.length} photos) `, `by ${author.name}`)
  });
  return albumsList
}
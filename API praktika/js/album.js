import navigation from './navMenu.js'
import { getUrlParams } from './utils.js'

async function init() {
    const albumMain = document.querySelector('#content')
    const pageTitle = createPageTitle('Album:')
    const userId = getUrlParams('user_id')
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${userId}?_embed=photos`)
    const album = await res.json()
    const photoList = photosList(album.photos)
    console.log(album)
    console.log(album.photos)
    albumMain.append(navigation(), pageTitle, photoList)
}
init()

function createPageTitle (text){
    const element = document.createElement('h1')
    element.textContent = text
    element.classList.add('page-title')

    return element
}



function photosList (photos){
    const photosWrapper = document.createElement('div')
    photosWrapper.classList.add('photos-wrapper')

    photos.forEach(photo => {
        const { photos, url } = photo

        const photoImg = document.createElement('img')
        photoImg.src = url
        photosWrapper.append(photoImg)
    })

    return photosWrapper
}
import { getUrlParams } from './utils.js'
import createForm from './createForm.js'

async function init() {
    const container = document.querySelector('#container')
    const searchResultWrap = document.createElement('div')
    const pageTitle = createPageTitle('Search page')
    const divElement = document.createElement('div')
    const searchPhrase = getUrlParams('search-phrase')
    const formElement = createForm()
    

    container.append(pageTitle, searchResultWrap)
    searchResultWrap.append(formElement, divElement)
    divElement.prepend(searchResults())

    formElement.addEventListener('submit', async function(e){

        e.preventDefault()

        const category = document.querySelector('#select').value
        const input = document.querySelector('#search-phrase').value

        if(input){

            

            if(category === 'posts'){

                const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${input}&_limit=20`)
                const posts = await postsRes.json()

                posts.forEach(data => {

                    const { title } = data

                    const parElement = document.createElement('p')
                    parElement.textContent = `${title}`
                    divElement.append(parElement)
                });

                if(posts.length === 0){
                    divElement.append(dataNotFound('Posts not found'))
                }     
            }
            

            if(category === 'users'){

                const usersRes = await fetch(`https://jsonplaceholder.typicode.com/users?q=${input}&_limit=20`)
                const users = await usersRes.json()

                users.forEach(data => {

                    const {username, email} = data

                    const parElement = document.createElement('p')
                    parElement.textContent = `${username} ${email}`
                    divElement.append(parElement)

                })

                if(users.length === 0){
                    divElement.append(dataNotFound('User not found'))
                }   
            }

            if(category === 'comments'){

                const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/comments?q=${input}&_limit=20`)
                const comments = await commentsRes.json()

                comments.forEach(data => {

                    const { name, email, body } = data

                    const parElement = document.createElement('p')
                    parElement.textContent = `${name} ${email} ${body}`
                    divElement.append(parElement)
                })
                if(comments.length === 0){
                    divElement.append(dataNotFound('Commnets not found'))
                }   
            }
                

            if(category === 'albums'){

                const albumsRes = await fetch(`https://jsonplaceholder.typicode.com/albums?q=${input}&_limit=20`)
                const albums = await albumsRes.json()

                albums.forEach(data => {

                    const { title } = data

                    const parElement = document.createElement('p')
                    parElement.textContent = title
                    divElement.append(parElement)
                })

                if(albums.length === 0){
                    divElement.append(dataNotFound('Album not found'))
                }   
            }


            if(category === 'photos'){

                const photosRes = await fetch(`https://jsonplaceholder.typicode.com/photos?q=${input}&_limit=20`)
                const photos = await photosRes.json()

                photos.forEach(data => {

                    const { title, url } = data

                    const photoTitle = document.createElement('p')
                    photoTitle.textContent = `${title}:`

                    const imgElement = document.createElement('img')
                    imgElement.src = url

                    divElement.append(photoTitle, imgElement)
                })

                if(photos.length === 0){
                    divElement.append(dataNotFound('Photos not found'))
                }   
                
            } 

            if(category === ''){
                alert('Please choose category')
            }

            return divElement
        }

            
    })
    
}
init()

function createPageTitle(text) {
    const element = document.createElement('h1')
    element.textContent = text
    element.classList.add('page-title')
  
    return element
}

function searchResults() {
    const searchResults = document.createElement('h2')
    searchResults.textContent = 'Search results:'
    searchResults.classList.add('page-title')
  
    return searchResults
}

function dataNotFound(text) {
    const errorMessage = document.createElement('h1')
    errorMessage.textContent = text
    errorMessage.classList.add('page-title')
  
    return errorMessage
}
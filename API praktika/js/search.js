import { getUrlParams } from './utils.js'
import createForm from './createForm.js'

async function init() {
    const container = document.querySelector('#container')
    const searchResultWrap = document.createElement('div')
    const pageTitle = createPageTitle('Search results:')
    const ulElement = document.createElement('ul')
    const searchPhrase = getUrlParams('search-phrase')
    const formElement = document.querySelector('#form-element')
    

    container.append(searchResultWrap)
    searchResultWrap.append(createForm(), ulElement)

formElement.addEventListener('submit', async function(e){

    e.preventDefault()

    const category = document.querySelector('#select').value
    const input = document.querySelector('#search-phrase').value

    if(category === 'posts'){

        const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchPhrase}&_limit=20`)
        const posts = await postsRes.json()



        console.log(posts)

        posts.forEach(data => {

            const { title } = data

            const liElement = document.createElement('li')
            liElement.textContent = `${title}`;
            ulElement.append(liElement);
        });
        return ulElement
    }

    if(category === 'users'){

        const usersRes = await fetch(`https://jsonplaceholder.typicode.com/users?q=${searchPhrase}&_limit=20`)
        const users = await usersRes.json()

        users.forEach(data => {

            const {username, email} = data

            const liElement = document.createElement('li')
            liElement.textContent = `${username} ${email}`
            ulElement.append(liElement)

        });
        return ulElement
    }
})

    if (searchPhrase) {

        console.log(posts)
        console.log(users)
    } else{
        console.log('No search phrase...')
    }
}
init()

function createPageTitle(text) {
    const element = document.createElement('h1')
    element.textContent = text
    element.classList.add('page-title')
  
    return element
  }



import { getUrlParams } from './utils.js'
import navigation from './navMenu.js'

async function init() {

    const userId = getUrlParams('user_id')
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}?_embed=posts&_embed=albums`)
    const user = await res.json()
    console.log(user)


    const contentElement = document.querySelector('#content')
    const userContent = createUserContent(user)
    const postsList = createUserPostsList(user.posts, user.name)

    contentElement.append(navigation(), userContent, postsList)
}

init()

function createUserContent(data) {
    const userContent = document.createElement('div')
    userContent.classList.add('user-content')

    const { name, username, email, address, phone, website, company } = data

    const Name = document.createElement('h2')
    Name.classList.add('user-name')
    Name.textContent = name
    userContent.append(Name)

    const userInfo = document.createElement('ul')
    userInfo.classList.add('user-info')

    const infoItems = [
        `Username: ${username}`,
        `Email: ${email}`,
        `Address: ${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`,
        `Phone: ${phone}`,
        `Website: ${website}`,
        `Company: ${company.name}`
    ];

    infoItems.forEach(info => {
        const userInfoItem = document.createElement('li');
        userInfoItem.classList.add('user-info-item');
        userInfoItem.textContent = info;
        userInfo.append(userInfoItem);
    });

    userContent.append(userInfo);

    return userContent
}

function createUserPostsList(posts, author) {
    const postsListWrapper = document.createElement('div')
    postsListWrapper.classList.add('posts-wrapper')

    const postsListTitle = document.createElement('h2')
    postsListTitle.classList.add('posts-list-title')
    postsListTitle.textContent = author ? `Posts of ${author}:` : 'Posts:'

    postsListWrapper.append(postsListTitle)

    const postsList = document.createElement('ul')
    postsList.classList.add('posts-list')
    postsListWrapper.append(postsList)

    posts.forEach(post => {
        const { id, title } = post

        const postItem = document.createElement('li')
        postItem.classList.add('post-item')

        const postLink = document.createElement('a')
        postLink.classList.add('post-link')
        postLink.href = `./post.html?post_id=${id}`
        postLink.textContent = title
        postItem.append(postLink)

        postsList.append(postItem)
    })
    return postsListWrapper
}
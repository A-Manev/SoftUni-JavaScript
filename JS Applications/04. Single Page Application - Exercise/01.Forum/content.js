import { e } from './dom.js'

async function getPostById() {
    const postId = sessionStorage.getItem('postId');

    const url = `http://localhost:3030/jsonstore/collections/myboard/posts/${postId}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function start() {
    const currentPost = document.getElementById('post');

    currentPost.innerHTML = '';

    const post = await getPostById();

    const element = e('div', { className: 'topic-name-wrapper' },
        e('div', { className: 'topic-name' },
            e('a', { href: '#', className: 'normal' }, e('h2', {}, post.title)),
            e('div', { className: 'columns' },
                e('div', {},
                    e('p', {}, `Date: 2021`),
                    e('div', { className: 'nick-name' }, e('p', {}, `Username: ${post.username}`))
                ),
                e('div', { className: 'subscribers' }, e('p', {}, `Subscribers: 0`))
            )
        )
    )

    currentPost.appendChild(element);

    loadAllCommentsForCurrentPost();

    document.getElementById('postComment'), addEventListener('submit', createComment);
}

async function loadAllCommentsForCurrentPost() {
    const url = `http://localhost:3030/jsonstore/collections/myboard/comments`;
    const response = await fetch(url);
    const data = await response.json();

    const comments = document.getElementById('comments');
    comments.innerHTML = '';

    Object.values(data).forEach(c => {
        if (c.postId == sessionStorage.getItem('postId')) {
            const date = new Date(c.date).toUTCString();

            const element =
                e('div', { className: 'comment' },
                    e('div', { className: 'header' }, e('p', {}, e('span', {}, c.username), e('a', {}, ' posted on '), e('time', {}, date))),
                    e('div', { className: 'comment-main' },
                        e('div', { className: 'userdetails' }, e('img', { src: './static/profile.png', alt: 'avatar' })),
                        e('div', { className: 'post-content' }, e('p', {}, c.comment))),
                    e('div', { className: 'footer' }, e('p', {}, e('span', {}, 0), e('a', {}, ' likes')))
                );

            comments.appendChild(element);
        }
    });
}

async function createComment(event) {
    event.preventDefault();
    const postId = sessionStorage.getItem('postId');

    const formData = new FormData(event.target);

    const comment = formData.get('postText');
    const username = formData.get('username');
    const date = Date.now();

    if (username == '' || comment == '') {
        return alert('All fields are required!');
    }

    const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, comment, date, postId }),
    });

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    loadAllCommentsForCurrentPost();

    event.target.reset();
}

start();
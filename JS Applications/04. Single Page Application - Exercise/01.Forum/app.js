import { e } from './dom.js'

function startSoftForum() {
    loadAllPosts();

    sessionStorage.clear();

    document.getElementById('allPosts').addEventListener('click', (event) => {

        if (event.target.tagName == 'H2') {
            event.preventDefault()

            sessionStorage.setItem('postId', event.target.parentNode.children[1].value);

            window.location.pathname = '01.Forum/topic-content.html';
        }
    });

    document.getElementById('createPost'), addEventListener('submit', createPost);
}

async function loadAllPosts() {
    const url = `http://localhost:3030/jsonstore/collections/myboard/posts`;
    const response = await fetch(url);
    const data = await response.json();

    const posts = document.getElementById('allPosts');

    posts.innerHTML = '';
    
    Object.values(data).forEach(p => {
        const date = new Date(p.date).toUTCString();

        const element = e('div', { className: 'topic-container' },
            e('div', { className: 'topic-name-wrapper' },
                e('div', { className: 'topic-name' },
                    e('a', { href: '#', className: 'normal' }, e('h2', {}, p.title), e('input', { type: 'hidden', value: p._id })),
                    e('div', { className: 'columns' },
                        e('div', {},
                            e('p', {}, e('a', {}, 'Date: '), e('time', {}, date)),
                            e('div', { className: 'nick-name' }, e('p', {}, `Username: ${p.username}`))
                        ),
                        e('div', { className: 'subscribers' }, e('p', {}, `Subscribers: 0`))
                    )
                )
            )
        );

        posts.appendChild(element);
    });
}

async function createPost(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    if (event.submitter.className == 'cancel') {
        event.preventDefault();
        event.target.reset();
    } else {
        const title = formData.get('topicName');
        const username = formData.get('username');
        const post = formData.get('postText');
        const date = Date.now();
    
        if (title == '' || username == '' || post == '') {
            return alert('All fields are required!');
        }
    
        const response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, username, post, date }),
        });
    
        if (!response.ok) {
            const error = await response.json();
            return alert(error.message);
        }
    
        loadAllPosts();
    
        event.target.reset();
    }
}

startSoftForum();
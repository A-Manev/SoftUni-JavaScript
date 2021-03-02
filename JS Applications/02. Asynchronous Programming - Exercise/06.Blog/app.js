function attachEvents() {
    const posts = document.getElementById('posts');

    document.getElementById('btnLoadPosts').addEventListener('click', async () => {
        const url = `http://localhost:3030/jsonstore/blog/posts`;

        const response = await fetch(url);
        const data = await response.json();

        Object.values(data).forEach(p => {
            const option = createElement('option', p.title, ['value', p.id]);
            posts.appendChild(option);
        })
    });

    document.getElementById('btnViewPost').addEventListener('click', async () => {
        const id = posts.value;

        const post = await getPostInfo(id);

        document.getElementById('post-title').textContent = post.title;
        document.getElementById('post-body').textContent = post.body;

        const url = `http://localhost:3030/jsonstore/blog/comments`;

        const response = await fetch(url);
        const data = await response.json();

        const comments = Object.values(data).filter(x => x.postId == id);

        const postComments = document.getElementById('post-comments');

        postComments.innerHTML = '';

        comments.forEach(c => {
            const comment = createElement('li', c.text, ['id', c.id]);
            postComments.appendChild(comment);
        });
    });

    async function getPostInfo(id) {
        const url = `http://localhost:3030/jsonstore/blog/posts/${id}`;

        const response = await fetch(url);
        const data = await response.json();

        return data;
    }

    function createElement(type, content, attributes = []) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        if (attributes.length > 0) {
            element.setAttribute(attributes[0], attributes[1]);
        }

        return element;
    }
}

attachEvents();
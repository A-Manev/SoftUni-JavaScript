function attachEvents() {
    document.getElementById('submit').addEventListener('click', async () => {
        const author = document.querySelector('[name="author"]');
        const content = document.querySelector('[name="content"]');

        const data = {
            author: author.value,
            content: content.value,
        };

        sendMessage(data);

        author.value = '';
        content.value = '';
    });

    document.getElementById('refresh').addEventListener('click', getMessages);
}

async function getMessages() {
    const url = `http://localhost:3030/jsonstore/messenger`;
    const response = await fetch(url);
    const data = await response.json();

    const messages = Object.values(data).map(x => `${x.author}: ${x.content}`).join('\n');
    document.getElementById('messages').value = messages;
}

async function sendMessage(message) {
    const url = `http://localhost:3030/jsonstore/messenger`;
    const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
    });
}

attachEvents();
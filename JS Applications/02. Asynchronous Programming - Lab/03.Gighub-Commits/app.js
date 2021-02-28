async function loadCommits() {
    const username = document.getElementById('username').value;
    const repository = document.getElementById('repo').value;
    const commits = document.getElementById('commits');

    const url = `https://api.github.com/repos/${username}/${repository}/commits`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.log(response);

            throw Error(`${response.status} (${response.statusText})`);
        }

        const data = await response.json();

        commits.innerHTML = '';

        data.forEach(c => {
            const liElement = document.createElement('li');
            liElement.textContent = `${c.commit.author.name}: ${c.commit.message}`;
            commits.appendChild(liElement);
        });
    } catch (error) {
        commits.innerHTML = '';
        const liElement = document.createElement('li');
        liElement.textContent = `Error: ${error.message}`;
        commits.appendChild(liElement);
    }
}
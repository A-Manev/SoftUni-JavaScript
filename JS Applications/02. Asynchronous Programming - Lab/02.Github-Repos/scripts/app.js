async function loadRepos() {
	const username = document.getElementById('username');

	const url = `https://api.github.com/users/${username.value}/repos`;

	const ulElement = document.getElementById('repos');

	try {
		const response = await fetch(url);

		if (response.status == 404) {
			throw new Error('User not found');
		}

		const data = await response.json();

		ulElement.innerHTML = '';

		data.forEach(r => {
			const liElement = document.createElement('li');
			const a = document.createElement('a');
			a.setAttribute('href', r.html_url);
			a.textContent = r.full_name;
			liElement.appendChild(a);
			ulElement.appendChild(liElement);
		});
	} catch (error) {
		ulElement.innerHTML = '';
		const liElement = document.createElement('li');
		liElement.textContent = error;
		ulElement.appendChild(liElement);
	}

	// fetch(url)
	// 	.then(response => {
	// 		if (response.status == 404) {
	// 			throw new Error('User not found');
	// 		}

	// 		return response.json()
	// 	})
	// 	.then(data => {
	// 		ulElement.innerHTML = '';

	// 		data.forEach(r => {
	// 			const liElement = document.createElement('li');
	// 			const a = document.createElement('a');
	// 			a.setAttribute('href', r.html_url);
	// 			a.textContent = r.full_name;
	// 			liElement.appendChild(a);
	// 			ulElement.appendChild(liElement);
	// 		})
	// 	})
	// 	.catch(error => {
	// 		ulElement.innerHTML = '';
	// 		const liElement = document.createElement('li');
	// 		liElement.textContent = error;
	// 		ulElement.appendChild(liElement);
	// 	});
}
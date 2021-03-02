async function lockedProfile() {
    const main = document.getElementById('main');

    main.innerHTML = '';

    const url = `http://localhost:3030/jsonstore/advanced/profiles`;

    const response = await fetch(url);
    const data = await response.json();

    let index = 0;

    Object.entries(data).forEach(p => {

        index++;
        const divProfile = createElement('div', '', ['class', 'profile']);

        const img = createElement('img', '', ['src', './iconProfile2.png', 'class', 'userIcon']);

        const lockLable = createElement('label', 'Lock');

        const lock = createElement('input', '', ['type', 'radio', 'name', `user${index}Locked`, 'value', 'lock', 'checked', '']);

        const unlockLable = createElement('label', 'Unlock');

        const unlock = createElement('input', '', ['type', 'radio', 'name', `user${index}Locked`, 'value', 'unlock']);

        const br = createElement('br');
        const hr1 = createElement('hr');

        const labelUsername = createElement('label', 'Username');
        const inputUsername = createElement('input', '', ['type', 'text', 'name', `user${index}Username`, 'value', p[1].username, 'disabled', '', 'readonly', '']);
       
        const divUserHiddenFields = createElement('div', '', ['id', 'user1HiddenFields']);

        const hr2 = createElement('hr');

        const labelEmail = createElement('label', 'Email:');
        const inputEmail = createElement('input', '', ['type', 'email', 'name', `user${index}Email`, 'value', p[1].email, 'disabled', '', 'readonly', '']);

        const labelAge = createElement('label', 'Age:');
        const inputAge = createElement('input', '', ['type', 'email', 'name', `user${index}Age`, 'value', p[1].age, 'disabled', '', 'readonly', '']);

        const button = createElement('button', 'Show more');

        button.addEventListener('click', show);

        divUserHiddenFields.appendChild(hr2);
        divUserHiddenFields.appendChild(labelEmail);
        divUserHiddenFields.appendChild(inputEmail);
        divUserHiddenFields.appendChild(labelAge);
        divUserHiddenFields.appendChild(inputAge);

        divProfile.appendChild(img);
        divProfile.appendChild(lockLable);
        divProfile.appendChild(lock);
        divProfile.appendChild(unlockLable);
        divProfile.appendChild(unlock);
        divProfile.appendChild(br);
        divProfile.appendChild(hr1);
        divProfile.appendChild(labelUsername);
        divProfile.appendChild(inputUsername);
        divProfile.appendChild(divUserHiddenFields);
        divProfile.appendChild(button);

        main.appendChild(divProfile);
    })

    function show(event) {
        if (event.target.parentNode.children[4].checked && event.target.textContent === 'Show more') {
            event.target.parentNode.children[9].style.display = 'inline';
            event.target.textContent = 'Hide it';
        } else if (event.target.parentNode.children[4].checked) {
            event.target.parentNode.children[9].style.display = 'none';
            event.target.textContent = 'Show more';
        }
    }

    function createElement(type, content, attributes = []) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        if (attributes.length > 0) {
            for (let i = 0; i < attributes.length; i += 2) {
                element.setAttribute(attributes[i], attributes[i + 1]);
            }
        }

        return element;
    }
}
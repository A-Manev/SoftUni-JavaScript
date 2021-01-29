function lockedProfile() {
    [...document.querySelectorAll('#main > div > button')].forEach(b => {
        b.addEventListener('click', show)
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
}
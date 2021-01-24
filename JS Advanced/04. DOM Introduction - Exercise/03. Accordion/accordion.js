function toggle() {
    let buttonValue = document.querySelector('#accordion > div.head > span');
    let extra = document.getElementById('extra');

    const inHidden = buttonValue.textContent == 'More';
    extra.style.display = inHidden ? 'block' : 'none';
    buttonValue.textContent = inHidden ? 'Less' : 'More';
}
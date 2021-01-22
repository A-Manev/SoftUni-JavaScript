function colorize() {
    [...document.querySelectorAll('table tr:nth-child(even)')].forEach(t => t.style.backgroundColor = 'teal');
}

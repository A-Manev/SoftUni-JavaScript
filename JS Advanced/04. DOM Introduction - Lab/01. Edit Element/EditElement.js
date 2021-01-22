function editElement(reference, match, replacer) {
    reference.textContent = reference.textContent.replace(new RegExp(match, 'g'), replacer);
}
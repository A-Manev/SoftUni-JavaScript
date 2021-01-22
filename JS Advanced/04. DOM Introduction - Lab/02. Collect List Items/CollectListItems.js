function extractText() {
    let items = Array.from(document.getElementsByTagName("li"));;

    let result = items.map(i => i.textContent);
    
    document.getElementById('result').value = result.join('\n');
}
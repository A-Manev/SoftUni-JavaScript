function generateReport() {
    let headers = Array.from(document.getElementsByTagName('thead')[0].children[0].children);

    console.log(headers);
    let selected = [];
    
    let rows = Array.from(document.getElementsByTagName('tbody')[0].children);

    headers.forEach((header, index) => {
        if(header.children[0].checked) {
            selected.push(index);
        }
    });
 
    let result = [];
    for(let i = 0; i < rows.length; i++) {
        let employee = {};
        for(const index of selected) {
            let value = rows[i].children[index].textContent;
            employee[headers[index].children[0].getAttribute('name')] = value;
        }
        result.push(employee);
    }
 
    let output = document.getElementById('output');
    output.value = JSON.stringify(result, undefined, 4);
    for(const header of headers) {
        header.children[0].checked = false;
    }
}
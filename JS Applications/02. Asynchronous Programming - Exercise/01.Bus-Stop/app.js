async function getInfo() {
    const stopId = document.getElementById('stopId');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`;

    const stopName = document.getElementById('stopName');

    try {
        const ulElement = document.getElementById('buses');
        ulElement.innerHTML = '';

        const response = await fetch(url);
        const data = await response.json();

        stopName.textContent = data.name;

        Object.entries(data.buses).map(([bus, time]) => {
            const result = document.createElement('li');
            result.textContent = `Bus ${bus} arrives in ${time} minutes`;

            ulElement.appendChild(result);
        });

        stopId.value = '';
    } catch (error) {
        stopName.textContent = 'Error';
    }
}
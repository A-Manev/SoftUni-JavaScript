function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convert);

    let convertorToMetters = {
        km: (x) => x * 1000,
        m: (x) => x,
        cm: (x) => x * 0.01,
        mm: (x) => x * 0.001,
        mi: (x) => x * 1609.34,
        yrd: (x) => x * 0.9144,
        ft: (x) => x * 0.3048,
        in: (x) => x * 0.0254,
    };

    let convertorFromMettersToOutputUnits = {
        km: (x) => x / 1000,
        m: (x) => x,
        cm: (x) => x / 0.01,
        mm: (x) => x / 0.001,
        mi: (x) => x / 1609.34,
        yrd: (x) => x / 0.9144,
        ft: (x) => x / 0.3048,
        in: (x) => x / 0.0254,
    };

    function convert() {
        let inputDistance = document.getElementById('inputDistance').value;

        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;

        let metters = convertorToMetters[inputUnits](Number(inputDistance));

        let result = convertorFromMettersToOutputUnits[outputUnits](metters);

        document.getElementById('outputDistance').value = result;
    }
}
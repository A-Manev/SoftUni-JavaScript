function argumentInfo(...input) {
    let typeCounter = {};

    input.forEach((element) => {
        let elementType = typeof (element);

        console.log(`${elementType}: ${element}`);

        if (!typeCounter.hasOwnProperty(elementType)) {
            typeCounter[elementType] = 0;
        }

        typeCounter[elementType]++;
    });

    Object.entries(typeCounter)
        .sort((a, b) => b[1] - a[1])
        .forEach((element) => {
            console.log(`${element[0]} = ${element[1]}`);
        });
}

argumentInfo(12, 'cat', 42, function () { console.log('Hello world!'); });
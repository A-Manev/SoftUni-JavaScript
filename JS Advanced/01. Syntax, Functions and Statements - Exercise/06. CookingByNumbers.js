function cookingByNumbers(input) {
    let startNumber = Number(input.shift());

    let operations = {
        chop: (x) => x /= 2,
        dice: (x) => x = Math.sqrt(x),
        spice: (x) => x += 1,
        bake: (x) => x *= 3,
        fillet: (x) => x -= x * 0.2,
    }

    for (let i = 0; i < input.length; i++) {
        let currentOperation = input[i];

        startNumber = operations[currentOperation](startNumber);

        console.log(startNumber);
    }

    // for (let i = 0; i < input.length; i++) {
    //     if (input[i] == 'chop') {
    //         startNumber /= 2;
    //         console.log(startNumber);
    //     } else if (input[i] == 'dice') {
    //         startNumber = Math.sqrt(startNumber);
    //         console.log(startNumber);
    //     } else if (input[i] == 'spice') {
    //         startNumber += 1;
    //         console.log(startNumber);
    //     } else if (input[i] == 'bake') {
    //         startNumber *= 3;
    //         console.log(startNumber);
    //     } else if (input[i] == 'fillet') {
    //         startNumber -= startNumber * 0.2;
    //         console.log(startNumber);
    //     }
    // }
}

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
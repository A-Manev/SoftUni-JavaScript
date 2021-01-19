function carFactory(inputCar) {
    // let car = {};

    // car.model = inputCar.model;
    // car.engine = {};
    // car.carriage = {};

    // if (inputCar.power <= 90) {
    //     car.engine.power = 90;
    //     car.engine.volume = 1800;
    // } else if (inputCar.power > 90 && inputCar.power <= 120) {
    //     car.engine.power = 120;
    //     car.engine.volume = 2400;
    // } else if (inputCar.power > 120 && inputCar.power <= 200) {
    //     car.engine.power = 200;
    //     car.engine.volume = 3500;
    // }

    // car.carriage.type = inputCar.carriage;
    // car.carriage.color = inputCar.color;

    // car.wheels = [0, 0, 0, 0].fill(inputCar.wheelsize % 2 !== 0 ? inputCar.wheelsize : inputCar.wheelsize - 1);

    // return car;

    function getEngine(power) {
        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 },
        ].sort((a, b) => a.power - b.power);

        return engines.find(e => e.power >= power);
    }

    function getCarriage(type, color) {
        return {
            type,
            color,
        }
    }

    function getWheels(wheelsize) {
        return Array(4).fill(wheelsize % 2 !== 0 ? wheelsize : wheelsize - 1);
    }

    return {
        model: inputCar.model,
        engine: getEngine(inputCar.power),
        carriage: getCarriage(inputCar.carriage, inputCar.color),
        wheels: getWheels(inputCar.wheelsize),
    }
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));
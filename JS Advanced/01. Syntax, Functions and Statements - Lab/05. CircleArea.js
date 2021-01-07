function calculateTheCircleArea(argument) {
    if (typeof (argument) !== 'number') {
        return console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`);
    }

    let area = Math.PI * argument ** 2;

    console.log(area.toFixed(2));
}

calculateTheCircleArea(5);
calculateTheCircleArea('name');
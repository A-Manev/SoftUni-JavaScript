function autoEngineeringCompany(inputCars) {
    let cars = {};

    inputCars.forEach(element => {
        let [brand, model, producedCars] = element.split(' | ');

        producedCars = Number(producedCars);

        if (!cars[brand]) {
            cars[brand] = [{ model, producedCars }];
        } else {

            if (cars[brand].some(c => c.model === model)) {
                let car = cars[brand].find(c => c.model === model);

                car.producedCars += producedCars;;
            } else {
                cars[brand].push({ model, producedCars });
            }
        }
    });
    
    let result = [];
    for (const [key, value] of Object.entries(cars)) {
        result.push(`${key}`);
        for (const car of value) {
            result.push(`###${car.model} -> ${car.producedCars}`);
        }
    }

    return result.join('\n');
}

console.log(autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
));
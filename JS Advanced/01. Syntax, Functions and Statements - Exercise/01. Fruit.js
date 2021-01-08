function calculateMoneyForFruit(fruit, weightInGrams, pricePerKilogram) {
    let weightInKilograms = weightInGrams / 1000;
    let needMoney = weightInKilograms * pricePerKilogram;

    console.log(`I need $${needMoney.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}

calculateMoneyForFruit('orange', 2500, 1.80);
calculateMoneyForFruit('apple', 1563, 2.35);
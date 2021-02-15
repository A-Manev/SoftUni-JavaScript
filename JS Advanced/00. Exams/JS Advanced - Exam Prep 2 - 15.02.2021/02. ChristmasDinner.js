class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this._budget = value;
    }

    shopping(product) {
        let type = product[0];
        let price = product[1];

        if (this.budget - price < 0) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`;
    }

    recipes(recipe) {
        for (const product of recipe.productsList) {
            if (!this.products.includes(product)) {
                throw new Error('We do not have this product')
            }
        }

        this.dishes.push(recipe);

        return `${recipe.recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        if (!this.dishes.some(x => x.recipeName === dish)) {
            throw new Error('We do not have this dish');
        }

        if (this.guests[name]) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = [];
        for (const [name, dish] of Object.entries(this.guests)) {
            let currentDish = this.dishes.find(x => x.recipeName == dish);
            let products = currentDish.productsList;
            result.push(`${name} will eat ${dish}, which consists of ${products.join(', ')}`)
        }

        return result.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

console.log(dinner.shopping(['Salt', 1]));
console.log(dinner.shopping(['Beans', 3]));
console.log(dinner.shopping(['Cabbage', 4]));
console.log(dinner.shopping(['Rice', 2]));
console.log(dinner.shopping(['Savory', 1]));
console.log(dinner.shopping(['Peppers', 1]));
console.log(dinner.shopping(['Fruits', 40]));
console.log(dinner.shopping(['Honey', 10]));

console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}));
console.log(dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
}));
console.log(dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
}));

console.log(dinner.inviteGuests('Ivan', 'Oshav'));
console.log(dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice'));
console.log(dinner.inviteGuests('Georgi', 'Peppers filled with beans'));

console.log(dinner.showAttendance());
function heroicInventory(input) {
    let heroes = [];

    for (const element of input) {
        let [name, level, items] = element.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        heroes.push({ name, level, items });
    }
    
    return JSON.stringify(heroes);
}

console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));
console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));
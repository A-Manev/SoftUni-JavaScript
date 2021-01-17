function returnArrayWithPieFlavors(flovors, firstTargetFlovor, secondTargetFlovor) {
    let startIndex = flovors.indexOf(firstTargetFlovor);
    let endIndex = flovors.indexOf(secondTargetFlovor);

    return flovors.slice(startIndex, endIndex + 1);
}

console.log(returnArrayWithPieFlavors(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
console.log(returnArrayWithPieFlavors(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));
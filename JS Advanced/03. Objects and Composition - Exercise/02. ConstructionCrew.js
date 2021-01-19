function constructionCrew(inputWorker) {
    if (inputWorker.dizziness) {
        inputWorker.levelOfHydrated += inputWorker.weight * 0.1 * inputWorker.experience;
        inputWorker.dizziness = false;
    }

    return inputWorker;
}

console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));
console.log(constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));
console.log(constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}));
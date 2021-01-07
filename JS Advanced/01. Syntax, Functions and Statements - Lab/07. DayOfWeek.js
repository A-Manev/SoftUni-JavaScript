function printDayOfWeek(input) {
    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let currentDay = daysOfWeek.indexOf(input);

    console.log(currentDay !== -1 ? currentDay + 1 : 'error')
}

printDayOfWeek('Monday');
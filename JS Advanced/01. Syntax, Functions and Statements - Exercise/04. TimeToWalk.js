function calculateHowLongItTakesAStudentToGetToUniversity(numberOfSteps, footprintLengthInMeters, studentSpeed) {

    let distanceInMeters = numberOfSteps * footprintLengthInMeters;
    let bonusMinutes = Math.floor(distanceInMeters / 500);

    let distanceInKm = distanceInMeters / 1000;
    let totalTimeHours = distanceInKm / studentSpeed + (bonusMinutes / 60);
    let totalSeconds = Math.ceil(totalTimeHours * 3600);

    let format = new Date(null, null, null, null, null, totalSeconds);

    let finalOutput = format.toTimeString().split(" ")[0];

    console.log(finalOutput);
}

calculateHowLongItTakesAStudentToGetToUniversity(4000, 0.60, 5);
calculateHowLongItTakesAStudentToGetToUniversity(2564, 0.70, 5.5); 
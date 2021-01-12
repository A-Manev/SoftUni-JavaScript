function determinesSpeedLimit(currentSpeed, typeOfRoad) {
    let speedsLimit = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    let limit = speedsLimit[typeOfRoad];
    checkTheSpeed(currentSpeed, limit);

    function checkTheSpeed(currentSpeed, limit) {
        let difference = limit - currentSpeed;

        if (difference >= 0) {
            console.log(`Driving ${currentSpeed} km/h in a ${limit} zone`);
            return;
        }

        difference = Math.abs(difference);

        if (difference <= 20) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - speeding`);
        } else if (difference <= 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - excessive speeding`);
        } else {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - reckless driving`);
        }
    }
}

determinesSpeedLimit(40, 'city');
determinesSpeedLimit(21, 'residential');
determinesSpeedLimit(120, 'interstate');
determinesSpeedLimit(200, 'motorway');

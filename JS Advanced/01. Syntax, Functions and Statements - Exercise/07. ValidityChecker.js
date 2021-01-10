function chechDistanceBetweenPoints(x1, y1, x2, y2){
    checkTheDistance(x1, y1, 0, 0);
    checkTheDistance(x2, y2, 0, 0);
    checkTheDistance(x1, y1, x2, y2);

    function checkTheDistance(first, second, third, fourth){
        let firstResult = Math.pow(first - third, 2);
        let secondResult = Math.pow(second - fourth, 2);
        let resultToCheck = Math.sqrt(firstResult + secondResult);

        if(resultToCheck === parseInt(resultToCheck)){
            console.log(`{${first}, ${second}} to {${third}, ${fourth}} is valid`);
        } else {
            console.log(`{${first}, ${second}} to {${third}, ${fourth}} is invalid`);
        }
    }
}

chechDistanceBetweenPoints(3, 0, 0, 4);
chechDistanceBetweenPoints(2, 1, 1, 1);
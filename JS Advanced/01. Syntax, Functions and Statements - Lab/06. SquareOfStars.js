function printRectangleOfStars(inputSize) {
    //first way
    // for (let i = 1; i <= inputSize; i++) {
    //     let result = '';
    //     for (let j = 0; j < inputSize; j++) {
    //         result += '* '
    //     }

    //     console.log(result);
    // }

    //secons way
    let result = '';
    for (let index = 0; index < inputSize; index++) {
        result += "* ".repeat(inputSize);
        result += '\n';
    }
    
    console.log(result);
}

printRectangleOfStars(5);
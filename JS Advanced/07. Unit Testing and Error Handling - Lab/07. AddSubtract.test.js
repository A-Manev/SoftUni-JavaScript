const { expect } = require('chai');
const createCalculator = require('./07. AddSubtract');

describe('Testing createCalculator functionality', () => {
    it("should return 3 after add(10); subtract('7'); add('-2'); subtract(-1)", function () {
        let calculator = createCalculator();

        calculator.add(10);
        calculator.subtract('7');

        expect(calculator.get()).to.equal(3);
    });

    it("should return -1 add('-2'); subtract(-1)", function () {
        let calculator = createCalculator();

        calculator.add('-2');
        calculator.subtract(-1);

        expect(calculator.get()).to.equal(-1);
    });
});
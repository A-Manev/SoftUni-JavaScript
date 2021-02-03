const { expect } = require('chai');
const sum = require('./04. SumOfNumbers');

describe('Sum numbers', () => {
    it('sums single number', () => {
        expect(sum([1])).to.equal(1);
    });

    it('sums multiple numbers', () => {
        expect(sum([1, 2])).to.equal(3);
    });

    it('sums multiple numbers', () => {
        expect(sum([1, 2, 3, 4])).to.equal(10);
    });
});
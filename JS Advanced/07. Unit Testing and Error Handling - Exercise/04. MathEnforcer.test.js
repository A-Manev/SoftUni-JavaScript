const { expect } = require('chai');
const mathEnforcer = require('./04. MathEnforcer');


describe('Math Enforcer', () => {
    //addFive
    it('', () => {
        expect(mathEnforcer.addFive('five')).to.equal(undefined);
    });

    it('', () => {
        expect(mathEnforcer.addFive([1])).to.equal(undefined);
    });

    it('', () => {
        expect(mathEnforcer.addFive(5)).to.equal(10);
    });

    it('', () => {
        expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
    });

    it('', () => {
        expect(mathEnforcer.addFive(-5.5)).to.equal(-0.5);
    });

    //subtractTen

    it('', () => {
        expect(mathEnforcer.subtractTen('five')).to.equal(undefined);
    });

    it('', () => {
        expect(mathEnforcer.subtractTen([1])).to.equal(undefined);
    });

    it('', () => {
        expect(mathEnforcer.subtractTen(10)).to.equal(0);
    });

    it('', () => {
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    });

    it('', () => {
        expect(mathEnforcer.subtractTen(20)).to.equal(10);
    });

    it('', () => {
        expect(mathEnforcer.subtractTen(20.5)).to.equal(10.5);
    });

    //sum(num1, num2) 
    it('', () => {
        expect(mathEnforcer.sum('string', 1)).to.equal(undefined);
    });

    it('', () => {
        expect(mathEnforcer.sum(1, 'string')).to.equal(undefined);
    });
    
    it('', () => {
        expect(mathEnforcer.sum(1, 1)).to.equal(2);
    });

    it('', () => {
        expect(mathEnforcer.sum(1.5, 2.5)).to.equal(4);
    });

    it('', () => {
        expect(mathEnforcer.sum(-1.5, 2)).to.equal(0.5);
    });
});

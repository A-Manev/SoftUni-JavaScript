const { expect } = require('chai');
const isSymmetric = require('./05. CheckForSymmetry');

describe('Check for Symmetry', () => {
    it('returns true if the input array is symmetric', () => {
        expect(isSymmetric([1, 2, 1])).to.equal(true);
    });

    it('returns false for any input that isn’t of the correct type', () => {
        expect(isSymmetric('a')).to.equal(false);
    });

    it('returns true for valid symmetric odd-element array', () => {
        expect(isSymmetric([1, 1, 1])).to.equal(true);
    });

    it('returns true for valid symmetric string array', () => {
        expect(isSymmetric(['a', 'a'])).to.equal(true);
    });

    it('returns false for non-symmetric string array', () => {
        expect(isSymmetric(['a', 'b'])).to.equal(false);
    });

    it('returns false for same values from different type', () => {
        expect(isSymmetric([1, '1'])).to.equal(false);
    });
});
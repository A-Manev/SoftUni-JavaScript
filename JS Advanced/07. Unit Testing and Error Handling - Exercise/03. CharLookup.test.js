const { expect } = require('chai');
const lookupChar = require('./03. CharLookup');

describe('Char Lookup', () => {
    it('returns undefined, because first parameter is not string', () => {
        expect(lookupChar(1, 1)).to.equal(undefined);
    });

    it('returns undefined, because second parameter is not number', () => {
        expect(lookupChar('test', 1.2)).to.equal(undefined);
    });
  
    it('returns Incorrect index, because second parameter is negative number', () => {
        expect(lookupChar('test', -1)).to.equal('Incorrect index');
    });

    it('returns Incorrect index, because second parameter bigger than string length', () => {
        expect(lookupChar('test', 10)).to.equal('Incorrect index');
    });

    it('returns the character at the specified index in the string', () => {
        expect(lookupChar('test', 1)).to.equal('e');
    });
});

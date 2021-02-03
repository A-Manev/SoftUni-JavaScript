const { expect } = require('chai');
const rgbToHexColor = require('./06. RGBToHex');

describe('RGB to Hex', () => {
    it('returns undefined for string as first param', () => {
        expect(rgbToHexColor('red', 10, 10)).to.equal(undefined);
    });

    it('returns undefined for negative first param', () => {
        expect(rgbToHexColor(-10, 10, 10)).to.equal(undefined);
    });

    it('returns undefined for bigger than 255 number as first param', () => {
        expect(rgbToHexColor(300, 10, 10)).to.equal(undefined);
    });

    it('returns undefined for string as second param', () => {
        expect(rgbToHexColor(10, 'green', 10)).to.equal(undefined);
    });

    it('returns undefined for negative second param', () => {
        expect(rgbToHexColor(10, -10, 10)).to.equal(undefined);
    });

    it('returns undefined for bigger than 255 number as second param', () => {
        expect(rgbToHexColor(10, 300, 10)).to.equal(undefined);
    });

    it('returns undefined for string as third param', () => {
        expect(rgbToHexColor(10, 10, 'blue')).to.equal(undefined);
    });

    it('returns undefined for negative third param', () => {
        expect(rgbToHexColor(10, 10, -10)).to.equal(undefined);
    });

    it('returns undefined for bigger than 255 number as third param', () => {
        expect(rgbToHexColor(10, 10, 300)).to.equal(undefined);
    });

    it('returns color in hexadecimal format for valid 3 params', () => {
        expect(rgbToHexColor(164, 66, 245)).to.equal('#A442F5');
    });

    it('returns black color in hexadecimal', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('returns white color in hexadecimal', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
});
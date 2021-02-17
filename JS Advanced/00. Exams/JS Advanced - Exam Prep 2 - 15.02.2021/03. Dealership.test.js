const { expect } = require('chai');
const dealership = require('./03. Dealership');


describe("Tests …", function () {
    it("newCarCost", function () {
        expect(dealership.newCarCost('BMW', 2000)).to.equal(2000);
        expect(dealership.newCarCost('Audi A6 4K', 40000)).to.equal(20000);
        expect(dealership.newCarCost('Audi A6 4K', 2000)).to.equal(-18000);
    });

    it("carEquipment", function () {
        let extras = ['heated seats', 'sliding roof', 'sport rims', 'navigation',];
        let selectedExtras = [0, 3];

        let expected = ['heated seats', 'navigation'];
        expect(dealership.carEquipment(extras, selectedExtras)).to.deep.equal(expected);
    });

    it("carEquipment", function () {
        let extras = ['heated seats', 'navigation'];
        let selectedExtras = [0, 5];

        let expected = ['heated seats', undefined];
        expect(dealership.carEquipment(extras, selectedExtras)).to.deep.equal(expected);
    });

    it("euroCategory", function () {
        expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
        expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
        expect(dealership.euroCategory(10)).to.equal('We have added 5% discount to the final price: 14250.');
    });
});

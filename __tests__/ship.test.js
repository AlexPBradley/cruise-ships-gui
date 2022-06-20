/* globals describe it expect */
const Ship = require('../src/ship');
const Port = require('../src/port');

describe('ship', () => {
    it('can be instantiated', () => {
        const dover = new Port('Dover');
        const cruise = new Ship(dover);

        expect(cruise.currentPort).toBe(dover);
    });
});

describe('setSail', () => {
    it('can set sail', () => {
        const cruise = new Ship('Dover');

        cruise.setSail();

        expect(cruise.currentPort).toBeFalsy();
    });
});

describe('dock', () => {
    it('can dock at different port', () => {
        //const dover
    });
});
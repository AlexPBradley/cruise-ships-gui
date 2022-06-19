/* globals describe it expect */
const Ship = require('../src/ship');

describe('ship', () => {
    it('can be instantiated', () => {
        const cruise = new Ship('Dover');

        expect(cruise.startingPort).toBe('Dover');
    });
});
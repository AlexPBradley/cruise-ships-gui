/* globals describe it expect */
const Itinerary = require('../src/itinerary');

describe('itinerary', () => {
    it('can have ports', () => {
        const testShip1 = jest.fn();
        const testShip2 = jest.fn();

        const itinerary = new Itinerary([testShip1, testShip2]);

        expect(itinerary.ports).toEqual([testShip1, testShip2]);
    });
});
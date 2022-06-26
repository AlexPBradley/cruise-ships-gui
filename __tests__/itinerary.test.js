/* globals describe it expect */
const Itinerary = require('../src/itinerary');
const Ship = require('../src/ship');
const Port = require('../src/port');

describe('', () => {
    it('', () => {
        const Dover = new Port('Dover');
        const Calais = new Port('Calais');

        const itinerary = new Itinerary([Dover, Calais]);

        expect(itinerary.ports).toEqual([Dover, Calais]);
    });
});
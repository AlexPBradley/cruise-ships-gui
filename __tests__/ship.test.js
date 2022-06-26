/* globals describe it expect */
const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('ship', () => {
    it('startig point', () => {
        const dover = new Port('Dover');
        const itinerary = new Itinerary([dover]);
        const cruise = new Ship(itinerary);

        expect(cruise).toBeInstanceOf(Object);
        expect(cruise.currentPort).toBe(itinerary.ports[0]);
    });
});

describe('setSail', () => {
    it('can set sail', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais])
        const cruise = new Ship(itinerary);

        cruise.setSail();

        expect(cruise.currentPort).toBeFalsy();
        expect(cruise.previousPort).toBe(itinerary.ports[0]);
    });
});

describe('dock', () => {
    it('can dock at different port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const cruise = new Ship(itinerary);

        cruise.setSail();
        cruise.dock();

        expect(cruise.currentPort).toBe(itinerary.ports[1]);
    });
});

describe('end of the line', () => {
    it('test there are no more docks', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const cruise = new Ship(itinerary);

        cruise.setSail();
        cruise.dock();

        expect(() => cruise.setSail()).toThrowError('End of itinerary reached')
    });
});
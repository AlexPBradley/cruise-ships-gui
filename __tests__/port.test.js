/* globals describe it expect */
const Port = require('../src/port');
const Ship = require('../src/ship');

describe('port', () => {
    it('set port', () => {
        const Dover = new Port('Dover');

        expect(Dover.name).toBe('Dover');
    });

    it('can add ships', () => {
        const dover = new Port('Dover');
        const cruise = {};

        dover.addShip(cruise);

        expect(dover.ships).toContain(cruise);
    });

    it('can remove ships', () => {
        const dover = new Port('Dover');
        const titanic = {};
        const queenMary = {};

        dover.addShip(titanic);
        dover.addShip(queenMary);
        dover.removeShip(queenMary);

        expect(dover.ships).toEqual([titanic]);

    });
});
/* globals describe it expect */
const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('ship', () => {
    describe('with ports and an itinerary', () => {

        let cruise;
        let dover;
        let calais;
        let itinerary;
        
        beforeEach(() => {
            dover = new Port('Dover');
            calais = new Port('Calais');
            itinerary = new Itinerary([dover, calais]);
            cruise = new Ship(itinerary);
        });
        
        it('startig point', () => {
            expect(cruise).toBeInstanceOf(Object);
            expect(cruise.currentPort).toBe(itinerary.ports[0]);
            expect(dover.ships).toContain(cruise);
        });

        it('can set sail', () => {
            cruise.setSail();
            
            expect(cruise.currentPort).toBeFalsy();
            expect(cruise.previousPort).toBe(dover);
            expect(dover.ships).not.toContain(cruise);
        });

        it('can dock at different port', () => {
            cruise.setSail();
            cruise.dock();
            
            expect(cruise.currentPort).toBe(calais);
            expect(calais.ships).toContain(cruise);
        });
        
        it('test there are no more docks', () => {
            cruise.setSail();
            cruise.dock();
    
            expect(() => cruise.setSail()).toThrowError('End of itinerary reached')
        });
    });
});
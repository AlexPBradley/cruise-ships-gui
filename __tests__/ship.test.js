/* globals describe it expect */
const Ship = require('../src/ship');

describe('ship', () => {
    describe('with ports and an itinerary', () => {

        let cruise;
        let dover;
        let calais;
        let itinerary;
        
        beforeEach(() => {
            dover = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Dover',
                ships: []
            };
            calais = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Calais',
                ships: []
            };
            itinerary = {
                ports: [dover, calais]
            };
            cruise = new Ship(itinerary);
        });
        
        it('gets added to port on instantiation', () => {
            expect(cruise).toBeInstanceOf(Object);
            expect(cruise.currentPort).toBe(itinerary.ports[0]);
            expect(dover.addShip).toHaveBeenCalledWith(cruise);
        });

        it('can set sail', () => {
            cruise.setSail();
            
            expect(cruise.currentPort).toBeFalsy();
            expect(dover.removeShip).toHaveBeenCalledWith(cruise);
        });

        it('can dock at different port', () => {
            cruise.setSail();
            cruise.dock();
            
            expect(cruise.currentPort).toBe(calais);
            expect(calais.addShip).toHaveBeenCalledWith(cruise);
        });
        
        it('test there are no more docks', () => {
            cruise.setSail();
            cruise.dock();
    
            expect(() => cruise.setSail()).toThrowError('End of itinerary reached')
        });
    });
});
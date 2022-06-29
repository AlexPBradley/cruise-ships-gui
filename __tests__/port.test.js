/* globals describe it expect */
const Port = require('../src/port');

describe('port', () => {
    describe('add and remove ships', () => {

    
        let testPort;
        let testShip1;
        let testShip2;
    
        beforeEach(() => {
            testPort = new Port('testPort');
            testShip1 = jest.fn();
            testShip2 = jest.fn();
        });

        it('set port', () => {
            expect(testPort.name).toBe('testPort');
        });
    
        it('can add ships', () => {
            testPort.addShip(testShip1);
        
            expect(testPort.ships).toContain(testShip1);
        });
    
        it('can remove ships', () => {    
            testPort.addShip(testShip1);
            testPort.addShip(testShip2);
            testPort.removeShip(testShip2);
        
            expect(testPort.ships).toEqual([testShip1]);
        
        });
    });
});
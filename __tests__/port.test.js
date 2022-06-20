/* globals describe it expect */
const Port = require('../src/port');

describe('port', () => {
    it('set port', () => {
        const Dover = new Port('Dover');

        expect(Dover.name).toBe('Dover');
    });
});
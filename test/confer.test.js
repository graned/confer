const confer = require('../src/confer');

describe('Confer', () => {
  context('when the given colleciton list is an object', () => {
    const objectCollection = {
      k1: ['elem1', 'elem3', 'elem2'],
      k2: ['elem1', 'elem2', 'elem3', 'elem4'],
      k3: ['elem2', 'elem1', 'elem3'],
      k4: ['elem1', 'elem2'],
      k5: ['elem1', 'elem2', 'elem7'],
    };

    context('and it finds matches', () => {
      const list = ['elem1', 'elem2'];
      it('should return matched results', () => {
        expect(confer(objectCollection, list), 'to equal', {
          k2: ['elem1', 'elem2', 'elem3', 'elem4'],
          k4: ['elem1', 'elem2'],
          k5: ['elem1', 'elem2', 'elem7'],
        });
      });
    });

    context('and does not finds matches', () => {
      it('should return empty object', () => {
        expect(confer(objectCollection, list), 'to equal', {});
      });
    });
  });

  context('when the given colleciton list is an array', () => {
    const arrayCollection = [
      ['elem1', 'elem3', 'elem2'],
      ['elem1', 'elem2', 'elem3', 'elem4'],
      ['elem2', 'elem1', 'elem3'],
      ['elem1', 'elem2'],
      ['elem1', 'elem2', 'elem7'],
    ];
    context('and it finds matches', () => {
      const list = ['elem2'];
      it('should return matched results', () => {
        expect(confer(arrayCollection, list), 'to equal', ['elem2', 'elem1', 'elem3']);
      });
    });

    context('and does not finds matches', () => {
      it('should return empty array', () => {
        expect(confer(arrayCollection, list), 'to equal', []);
      });
    });
  });
});
const expect = require('unexpected').clone();
const confer = require('./confer');

describe('Confer', () => {
  context('when the given colleciton list is an object', () => {
    const objectCollection = {
      k1: [{ deep: { deeper: 'elem1' } }, 'elem3', 'elem2'],
      k2: [{ deep: { deeper: 'elem1' } }, 2, 'elem3', 'elem4'],
      k3: ['elem2', 'elem1', 'elem3'],
      k4: [{ deep: { deeper: 'elem1' } }, 2],
      k5: ['elem3', 'elem2', 'elem7'],
    };

    context('and it finds matches', () => {
      const list = [{ deep: { deeper: 'elem1' } }, 2];
      it('should return matched results', () => {
        expect(confer(objectCollection, list), 'to exhaustively satisfy', {
          k2: [{ deep: { deeper: 'elem1' } }, 2, 'elem3', 'elem4'],
          k4: [{ deep: { deeper: 'elem1' } }, 2],
        });
      });
    });

    context('and does not finds matches', () => {
      const list = ['elem007'];
      it('should return empty object', () => {
        expect(confer(objectCollection, list), 'to exhaustively satisfy', {});
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
        expect(confer(arrayCollection, list), 'to equal', [['elem2', 'elem1', 'elem3']]);
      });
    });

    context('and does not finds matches', () => {
      const list = ['elem007'];
      it('should return empty array', () => {
        expect(confer(arrayCollection, list), 'to equal', []);
      });
    });
  });
});

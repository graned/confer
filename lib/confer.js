var R = require('rambda');

module.exports = (collection, list) => {
  var results = collection;
  var filter = (val, idx) => {
    results = R.filter(ce => R.equals(ce[idx], val), results);
  };
  var indexedMapper = R.addIndex(R.map);

  indexedMapper(filter, list);
  return results; 
};

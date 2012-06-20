require('./printDiamond.js');

assert = require('assert');

assert.arrayEqual = function(expected,actual) {
  if(expected.length != actual.length) {
    console.log('expected' + expected);
    console.log('actual' + actual);    
  }
  assert.equal(expected.length, actual.length);
  for(i=0; i < expected.length;i++) {
    assert.equal(expected[i],actual[i]);
  } 
}

assert.arrayEqual( diamond('A'), ['A'] );

assert.arrayEqual( diamond('B'), [' A','B B',' A']);

assert.arrayEqual( diamond('C'), 
  ['  A',
   ' B B',
   'C   C',
   ' B B',
   '  A']);

assert.arrayEqual( diamond('E'), 
  ['    A',
   '   B B',
   '  C   C',
   ' D     D',
   'E       E',
   ' D     D',
   '  C   C',
   '   B B',
   '    A']);


console.log('All tests passed');

const {expect} = require('chai');
const {average} = require('../average');

it('computes average of a list of numbers', ()=> {
  // floating point numbers cannot be compared for equality,
  // hence allowing a delta tolerance
  expect(average([1, 2, 3, 4])).to.be.approximately(2.5, 0.01);
});

it('reports the average as NaN on an empty list', ()=> {
  expect(average([])).to.be.NaN;
});

it('ignores NaN in the input TEST1', ()=> {
  expect(average([1, NaN, 2])).to.be.approximately(1.5, 0.01);
});

it('ignores NaN in the input TEST2', ()=> {
  expect(average([NaN, NaN, NaN])).to.be.NaN;
});

it('computes average of list of strings', ()=>{
  expect(average(["1", "2", "3", "4"])).to.be.approximately(2.5, 0.01);
})

it('ignore NaN in list of strings', ()=>{
  expect(average(["1", "2", NaN, "4"])).to.be.approximately(2.33, 0.01);
})
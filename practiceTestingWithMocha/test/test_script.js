var assert = require("assert");
var Calculate =  require('../script.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 to the argument 5',() =>{
      // SetUp
      const numInput = 5
      const expectedFactorial = 120
      // Exercise
      const result = Calculate.factorial(numInput)
      // Verify
      assert.equal(result, expectedFactorial)
    })
    
    it('returns 6 to the argument 3',() =>{
      // SetUp
      const numInput = 3
      const expectedFactorial = 6
      // Exercise
      const result = Calculate.factorial(numInput)
      // Verify
      assert.equal(result, expectedFactorial)
    })
    // Edge Case
    it('returns 1 to the argument 0',() =>{
      // SetUp
      const numInput = 0
      const expectedFactorial = 1
      // Exercise
      const result = Calculate.factorial(numInput)
      // Verify
      assert.equal(result, expectedFactorial)
    })

  });
});
/* eslint-disable indent */
let describe = require('mocha').describe
let it = require('mocha').it
let retirementBalance = require('calculations.js')
let expect = require('chai').expect

describe('calculations', () => {
  describe('retirementBalance', () => {
    it('returns the total balance of retirement balance', () => {
      // setup test data
      const currentAge = 40
      const currentIncome = 100000
      const incomeIncrease = 2
      const incomeContributed = 25
      const retirementAge = 65
      const retirementSavings = 200000
      const yearsRetired = 30
      const assetsReturn = 5

      // call the function with the test data
      // asserts what should be true
      expect(retirementBalance).to.equal(2132061.78)
    })
  })
})

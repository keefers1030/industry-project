/* eslint-disable max-len */
/* eslint-disable indent */
let describe = require('mocha').describe
let it = require('mocha').it
let retirementBalance = require('./calculations')
const retirementIncomePerYear = require('./calculations')
let yearsWithRetirementIncome = require('./calculations')


let expect = require('chai').expect

describe('calculations', () => {
  describe('retirementBalance', () => {
    it('returns the total balance of retirement balance', () => {
      // setup test data
      const currentAge = 40
      const currentIncome = 100000
      const incomeIncrease = .02
      const incomeContributed = .25
      const retirementAge = 65
      const retirementSavings = 200000
      const assetsReturn = .05

      // call the function with the test data
      let totalBalance = retirementBalance(currentAge, currentIncome, incomeIncrease, incomeContributed, retirementAge, retirementSavings, assetsReturn)

      // asserts what should be true
      expect(totalBalance).to.equal(2132061.78)
    })
  })

  describe('retirement income per year', () => {
    it('returns the amount distributed per year at retirement', () => {
      // setup test data
      // call the function with the test data
      // asserts what should be true
    })
  })

  describe('years with retirement income', () => {
    it('returns the amount of years until money runs out', () => {
      // setup test data
      // call the function with the test data
      // asserts what should be true
})
  })
})

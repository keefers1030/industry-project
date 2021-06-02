/* eslint-disable max-len */
// let currentAge = document.getElementbyId("currentAge")
// let currentIncome = document.getElementbyId("currentIncome")
// let incomeIncrease = parsefloat(document.getElementbyId("incomeIncrease")) / 100
// let incomeContributed = parsefloat(document.getElementbyId("incomeContributed")) / 100
// let retirementAge = document.getElementbyId("retirementAge")
// let retirementSavings = document.getElementbyId("retirementSavings")
// let assetsReturn = document.getElementbyId("assetsReturn")

// test data
const currentAge = 40
const currentIncome = 100000
const incomeIncrease = .02
const incomeContributed = .25
const retirementAge = 65
const retirementSavings = 200000
const assetsReturn = .05

// const yearsRetired = (retirementAge - currentAge)

const retirementBalance = () => {
  let balance = (
    (currentIncome * incomeContributed) *
    (((1 + assetsReturn) ** (retirementAge - currentAge)) - ((1 + incomeIncrease) ** (retirementAge - currentAge))) /
    (assetsReturn - incomeIncrease) + (retirementSavings * ((1 + assetsReturn) ** (retirementAge - currentAge)))
  )

  return balance.toFixed(2)
}

const retirementIncomePerYear = () => {

}

const yearsWithRetirementIncome = () => {

}

// calling function
console.log(retirementBalance())
module.exports = { retirementBalance, retirementIncomePerYear, yearsWithRetirementIncome }

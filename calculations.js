// let currentAge = document.getElementbyId("currentAge")
// let currentIncome = document.getElementbyId("currentIncome")
// let incomeIncrease = parsefloat(document.getElementbyId("incomeIncrease")) / 100
// let incomeContributed = document.getElementbyId("incomeContributed")
// let retirementAge = document.getElementbyId("retirementAge")
// let retirementSavings = document.getElementbyId("retirementSaving")
// let assetsReturn = document.getElementbyId("assetsReturn")

// test data
const currentAge = 40
const currentIncome = 100000
const incomeIncrease = 2
const incomeContributed = 25
const retirementAge = 65
const retirementSavings = 200000
const yearsRetired = 30
const assetsReturn = 5

const yearsRetired = (retirementAge - currentAge)

const retirementBalance = () => {

  (currentIncome * incomeContributed) *
  (((1 + assetsReturn) ^ (retirementAge - currentAge)) - ((1 + incomeIncrease)^(retirementAge - currentAge)) /
  (assetsReturn - incomeIncrease) + (retirementSavings * ((1 + assetsReturn) ^ (retirementAge - currentAge))))
}

const retirementIncomePerYear = () => {

}

const yearsWithRetirementIncome = () => {

}

module.exports = { retirementBalance, retirementIncomePerYear, yearsWithRetirementIncome }

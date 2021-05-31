let currentAge = document.getElementbyId("currentAge")
let currentIncome = document.getElementbyId("currentIncome")
let incomeIncrease = document.getElementbyId("incomeIncrease")
let incomeContributed = document.getElementbyId("incomeContributed")
let retirementAge = document.getElementbyId("retirementAge")
let retirementSavings = document.getElementbyId("retirementSaving")
let assetsReturn = document.getElementbyId("assetsReturn")

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

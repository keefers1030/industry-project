let currentIncome = document.getElementbyId("currentIncome").value
let incomeContributed = document.getElementbyId("incomeContributed").value
let assetsReturn = document.getElementbyId("assetsReturn").value
let currentAge = document.getElementbyId("currentAge").value
let incomeIncrease = document.getElementbyId("incomeIncrease").value
let retirementAge = document.getElementbyId("retirementAge").value


// (currentIncome * incomeContributed) *
// (((1 + assetsReturn)^(retirementAge - currentAge)) - ((1 + incomeIncrease)^(retirementAge - currentAge))
// /
// (assetsReturn - incomeIncrease) + (retirementSavings * ((1 + assetsReturn)^(retirementAge - currentAge))) 


const retirementBalance = () => {

}

module.exports = { retirementBalance }

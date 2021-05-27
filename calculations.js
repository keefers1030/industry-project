let currentIncome = document.getElementbyId()
let incomeContributed = document.getElementbyId()
let assetsReturn = document.getElementbyId()
let currentAge = document.getElementbyId()
let incomeIncrease = document.getElementbyId()
let retirementAge = document.getElementbyId()


// (currentIncome * incomeContributed) *
// (((1 + assetsReturn)^(retirementAge - currentAge)) - ((1 + incomeIncrease)^(retirementAge - currentAge))
// /
// (assetsReturn - incomeIncrease) + (retirementSavings * ((1 + assetsReturn)^(retirementAge - currentAge))) 


const retirementBalance = () => {

}

module.exports = { retirementBalance }

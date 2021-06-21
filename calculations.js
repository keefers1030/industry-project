/* eslint-disable max-len */

let currentAge = document.getElementById('currentAge')
let currentIncome = document.getElementById('currentIncome')
let incomeIncrease = (document.getElementById('incomeIncrease')) / 100
let incomeContributed = (document.getElementById('incomeContributed')) / 100
let retirementAge = document.getElementById('retirementAge')
let retirementSavings = document.getElementById('retirementSavings')
let assetsReturn = document.getElementById('assetsReturn')

// test data
// const currentAge = 40
// const currentIncome = 100000
// const incomeIncrease = .02
// const incomeContributed = .25
// const retirementAge = 65
// const retirementSavings = 200000
// const assetsReturn = .05

const yearsRetired = (90 - retirementAge)

const anticSpending = 120000

const retirementBalance = () => {
  let balance = (
    (currentIncome * incomeContributed) *
    (((1 + assetsReturn) ** (retirementAge - currentAge)) - ((1 + incomeIncrease) ** (retirementAge - currentAge))) /
    (assetsReturn - incomeIncrease) + (retirementSavings * ((1 + assetsReturn) ** (retirementAge - currentAge)))
  )
  
  console.log(balance)

  document.getElementById('balance').innerHTML = balance.toFixed(2)

  return balance.toFixed(2)
}
const retirementIncomePerYear = () => {
  let negativeYearsRetired = -yearsRetired
  let incomeBalance = (((assetsReturn * retirementBalance()) / (1 - (1 + assetsReturn) ** negativeYearsRetired)))

  return incomeBalance.toFixed(2)
}

const yearsWithRetirementIncome = () => {
  try {
    const yearsWithIncome = (Math.log((anticSpending / (anticSpending - retirementBalance() * assetsReturn))) / Math.log(1 + assetsReturn))

    return yearsWithIncome.toFixed(1)
  }
  catch (error) {
    console.alert('Put error message here', error) // 500 status error
  }
}



// calling function
// console.log(retirementBalance())
// console.log(retirementIncomePerYear())
// console.log(yearsWithRetirementIncome())

// module.exports = {
//   retirementBalance,
//   retirementIncomePerYear,
//   yearsWithRetirementIncome
// }

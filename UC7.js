const IS_PART_TIME = 1
const IS_FULL_TIME = 2
const PART_TIME_HRS = 4
const FULL_TIME_HRS = 8
const WAGE_PER_HR = 20
const MAX_WORKING_HRS = 160
const NO_OF_WORKING_DAYS = 20

function getWorkingHrs(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HRS
        case IS_FULL_TIME:
            return FULL_TIME_HRS
        default:
            return 0
    }
}

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HR
}

let totalEmpWage = 0
function sum(dailyWage){
    totalEmpWage += dailyWage
}

let totalEmpHrs = 0 
let totalWorkingDays = 0
let empDailyWageArr = new Array()
while(totalEmpHrs <= MAX_WORKING_HRS && totalWorkingDays < NO_OF_WORKING_DAYS){
    totalWorkingDays++
    empCheck = Math.floor(Math.random() * 10) % 3 
    let empHrs = getWorkingHrs(empCheck)
    totalEmpHrs +=   empHrs
    empDailyWageArr.push(calcDailyWage(empHrs))
}

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage
}

empDailyWageArr.forEach(sum)
console.log("UC7A - Employee Wage : " + totalEmpWage + " Employee Working Hours : " + totalEmpHrs + " Employee Working Days : " + totalWorkingDays )
console.log("UC7A - Employee Wage With Reduce : " + empDailyWageArr.reduce(totalWages, 0))

let dailyCount = 0
function mapWithDailyWage(dailyWage){
    dailyCount++
    return dailyCount + "=" + dailyWage
}

let mapWithDailyWageArr = empDailyWageArr.map(mapWithDailyWage)
console.log("UC7B - Daily Wage Map")
console.log(mapWithDailyWageArr)

function fullTimeWage(dailyWage){
    return dailyWage.includes("160")
}
let fullDayWageArr = mapWithDailyWageArr.filter(fullTimeWage)
console.log("UC7C - Full Time Wage Map")
console.log(fullDayWageArr)

console.log("UC7D - First Time Full Time Wage Was Earned On Day : " + mapWithDailyWageArr.find(fullTimeWage))

console.log("UC7E - Check All Element Have Full Time Wage : " + mapWithDailyWageArr.every(fullTimeWage))

function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80")
}

console.log("UC7F - Check If Any Element Has Part Time Wage : " + mapWithDailyWageArr.some(isAnyPartTimeWage))

function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays + 1
    return numOfDays
}

console.log("UC7G - Number Of Days Worked : " + empDailyWageArr.reduce(totalDaysWorked, 0))
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
let empWage = calcDailyWage(totalEmpHrs)
console.log("Employee Wage : " + empWage + " Employee Working Hours : " + totalEmpHrs + " Employee Working Days : " + totalWorkingDays)

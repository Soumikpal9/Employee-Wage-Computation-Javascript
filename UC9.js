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
let empDailyWageMap = new Map()
let empDailyHrsMap = new Map()
while(totalEmpHrs <= MAX_WORKING_HRS && totalWorkingDays < NO_OF_WORKING_DAYS){
    totalWorkingDays++
    empCheck = Math.floor(Math.random() * 10) % 3 
    let empHrs = getWorkingHrs(empCheck)
    totalEmpHrs += empHrs
    empDailyWageArr.push(calcDailyWage(empHrs))
    empDailyHrsMap.set(totalWorkingDays, empHrs)
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs))
}

const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal
}

let totalHrs = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0)
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0)
console.log("Employee Wage With Arrow : " + totalSalary + " Total Working Hours : " + totalHrs)

let nonWorkingDays = new Array()
let partWorkingDays = new Array()
let fullWorkingDays = new Array()

empDailyHrsMap.forEach((values, key) => {
    if(values == 8) fullWorkingDays.push(key)
    else if(values == 4)    partWorkingDays.push(key)
    else nonWorkingDays.push(key)
})

console.log("Full Working Days : " + fullWorkingDays)
console.log("Part Working Days : " + partWorkingDays)
console.log("Non Working Days : " + nonWorkingDays)
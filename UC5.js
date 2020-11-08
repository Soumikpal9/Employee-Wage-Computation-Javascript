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

let totalEmpHrs = 0 
let totalWorkingDays = 0
while(totalEmpHrs <= MAX_WORKING_HRS && totalWorkingDays < NO_OF_WORKING_DAYS){
    totalWorkingDays++
    empCheck = Math.floor(Math.random() * 10) % 3 
    totalEmpHrs += getWorkingHrs(empCheck)  
}
let empWage = totalEmpHrs * WAGE_PER_HR
console.log("Employee Wage : " + empWage + " Employee Working Hours : " + totalEmpHrs + " Employee Working Days : " + totalWorkingDays)

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
let empDailyHrsAndWageArr = new Array()
while(totalEmpHrs <= MAX_WORKING_HRS && totalWorkingDays < NO_OF_WORKING_DAYS){
    totalWorkingDays++
    empCheck = Math.floor(Math.random() * 10) % 3 
    let empHrs = getWorkingHrs(empCheck)
    totalEmpHrs += empHrs
    empDailyHrsAndWageArr.push({
        dayNum : totalWorkingDays,
        dailyHours : empHrs,
        dailyWage : calcDailyWage(empHrs),
        toString(){
            return '\nDay : ' + this.dayNum + ' => Working Hours : ' + this.dailyHours + ' => Wage : ' + this.dailyWage
        }
    })
}

let totalWages = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0).reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0)
let totalHours = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours > 0).reduce((totalHour, dailyHrsAndWage) => totalHour += dailyHrsAndWage.dailyHours, 0)
console.log("UC11A - Total Hours : " + totalHours + " Total Wage : " + totalWages)

process.stdout.write("UC11B Logging Full Working Days : ")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8).forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()))

let partWorkingDaysStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4).map(dailyHrsAndWage => dailyHrsAndWage.toString())
console.log("\nUC11C - Part Working Days : " + partWorkingDaysStrArr)

let nonWorkingDayNums = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours ==0).map(dailyHrsAndWage => dailyHrsAndWage.dayNum)
console.log("UC11D - Non Working Days Num : " + nonWorkingDayNums)
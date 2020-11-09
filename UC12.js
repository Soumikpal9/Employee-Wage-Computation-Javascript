class EmployeePayrollData{
    //Property
    id
    salary
    gender
    startDate

    //Constructor
    constructor(id, name, salary){
        this.id = id
        this.name = name
        this.salary = salary
    }

    //Getter and Setter Methods
    get name(){
        return this._name
    }
    set name(name){
        console.log("Setter")
        this._name = name
    }

    //Method
    toString(){
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000)
console.log(employeePayrollData.toString())
employeePayrollData.id = 0
employeePayrollData.name = "Jeff"
console.log(employeePayrollData.toString())
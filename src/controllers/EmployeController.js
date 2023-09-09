const { departmentExpense, employeeCreate } = require("../services/EmployeService")



exports.EmployeeCreate = async (req, res) => {
    let result = await employeeCreate(req);
    return res.status(200).json(result)
}




exports.departmentExpense = async (req, res) => {
    let result = await departmentExpense()
    return res.status(200).json(result)
}
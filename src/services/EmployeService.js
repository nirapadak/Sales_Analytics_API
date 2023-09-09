const EmployeeModel = require("../models/EmployeModel");

const employeeCreate = async (req) => {
  try {
    let data = await EmployeeModel.create(req.body);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: "something went wrong" };
  }
};

const departmentExpense = async () => {
  try {
    let totalExpenses = {
      $group: { _id: "$department", totalSalaryExpenses: {  $sum: { $add: ['$salary', '$expense'] }} },
    };

    let data = await EmployeeModel.aggregate([totalExpenses]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: "something went wrong" };
  }
};

module.exports = { employeeCreate, departmentExpense };

const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    expense: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

const EmployeeModel = mongoose.model("employee", employeeSchema);
module.exports = EmployeeModel;

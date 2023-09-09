const express = require("express");
const {
  ProductCreate,
  totalRevenue,
  quantityByProduct,
  topProducts,
  averagePrice,
  revenueByMonth,
  highestQuantity,
} = require("../controllers/ProductController");
const { departmentExpense, EmployeeCreate } = require("../controllers/EmployeController");

const router = express.Router();

router.post("/createProduct", ProductCreate);
router.get("/total-revenue", totalRevenue);
router.get("/quantity-by-product", quantityByProduct);
router.get("/top-products", topProducts);
router.get("/average-price", averagePrice);
router.get("/revenue-by-month", revenueByMonth);
router.get("/highest-quantity-sold", highestQuantity);


router.post("/createEmployee", EmployeeCreate);
router.get("/department-salary-expense", departmentExpense);

module.exports = router;

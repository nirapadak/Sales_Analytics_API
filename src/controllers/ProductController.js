const { ProductCreate, totalRevenue, quantityByProduct, topProducts, averagePrice, revenueByMonth, highestQuantity, departmentExpense } = require("../services/ProductService")

exports.ProductCreate = async (req, res) => {
    let result = await ProductCreate(req);
    return res.status(200).json(result)
}


exports.totalRevenue = async (req, res) => {
    let result = await totalRevenue()
    return res.status(200).json(result)
}

exports.quantityByProduct = async (req, res) => {
    let result = await quantityByProduct()
    return res.status(200).json(result)
}


exports.topProducts = async (req, res) => {
    let result = await topProducts()
    return res.status(200).json(result)
}

exports.averagePrice = async (req, res) => {
    let result = await averagePrice()
    return res.status(200).json(result)
}

exports.revenueByMonth = async (req, res) => {
    let result = await revenueByMonth()
    return res.status(200).json(result)
}


exports.highestQuantity = async (req, res) => {
    let result = await highestQuantity()
    return res.status(200).json(result)
}


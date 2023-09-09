const ProductModel = require("../models/ProductModel");

const ProductCreate = async (req) => {
  try {
    let data = await ProductModel.create(req.body);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: "something went wrong" };
  }
};

const totalRevenue = async () => {
  try {
    let calculateRevenue = {
      $group: {
        _id: null,
        totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
      },
    };

    let projectionStage = { $project: { _id: 0 } };

    let data = await ProductModel.aggregate([
      calculateRevenue,
      projectionStage,
    ]);

    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: "something went wrong" };
  }
};

const quantityByProduct = async () => {
  try {
    let quantity = {
      $group: { _id: "$product", totalQuantitySold: { $sum: "$quantity" } },
    };

    let data = await ProductModel.aggregate([quantity]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: "something went wrong" };
  }
};

const topProducts = async () => {
  try {
    let topProductsByRevenue = {
      $group: {
        _id: "$product",
        totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
      },
    };

    let sortedProducts = { $sort: { totalRevenue: -1 } };
    let limit = { $limit: 5 };

    let data = await ProductModel.aggregate([
      topProductsByRevenue,
      sortedProducts,
      limit,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: "something went wrong" };
  }
};

const averagePrice = async () => {
  try {
    let averageProductPrice = {
      $group: { _id: null, averagePrice: { $avg: "$price" } },
    };
    let projectionStage = { $project: { _id: 0 } };

    let data = await ProductModel.aggregate([
      averageProductPrice,
      projectionStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: "something went wrong" };
  }
};

const revenueByMonth = async () => {
  try {
    let projectionStage = {
      $project: {
        _id: 0,
        year: { $year: "$date" },
        month: { $month: "$date" },
        revenue: { $multiply: ["$quantity", "$price"] },
      },
    };

    let groupByDate = {
      $group: {
        _id: { year: "$year", month: "$month" },
        totalRevenue: { $sum: "$revenue" },
      },
    };

    let data = await ProductModel.aggregate([projectionStage, groupByDate]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: "something went wrong" };
  }
};

const highestQuantity = async () => {
  try {
    let groupByDate = {
      $group: {
        _id: { date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } } },
        maxQuantity: { $max: "$quantity" },
        product: { $first: "$product" },
      },
    };

    let sortByQuantity = { $sort: { maxQuantity: -1 } };
    let limit = { $limit: 1 };

    let data = await ProductModel.aggregate([
      groupByDate,
      sortByQuantity,
      limit,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: "something went wrong" };
  }
};



module.exports = {
  ProductCreate,
  totalRevenue,
  quantityByProduct,
  topProducts,
  averagePrice,
  revenueByMonth,
  highestQuantity,
};

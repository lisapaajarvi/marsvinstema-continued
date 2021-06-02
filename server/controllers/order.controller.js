const OrderModel = require("../models/order.model");
const { ProductModel } = require("../models/product.model");

exports.addNewOrder = async (req, res) => {
    const newOrder = {
        user: req.session.id,
        createdAt: new Date(),
        totalPrice: req.body.totalPrice,
        products: req.body.cart,
        shippingAddress: req.body.customer,
        shippingMethod: req.body.shippingMethod,
        isShipped: false
    }
    const addedOrder = await OrderModel.create(newOrder);

    for (const product of addedOrder.products) {
        const productInDB = await ProductModel.findOne({_id:product._id})
        productInDB.stock -= product.quantity
        productInDB.save()
      }
    res.status(201).json(addedOrder._id);
}

exports.getAllOrders = async (req, res) => {
    const orders = await OrderModel.find({});
    res.status(200).json(orders);
}

exports.getOrder = async (req, res) => {
    const order = await OrderModel.findOne({ _id: req.body._id });
    res.status(200).json(order);
}

exports.editOrderStatus = async (req, res) => {
    await OrderModel.findOneAndUpdate({ _id: req.body._id }, req.body);
    res.status(200).json("Order was updated");
}

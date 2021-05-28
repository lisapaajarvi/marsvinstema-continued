const OrderModel = require("../models/order.model");

exports.addNewOrder = async (req, res) => {
    const order = {
        user: req.session.id,
        createdAt: new Date(),
        totalPrice: req.body.totalPrice,
        products: req.body.products,
        shippingAddress: req.body.shippingAddress,
        shippingMethod: req.body.shippingMethod
    }
    const addedOrder = await OrderModel.create(order);
    res.status(201).json(addedOrder);
}

exports.getAllOrders = async (req, res) => {
    const orders = await OrderModel.find({});
    res.status(200).json(orders);
}

exports.getOrder = async (req, res) => {
    const { _id } = req.body;
    const order = await OrderModel.findOne({ _id: _id });
    res.status(200).json(order);
}

exports.editOrderStatus = async (req, res) => {
    const { _id } = req.body;
    const updatedOrder = await OrderModel.findOneAndUpdate({ _id: _id }, req.body);
    res.status(200).json(updatedOrder);
}


const UserModel = require("../models/shippingmethod.model");
const { shippingMethodModel }  = require("../models/shippingmethod.model");
const OrderModel = require("../models/order.model")

exports.getAllShippingMethods = async (req, res) => {
    console.log('Shipping method');
    const shippingMethod = await shippingMethodModel.find({})
    console.log(shippingMethod)
    res.status(200).json(shippingMethod);
}


exports.getChosenShippingMethod = async (req, res) => {
    const {_id} = req.body
    const shippingMethod = await shippingMethodModel.find({id:_id})
    if(shippingMethod){
       res.status(200).json(shippingMethod, "Here is your shippingmethod");
       return shippingMethod;
    } else {
        res.status(500).json("Cant find your object!")
    }

}





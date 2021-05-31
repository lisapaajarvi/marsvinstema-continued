
const { ShippingMethodModel }  = require("../models/shippingmethod.model");

exports.getAllShippingMethods = async (req, res) => {
    console.log('Shipping method');
    const shippingMethods = await ShippingMethodModel.find({})
    console.log(shippingMethods)
    res.status(200).json(shippingMethods);
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

exports.addShippingMethod = async (req, res) => {

    const newShippingMethod = {
        name: req.body.name,
        expectedDeliveryTime: req.body.time,
        price: req.body.price
    };

    const addedShippingMethod = await ShippingMethodModel.create(newShippingMethod);
      res.status(201).json(addedShippingMethod);
}





const UserModel = require("../models/shippingmethod.model");
const shippingMethodModel = require("../models/shippingmethod.model");
const UserModel = require("../models/order.model")

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
        res.status(400).json("Cant find your object!")
    }

}


// exports.getChosenShippingMethod = async (req, res) => {
//     const {_id} = req.body
//     const order = req.body.OrderModel
//     const orderId = await OrderModel.find({_id:_id})
//     const shippingMethod = await shippingMethodModel.find({id:_id})

//     if(orderId === shippingMethod ){
//         for(var shippingMethod in order){
//           order.create({
//              id: req.body.id,
//              user: req.body.user,
//              createdAt: req.body.createdAt,
//              totalPrice: req.body.totalPrice,
//              products: [],
//              shippingAdress: Adress,
//              shippingMethod: shippingMethod
//          })
//        } 
//        res.status(200).json(shippingMethod, "Here is you shippingmethod");
//        console.log(shippingMethod, 'choosenShipping');
//        return shippingMethod;
//     }

// }



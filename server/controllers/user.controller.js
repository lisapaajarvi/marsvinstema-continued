const bcrypt = require('bcrypt');
const UserModel = require("../models/user.model");

exports.register = async (req, res) => {    
    const { username, email, password } = req.body;
    
    // check if email exists
    const existingUser = await UserModel.findOne({email: email});
    if (existingUser) {
        return res.status(400).json("Email already exists");
    }
    
    // hash password and save user 
    const hashedPassword = await bcrypt.hash(password, 10);
    const userToSave = {
        username: username,
        email: email,
        password: hashedPassword,
        access: "user"
    }
    const newUser = await UserModel.create(userToSave);
    // newUser.password = undefined;
    delete newUser.password;
    res.status(201).json(newUser);
    console.log(newUser)
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({email:email}).select('+password');

    if (!user || !await bcrypt.compare(password, user.password)) {    
        return res.status(401).json("Incorrect password or email!");
    }
    else {
        //create session
        req.session.id = user._id
        req.session.username = user.username
        req.session.access = user.access
        req.session.email = user.email
        delete user.password;
        res.status(200).json(user); 
    }   
};

exports.logout = async (req, res) => {
    req.session = null;
    res.status(200).json("logged out");
};

exports.getLoggedInUser = async (req, res) => {
    if (!req.session.id) {
        return res.status(401).json('You must login');
    }
    const user = await UserModel.findOne({ _id: req.session.id });
    res.status(200).json(user); 
}

exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find({});
    res.status(200).json(users);
}

//ADDRESS FUNCTIONS

exports.newAddress = async (req, res) => {    
    const newAddress = 
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNr: req.body.phoneNr,
            streetAddress: req.body.streetAddress,
            zipCode: req.body.zipCode,
            city: req.body.city,
        }
    const user = await UserModel.findOneAndUpdate({ _id: req.body._id }, {address: newAddress});

    res.status(201).json(newAddress);
}

exports.getAddress = async (req, res) => {
    const user = await UserModel.findOne({ _id:req.body._id });
    if(user.address) {
        res.status(200).json(user.address); 
    }
    else {
        res.status(401).json("this user has no address")
    }
}

exports.deleteAddress = async (req, res) => {
    await UserModel.findOneAndUpdate({ _id: req.body._id }, {address: null});
    res.status(200).json("address was deleted"); 
}



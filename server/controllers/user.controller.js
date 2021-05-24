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
    const user = await UserModel.findOne({email:email});

    if (!user || !await bcrypt.compare(password, user.password)) {    
        return res.status(401).json("Incorrect password or email!");
    }
    else {
        //create session
        req.session.username = user.username
        req.session.access = user.access
        req.session.email = user.email
        res.status(200).json(user); 
    }   
};

exports.logout = async (req, res) => {
    req.session = null;
    res.status(200).json("logged out");
};

exports.getOneUser = async (req, res) => {
    const { _id } = req.body;
    const user = await UserModel.findOne({_id:_id});
    user.password = undefined;
    res.status(200).json(user); 
}

exports.getAllUsers = async (req, res) => {
    //lägg in middleware för admin check
    console.log("hej")
    const users = await UserModel.find({});
    console.log(users)
    res.status(200).json(users);
}



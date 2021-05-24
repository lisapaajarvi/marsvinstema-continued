const bcrypt = require('bcrypt');

const UserModel = require("../models/user.model");

exports.register = async (req, res) => {    
    const { username, email, password } = req.body;
    
    // check if email exists
    const existingUser = await UserModel.findOne({email: email});
    if (existingUser) {
        return res.status(400).json("Username already exists");
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
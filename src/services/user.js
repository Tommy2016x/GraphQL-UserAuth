const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const {AuthenticationError} = require('apollo-server-express'); 

const signUp = async (email,password) => {
    try{
        const user = await User.findOne({
            email:email
        })

        if(user)
            throw new AuthenticationError('user already exists')

        const hashedPass = bcrypt.hashSync(password)
        
        const newUser = await User.create({
            email,
            password: hashedPass    
        })

        await newUser.save();

        const today = new Date();
        const expirationDate = new Date(today);
        expirationDate.setDate(today.getDate() + 60);
        
        return jwt.sign({
            email,
            exp: parseInt(expirationDate.getTime() / 1000, 10),
        }, 'secret');

    } catch(err){
        throw new AuthenticationError('Invalid information');
    }
        
   
}

const login = async (email,password) => {
    try{
        const user = await User.findOne({
            email
        })

        const correctPass = bcrypt.compareSync(password,user.password);

        if(!user || !correctPass)
            throw new AuthenticationError('wrong login info')
        
        const today = new Date();
        const expirationDate = new Date(today);
        expirationDate.setDate(today.getDate() + 60);
        
        return jwt.sign({
            email,
            exp: parseInt(expirationDate.getTime() / 1000, 10),
        }, 'secret');

    } catch(err){
        throw new AuthenticationError('Invalid information')
    }
}

module.exports =  {signUp,login}
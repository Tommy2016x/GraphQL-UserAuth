// import {AuthenticationError} from 'apollo-server-express';

const User = require('../../../models/user');

const user = async (root,args) => {

    try{
        const {id} = args;

        const user = await User.findById(id);

        return user;

    } catch(err){
        throw err
    }
}

module.exports = user
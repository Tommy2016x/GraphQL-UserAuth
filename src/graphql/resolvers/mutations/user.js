const userServices = require('../../../services/user');

const signUp = async (root,args) => {
    const {email,password} = args;

    try{
        const token = userServices.signUp(email,password)
        return token;

    } catch(err){
        throw err;
    }
}

const logIn = async(root,args) => {
    const {email,password} = args;
    console.log(args);

    try{
        const token = userServices.login(email,password);
        return token;

    }catch(err){
        throw err;
    }
}

module.exports = {signUp,logIn};
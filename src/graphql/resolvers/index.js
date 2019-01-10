const {signUp,logIn} = require('./mutations/user');
const user = require('./queries/user');


const resolvers = {
    Query:{
        user
    },
    Mutation:{
        signUp,
        logIn
    }
}

module.exports = resolvers;
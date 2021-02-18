const User = require('../models/usersModel');  

module.exports = {
    Query: {
      users: async () => await User.find({}),
    },

    Mutation: {
        createUser: async (parent, args) => {

            let user = new User({
                firstname : args.input.firstname
            })
            const userSave = user.save();
            return userSave;
        },
    }
};
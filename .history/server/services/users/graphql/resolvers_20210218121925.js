const User = require('../models/usersModel');  

module.exports = {
    Query: {
      users: () => User.find({}),
    },

    Mutation: {
        createUser: (args) => {
            let user = new User({
                firstname : args.firstname
            })
            const userSave = user.save();
            console.log(userSave)
            return userSave;
        },
    }
};
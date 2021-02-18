const User = require('../models/usersModel');  

module.exports = {
    Query: {
      users: () => User.find({}),
    },

    Mutation: {
        createUser: (args) => {
            console.log(args.firstname)
            let user = new User({
                firstname : 'sofiane'
            })
            const userSave = user.save();
            return userSave;
        },
    }
};
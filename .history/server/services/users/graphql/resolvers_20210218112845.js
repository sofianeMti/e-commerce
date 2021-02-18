const User = require('../models/usersModel');  

module.exports = {
    Query: {
      users: () => User.find({}),
    },

    Mutation: {
        createUser: (args) => {
            let user = new User({
                firstname : args.input.firstname
            })
            user.save();
            // return userSave;
        },
    }
  };
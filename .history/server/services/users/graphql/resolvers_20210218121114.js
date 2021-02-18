const User = require('../models/usersModel');  

module.exports = {
    Query: {
      users: () => User.find({}),
    },

    Mutation: {
        createUser: (args) => {
            console.log(args.firstname)
            console.log('okokok')
            let user = new User({
                firstname : args.firstname
            })
            const userSave = user.save();
            return userSave;
        },
    }
  };
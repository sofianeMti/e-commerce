const User = require('../models/usersModel');

// const users = [
//     {
//       id: '1',
//       firstname: 'sofiane',
//     },
//     {
//       id: '2',
//       firstname: 'samir',
//     },
//   ];
  

module.exports = {
    Query: {
      users: () => User.find({}),
    },

    Mutation: {
        createUser: (args) => {
            const user = new User({
                firstname : args.firstname
            })
            const userSave = user.save();
            return userSave;
        },
    }
  };
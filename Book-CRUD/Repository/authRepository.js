const User = require('../Domain/models/User');

exports.findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

exports.createUser = async (user) => {
  return await User.create(user);
};

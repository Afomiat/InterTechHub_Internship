const User = require('../domain/models/User');

exports.findUserByEmail = async (email) => {
  val = await User.findOne({ email });
  console.log("User found by email:", val);
  return val;
};

exports.createUser = async (user) => {
  console.log("User being created:----------------", user);
  return await User.create(user);
};

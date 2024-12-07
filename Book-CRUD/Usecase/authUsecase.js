const { findUserByEmail, createUser } = require('../Repository/authRepository');
const { hashPassword, comparePassword } = require('../internal/utils/userUtil');
const { createAccessToken } = require('../internal/utils/tokenUtil');

exports.signup = async (userData) => {
  const existingUser = await findUserByEmail(userData.email);
  if (existingUser) throw new Error('User already exists');

  const hashedPassword = await hashPassword(userData.password);
  userData.password = hashedPassword;

  const newUser = await createUser(userData);
  return newUser;
};

exports.login = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = createAccessToken(user);
  return { user, token };
};

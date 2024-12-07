const { findUserByEmail, createUser } = require('../repository/authRepository');
const { hashPassword, comparePassword } = require('../internal/utils/userUtil');
const { createAccessToken } = require('../internal/utils/tokenUtil');

exports.signup = async (userData) => {
  const existingUser = await findUserByEmail(userData.email);
  if (existingUser) throw new Error('User already exists');

  // Hash the password once
  const hashedPassword = await hashPassword(userData.password);
console.log("Hashed Password during signup:", hashedPassword);

userData.password = hashedPassword;
console.log("Password being saved to DB:", userData.password);



  const newUser = await createUser(userData);
  return newUser;
};


  
  

exports.login = async (email, password) => {
  console.log(`Login attempt for email: ${email}`);
  const user = await findUserByEmail(email);
  if (!user) {
    console.error('User not found');
    throw new Error('Invalid credentials-Email');
  }

  console.log('Stored hashed password:', user.password);
  console.log('Input password:', password);

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    console.error('Password mismatch');
    throw new Error('Invalid credentials-Password');
  }

  console.log('Password match successful');
  const token = createAccessToken(user);
  return { user, token };
};

  
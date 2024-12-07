const bcrypt = require('bcryptjs');

exports.hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

exports.comparePassword = async (password, hashedPassword) => {
  console.log('Hashed Password (from DB):', hashedPassword);
  console.log('Input Password (plain text):', password);

  const isMatch = await bcrypt.compare(password, hashedPassword);
  console.log('Password comparison result:', isMatch);
  return isMatch;
};

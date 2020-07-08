const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getSignedJwtToken = user =>
  jwt.sign(
    { id: user.user_id, email: user.email, created_on: user.created_on },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE
    }
  );

exports.hashPasword = async password => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

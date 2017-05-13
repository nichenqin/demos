const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true, required: [true, 'email is required'] },
  password: { type: String, required: [true, 'password is required'] }
});

// on save hock, encrypt password
// before saving a model, run this function
UserSchema.pre('save', function (next) {
  // get access to user model
  const user = this;

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, function (err, isMatch) {
      err ? reject(err) : resolve(isMatch);
    });
  });
};

const User = mongoose.model('user', UserSchema);

module.exports = User;

const crypto = require('crypto');

function generateRandomPassword(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?/[]{},.';
  const password = [];
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password.push(charset[randomIndex]);
  }
  
  return password.join('');
}
module.exports = {generateRandomPassword};
let users = require("../utils/users");

const validateRegister = (email, username, password) => {
  if (!email || !username || !password) throw new Error("Missing Data");
  const foundUser = users.find((el) => el.user === username);
  if (!foundUser) {
    users.push({
      user: username,
      pass: password,
    });
    return true
  }
  return false
};

module.exports = { validateRegister };

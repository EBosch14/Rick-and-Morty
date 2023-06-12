const { username, password } = require("../utils/users");

const validateUser = (user, pass) => {
  if (!user || !pass) throw new Error("Missing data");
  if (user === username && pass == password) return {access : true}
  return {access : false}
};

module.exports = { validateUser };

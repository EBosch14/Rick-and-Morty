const { username, password } = require("../utils/users");

const validateUser = (user, pass) => {
  if (!user || !pass) throw new Error("Missing data");
  return {access : (user === username && pass == password)}
};

module.exports = { validateUser };

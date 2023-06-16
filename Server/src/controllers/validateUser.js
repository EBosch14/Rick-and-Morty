const users = require("../utils/users");

const validateUser = (username, password) => {
  if (!username || !password) throw new Error("Missing data");
  const foundUser = users.find(
    (el) => el.user === username && el.pass === password
  );
  return { access: !!foundUser };
};

module.exports = { validateUser };

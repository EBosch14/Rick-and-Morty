const { myFavorites } = require("../utils/favorites");

const deleteFavorites = (id) => {
  if (!id) throw new Error("Missing data");
  const indexToRemove = myFavorites.findIndex((el) => el.id === Number(id));
  if (indexToRemove === -1) throw new Error("Character not found");
  myFavorites.splice(indexToRemove, 1);
  return myFavorites;
};

module.exports = { deleteFavorites };

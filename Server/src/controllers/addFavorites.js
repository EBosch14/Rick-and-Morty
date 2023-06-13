const { myFavorites } = require("../utils/favorites");

const addFavorites = (character) => {
  if (!character) throw new Error("Missing data");
  const hasCharacter = myFavorites.find((el) => el.id === character.id);
  if (hasCharacter) throw new Error("This character is already included");
  myFavorites.push(character);
  return myFavorites;
};

module.exports = { addFavorites };

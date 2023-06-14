export function characterExists(characters, id) {
  return characters.some(
    (character) => character.id.toString() === id.toString()
  );
}
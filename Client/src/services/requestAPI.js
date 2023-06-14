import axios from 'axios'

export async function requestAPI(characters, setCharacters, id) {
  try {
    const response = await axios.get(`http://localhost:4444/rickandmorty/character/${id}`)
    const data = response.data
    if (data.name) {
      setCharacters((prevState) => [...prevState, data])
      return characters
    } else {
      window.alert("Character not found!");
    }
  } catch (error) {
    window.alert("Failed to fetch character. Please try again.");
    console.error(new Error(error))
  }
}
import axios from "axios";

export async function validateLogin(userData) {
  try {
    const response = await axios.post(
      "http://localhost:4444/rickandmorty/login", userData
    );
    const data = response.data;
    return data
  } catch (error) {
    throw error
  }
}

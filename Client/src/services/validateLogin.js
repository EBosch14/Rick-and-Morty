import axios from "axios";

export async function login(userData) {
  try {
    const { data } = await axios.get(
      `http://localhost:4444/rickandmorty/login?user=${userData.username}&pass=${userData.password}`
    );
    const { access } = data;
    return access;
  } catch (error) {
    throw new Error(error);
  }
}



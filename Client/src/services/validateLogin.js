import axios from "axios";

export async function validateLogin(userData, setAccess, access, navigate) {
  try {
    const response = await axios.get(
      `http://localhost:4444/rickandmorty/login?user=${userData.username}&pass=${userData.password}`
    );
    const data = response.data;
    setAccess(data.access);
    access && navigate('/home')
  } catch (error) {
    throw new Error(error);
  }
}

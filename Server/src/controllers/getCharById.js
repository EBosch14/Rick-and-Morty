require("dotenv").config();
const axios = require("axios");
const URL = process.env.API_URL;

const getCharById = async (id) => {
  try {
    const response = await axios.get(`${URL}${id}`);
    const data = response.data;
    if (!data) throw new Error("Character not found");
    return {
      id: data.id,
      status: data.status,
      name: data.name,
      species: data.species,
      origin: data.origin?.name,
      image: data.image,
      gender: data.gender,
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getCharById };

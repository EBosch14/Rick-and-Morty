require("dotenv").config();
const axios = require("axios");
const URL = process.env.API_URL;

const getCharById = (id) => {
  axios
    .get(`${URL}${id}`)
    .then(({ data }) => {
      if (!data) throw Error("Character not found");
      const character = {
        id: data.id,
        status: data.status,
        name: data.name,
        species: data.species,
        origin: data.origin?.name,
        image: data.image,
        gender: data.gender,
      };
      return character;
    })
    .catch((err) => Error(err));
};

module.export = {
  getCharById,
};

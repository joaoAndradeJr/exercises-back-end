const plantsModels = require('../models/plants');

const getAll = async () => {
  const allPlants = await plantsModels.getAll();
  return allPlants;
};

module.exports = {
  getAll,
};

const plantsServices = require('../services/plants');

const getAll = async (_req, res) => {
  const allPlants = await plantsServices.getAll();
  res.status(200).json(allPlants);
};

module.exports = {
  getAll,
};

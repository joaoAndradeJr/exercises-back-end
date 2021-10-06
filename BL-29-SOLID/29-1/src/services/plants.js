const plantsModels = require('../models/plants');

const getAll = async () => {
  const allPlants = await plantsModels.getAll();
  return { status: 200, message: allPlants };
};

const getById = async (id) => {
  const plant = await plantsModels.getById(parseInt(id));
  if (!plant) return { status: 404, message: 'Not found' };
  return { status: 200, message: plant };
};

const remove = async (id) => {
  const deleted = await plantsModels.remove(parseInt(id));
  if (!deleted) return { status: 404, message: 'Not found' };
  return { status: 200, message: 'Deleted' };
};

module.exports = {
  getAll,
  getById,
  remove,
};

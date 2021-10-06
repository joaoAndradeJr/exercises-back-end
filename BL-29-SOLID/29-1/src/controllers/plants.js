const plantsServices = require('../services/plants');

const getAll = async (_req, res) => {
  const { status, message } = await plantsServices.getAll();
  res.status(status).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await plantsServices.getById(id);
  res.status(status).json(message);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await plantsServices.remove(id);
  res.status(status).json(message);
};

module.exports = {
  getAll,
  getById,
  remove,
};

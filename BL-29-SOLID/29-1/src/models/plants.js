const connection = require('./connection');
const { ObjectID } = require('mongodb');

const getAll = async () => {
  const db = await connection();
  const result = await db.collection('plants').find().toArray();
  return result;
};

const getById = async (id) => {
  const db = await connection();
  const result = await db.collection('plants').findOne({ id: id });
  return result;
};

const remove = async (id) => {
  const db = await connection();
  const result = await db.collection('plants').deleteOne({ id: id });
  return result;
};

module.exports = {
  getAll,
  getById,
  remove,
};

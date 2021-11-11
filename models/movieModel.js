const mongoConnection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await mongoConnection.getConnection();

  const { insertedId: id } = await moviesCollection
    .collection('movies')
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
  };
};

module.exports = {
  create,
};

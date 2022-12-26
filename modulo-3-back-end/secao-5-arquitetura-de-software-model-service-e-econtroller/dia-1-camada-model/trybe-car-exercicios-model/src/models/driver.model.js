const connection = require('./connection');

const getDrivers = async () => {
  const [result] = await connection.execute('SELECT * FROM drivers');
  return result;
};

const getDriversById = async (id) => {
  const [[result]] = await connection.execute('SELECT * FROM drivers WHERE id = ?', [id]);
  return result;
};

module.exports = {
  getDrivers,
  getDriversById,
};
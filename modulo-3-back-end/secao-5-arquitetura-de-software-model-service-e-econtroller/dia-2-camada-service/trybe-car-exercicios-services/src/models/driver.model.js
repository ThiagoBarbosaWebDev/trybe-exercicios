const connection = require('./connection');

const findAllDrivers = async () => {
  const [result] = await connection.execute('SELECT * FROM drivers');
  console.log(result);
  return result;
};

const getDriversById = async (id) => {
  const [[result]] = await connection.execute('SELECT * FROM drivers WHERE id = ?', [id]);
  return result;
};

module.exports = {
  findAllDrivers,
  getDriversById,
};
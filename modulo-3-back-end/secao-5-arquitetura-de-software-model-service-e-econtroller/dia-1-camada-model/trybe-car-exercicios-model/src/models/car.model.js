const snakeize = require('snakeize');
const connection = require('./connection');

const postCar = async (car) => {
  const columns = Object.keys(snakeize(car))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(car)
    .map((_key) => '?')
    .join(', ');

  const carValues = Object.values(car);

  const [{ insertId }] = await connection
    .execute(`INSERT INTO cars (${columns}) VALUE (${placeholders})`, [...carValues]);
  console.log(insertId);

  return insertId;
};

const getCarById = async (id) => {
  const [[result]] = await connection.execute('SELECT * FROM cars WHERE id = ?', [id]);
  return result;
};

module.exports = {
  postCar,
  getCarById,
};
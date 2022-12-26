const { carModel } = require('../models');

const createCar = async (carObj) => {
  const [result] = await carModel.postCar(carObj);
  return { type: null, message: result };
};

module.exports = {
  createCar,
}

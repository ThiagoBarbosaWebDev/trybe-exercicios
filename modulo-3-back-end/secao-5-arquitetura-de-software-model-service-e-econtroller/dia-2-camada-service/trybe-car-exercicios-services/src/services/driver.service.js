const driverModel = require('../models/driver.model');

const getDrivers = async () => {
  const result = await driverModel.findAllDrivers();
  return {type: null, message: result}
};

module.exports = {
  getDrivers,
};
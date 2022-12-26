const { expect } = require('chai');
const sinon = require('sinon');
const { driverModel } = require('../../../src/models');
const { driverService } = require('../../../src/services');
const { mockModelFindAllDriversResult } = require('./mocks/driver.service.mock');

describe('Testes de unidade do service de drivers', function () {
  afterEach(sinon.restore);
  it('Realizando uma operação getDrivers com o service drivers', async function () {
    //  Arrange
    sinon.stub(driverModel, 'findAllDrivers').resolves(mockModelFindAllDriversResult)
    const mockedExpectedResult = { type: null, message: mockModelFindAllDriversResult }
  
    // Act
    const expectedResult = await driverService.getDrivers();
    // Assert
    expect(expectedResult).to.be.deep.equal(mockedExpectedResult);
  });
  // it('Realizando uma operação getDrivers com o service drivers', async function () {

  // });
})


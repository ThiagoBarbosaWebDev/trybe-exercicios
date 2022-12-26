const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { getDrivers } = require('../../../src/models/driver.model');
const { mockDrivers } = require('./mocks/driver.model.mock');

describe('Testes de unidade do model de pessoas motoristas', function () {
  afterEach(sinon.restore);

  it('Recuperando a lista de pessoas motoristas', async function () {
    sinon.stub(connection, 'execute').resolves([mockDrivers]);
    const result = await getDrivers();
    expect(result).to.be.deep.equal(mockDrivers);
  });
});
const { expect } = require('chai');
const sinon = require('sinon');
const { passengerModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { passengers, newPassenger } = require('./mocks/passenger.model.mock');

describe('Testes de unidade do model de pessoas passageiras', function () {
  afterEach(sinon.restore);

  it('Cadastrando uma pessoa passageira', async function () {
    const spy = sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);
    await passengerModel.insert(newPassenger);
    const arg1 = 'INSERT INTO passengers (name, email, phone) VALUE (?, ?, ?)';
    const arg2 = ['Bruce Lane', 'bruce.lane@acme.com', '(77) 8179-0943'];
    sinon.assert.calledWith(spy, arg1, arg2);
  });

  it('Recuperando a lista de pessoas passageiras', async function () {
    sinon.stub(connection, 'execute').resolves([passengers]);
    const result = await passengerModel.findAll();
    expect(result).to.be.deep.equal(passengers);
  });

  it('Recuperando uma pessoa passageira a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[passengers[0]]]);
    const result = await passengerModel.findById(1);
    expect(result).to.be.deep.equal(passengers[0]);
  });
});

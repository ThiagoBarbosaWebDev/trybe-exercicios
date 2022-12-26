const { expect } = require('chai');
const sinon = require('sinon');
const { postCar } = require('../../../src/models/car.model');
const connection = require('../../../src/models/connection');

const expected = 1;

const payload = {
  model: 'Renault Sandero',
  color: 'Branco',
  licensePlate: 'NCA-0956',
};

describe('Testes de unidade do model de carros', function () {
  afterEach(sinon.restore);

  it('cars/post: Cadastrando um carro', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: expected }]);
    const result = await postCar(payload);
    expect(result).to.be.equal(expected);
  });

  // it('cars/get: Cadastrando uma pessoa passageira', async function () {
  //   const id = 1;

  //   const expected = {
  //     id: 2,
  //     model: 'Volkswagen Gol',
  //     color: 'Vermelho',
  //     licensePlate: 'DZG-4376',
  //   };

  //   sinon.stub(connection, 'execute').resolves(expected);
  //   // const result = await passengerModel.insert(newPassenger);
  //   expect(result).to.equal(expected);
  // });

});
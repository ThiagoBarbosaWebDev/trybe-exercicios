const sum = require('./script-01');

describe('Requisito 1', () =>{
  it('Testa de a soma é igual a 9', () => {
    expect(sum(4,5)).toBe(9)
  })
})
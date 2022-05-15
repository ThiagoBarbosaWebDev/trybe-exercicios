const sum = require('./script-01');

describe('Requisito 1', () =>{
  it('Testa de a soma é igual a 9', () => {
    expect(sum(4,5)).toBe(9)
  })
  it('Testa de a soma é igual a 0', () => {
    expect(sum(0,0)).toBe(0)
  })
  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
    expect(() => sum(4,'5')).toThrow()
  })
  it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4,'5')).toThrow('parameters must be numbers')
  })
})
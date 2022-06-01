const uppercase = require('./script-07');

describe('testa função async uppercase', () => {
  it('Teste 1 - testa se realmente retorna o esperado', (done) => {
    uppercase('test', (str) => {
      try {expect(str).toBe('TEST');
      done()
    } catch (error) {
      done(error)
    }
    })
  })
})
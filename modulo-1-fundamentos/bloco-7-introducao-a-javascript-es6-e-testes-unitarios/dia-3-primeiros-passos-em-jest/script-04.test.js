const {encode, decode} = require('./script-04');

describe('Requisito 1', () => {
  it('Ambos: teste se encode e decode são funções;', () => {
    expect(typeof encode && typeof decode).toBe('function')
  })
  it('Encode: teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5 respectivamente', () => {
    expect(encode('aeiou')).toBe('12345')
  })
  it('Decode: teste se as strings 1, 2, 3, 4, 5 são convertidas em 1, 2, 3, 4 e 5 respectivamente', () => {
    expect(decode('12345')).toBe('aeiou')
  })
  it('Ambos: teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(`${decode('67890')} ${encode('qwrtypsdfghjklçzxcvbnm')}`).toBe('67890 qwrtypsdfghjklçzxcvbnm')
  })
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(`${decode('67890')} ${encode('qwrtypsdfghjklçzxcvbnm')}`).toHaveLength(28)
  })
})

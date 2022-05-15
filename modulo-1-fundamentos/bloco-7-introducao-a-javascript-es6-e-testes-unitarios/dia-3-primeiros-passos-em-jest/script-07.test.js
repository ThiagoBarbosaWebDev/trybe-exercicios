const searchEmployee = require('./script-07');

describe('Requisito 1', () => {
  it('Verifica se é uma função', () => {
    expect(typeof searchEmployee).toBe('function')
  })
  it('Verifica se é uma função', () => {
    expect(typeof searchEmployee('4678-2', 'firstName')).toBe('string')
  })
  it('Verifica se é uma função', () => {
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul')
  })
  it('Verifica se é uma função', () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds')
  })
  it('Verifica se é uma função', () => {
    expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend'])
  })
  it('Verifica se é uma função', () => {
    expect(searchEmployee('4678-2', 'foobar')).toBe(undefined)
  })
  it('Verifica se é uma função', () => {
    expect(() => searchEmployee('4678-22', 'specialities')).toThrow();
  })
  it('Verifica se é uma função', () => {
    expect(() => searchEmployee('4678-22', 'specialities')).toThrowError('ID não identificada');
  })
})
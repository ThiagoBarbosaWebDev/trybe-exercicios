const formatName = (string) => ({fullName: string, email: `${string.split(' ').join('_').toLowerCase()}@trybe.com`})

const newEmployees = (createIdValueHandler) => {
  const employees = {
    id1: createIdValueHandler('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createIdValueHandler('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createIdValueHandler('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(formatName))

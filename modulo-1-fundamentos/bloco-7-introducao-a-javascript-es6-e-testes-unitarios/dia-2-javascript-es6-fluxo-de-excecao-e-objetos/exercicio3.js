const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addNewProperty = (targetObj, key, value) => {
  targetObj[key] = value;
};

addNewProperty(lesson2, "turno", "noite");

const showObjKeys = (obj) => Object.keys(obj);
console.log(showObjKeys(lesson1));

const showObjSize = (obj) => Object.keys(obj).length;
console.log(showObjSize(lesson1));

const showObjValues = (obj) => Object.values(obj);
console.log(showObjValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const totalEstudantes = (obj) => {
  let sum = 0;
  for (i = 0; i < Object.keys(obj).length; i += 1) {
    sum += obj[`lesson${i + 1}`].numeroEstudantes;
  }
  return sum;
};

console.log(totalEstudantes(allLessons));

const getValueByNumber = (obj, index) => {
  const valueArray = Object.values(obj)[index];
  console.log(valueArray);
};

getValueByNumber(lesson1, 0);

const verifyPair = (obj, chave, valor) => {
  let array = [chave, valor];
  let objArray = Object.entries(obj);
  let isEqual = false;
  objArray.forEach((subarray) => {
    if (subarray[0] === array[0] && subarray[1] === array[1]) {
      isEqual = true;
    }
  });
  return isEqual;
};

console.log(verifyPair(lesson1, "materia", "Matemática"));

const studentTally = (obj, key, value) => {
  let tally = 0;
  for (let element of Object.entries(obj)) {
    if (element[1][key] === value) {
      tally += element[1].numeroEstudantes;
    }
  }
  return tally;
};

console.log(studentTally(allLessons, 'materia', "Matemática"));

console.log(studentTally(allLessons, 'professor', 'Maria Clara'));

const aulasMinistradas = (obj, value) => {
  arrayAulas = [];
  for (let element of Object.entries(obj)) {
    if (element[1]['professor'] === value) {
      arrayAulas.push(element[1].materia);
    }
}
return arrayAulas
}

function relatorioProfessor(professor) {
  this.professor = professor;
  this.aulas = aulasMinistradas(allLessons, professor)
  this.totalEstudantes = studentTally(allLessons, 'professor', professor); 
}

const novoRelatorio = (professor) => new relatorioProfessor(professor);

console.log(novoRelatorio('Maria Clara'))
console.log(novoRelatorio('Carlos'))

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNewProperty = (targetObj, key, value) => {
  targetObj[key] = value
}

addNewProperty(lesson2, 'turno', 'noite')

const showObjKeys = obj => Object.keys(obj)
console.log(showObjKeys(lesson1))

const showObjSize = obj => Object.keys(obj).length
console.log(showObjSize(lesson1))

const showObjValues = obj => Object.values(obj)
console.log(showObjValues(lesson1)) 


const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})  
console.log(allLessons)

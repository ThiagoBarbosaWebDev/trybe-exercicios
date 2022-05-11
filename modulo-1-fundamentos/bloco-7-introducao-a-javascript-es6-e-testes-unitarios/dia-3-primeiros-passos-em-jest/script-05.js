 

// function relatorioProfessor(professor) {
//   this.professor = professor;
//   this.aulas = aulasMinistradas(allLessons, professor)
//   this.totalEstudantes = studentTally(allLessons, 'professor', professor); 
// }

// const novoRelatorio = (professor) => new relatorioProfessor(professor);


function techListItem(tech, name) {
this.tech = tech;
this.name = name;
}

const newTechEntry = (tech, name) => {new techListItem(tech, name)
return {tech, name}}

const techList = (array, string) => {
  array.sort()
  returnArray = []
  
  if (array[0] === undefined) {return "Vazio!"}
  array.forEach(element => {
    returnArray.push(newTechEntry(element, string))
  });
  return returnArray
}

module.exports = techList;





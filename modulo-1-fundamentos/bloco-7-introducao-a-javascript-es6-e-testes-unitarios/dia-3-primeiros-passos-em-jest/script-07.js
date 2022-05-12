// Dados
const professionalBoard = [
  {
    id: "8579-6",
    firstName: "Ana",
    lastName: "Gates",
    specialities: ["UX", "Design"],
  },
  {
    id: "5569-4",
    firstName: "George",
    lastName: "Jobs",
    specialities: ["Frontend", "Redux", "React", "CSS"],
  },
  {
    id: "4456-4",
    firstName: "Leila",
    lastName: "Zuckerberg",
    specialities: ["Context API", "RTL", "Bootstrap"],
  },
  {
    id: "1256-4",
    firstName: "Linda",
    lastName: "Bezos",
    specialities: ["Hooks", "Context API", "Tailwind CSS"],
  },
  {
    id: "9852-2-2",
    firstName: "Jeff",
    lastName: "Cook",
    specialities: ["Ruby", "SQL"],
  },
  {
    id: "4678-2",
    firstName: "Paul",
    lastName: "Dodds",
    specialities: ["Backend"],
  },
];

// Pesquisa

const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  let identificador = id;
  let check = false;

  professionalBoard.forEach((element) => {
    if (element.id === identificador) {
      check = true; 
    }
  });

  try {
    console.log(check)
    console.log(!check)
    if (!check) {console.log('entrei no if'); throw new Error('ID não identificada')}
  return professionalBoard.find(({ id }) => id === identificador)[detail];
  } 
  catch(error) { error.message ; console.log(error.message)}
};

console.log(searchEmployee("4678-22", "specialities"));

module.exports = searchEmployee;

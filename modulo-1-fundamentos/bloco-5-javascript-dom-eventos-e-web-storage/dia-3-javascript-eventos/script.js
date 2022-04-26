function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1
function createDaysOfTheMonth() {
  let monthDays = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let monthDaysList = document.querySelector("#days");

  for (let index = 0; index < monthDays.length; index += 1) {
    let days = monthDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    if (days === 24 || days === 31) {
      dayListItem.className = "days holiday";
      monthDaysList.appendChild(dayListItem);
    } else if (days === 4 || days === 11 || days === 18) {
      dayListItem.className = "days friday";
      monthDaysList.appendChild(dayListItem);
    } else if (days === 25) {
      dayListItem.className = "days holiday friday";
      monthDaysList.appendChild(dayListItem);
    } else {
      dayListItem.className = "days";
      monthDaysList.appendChild(dayListItem);
    }
  }
}

createDaysOfTheMonth();

// Exercício 2
function makeHolidayButton(buttonName) {
  let newButton = document.createElement("button");
  let buttonContainer = document.querySelector(".buttons-container");

  newButton.innerHTML = buttonName;
  newButton.id = "btn-holiday";
  buttonContainer.appendChild(newButton);
}

makeHolidayButton("Feriados");

// Exercicio 3
function showHolidays() {
  let getHolidayButton = document.querySelector("#btn-holiday");
  let getHolidays = document.querySelectorAll(".holiday");
  let defaultColor = "rgb(238,238,238)";
  let newColor = "white";

  getHolidayButton.addEventListener("click", function () {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === newColor) {
        getHolidays[index].style.backgroundColor = defaultColor;
      } else {
        getHolidays[index].style.backgroundColor = newColor;
      }
    }
  });
}

showHolidays();

// Exercicio 4
function makeFridayButton(buttonName) {
  let newButton = document.createElement("button");
  let buttonContainer = document.querySelector(".buttons-container");

  newButton.innerHTML = buttonName;
  newButton.id = "btn-friday";
  buttonContainer.appendChild(newButton);
}

makeFridayButton("Sexta-Feira");

// Exercicio 5
function showSextou() {
  let getFridayButton = document.querySelector("#btn-friday");
  let getFridays = document.querySelectorAll(".friday");
  let sextouText = "#SEXTOU";
  let fridays = [4,11,18,25]

    getFridayButton.addEventListener("click", function () {
    for (let index = 0; index < getFridays.length; index += 1) {
      let sextaNum = getFridays[index];

      if (getFridays[index].innerText !== sextouText) {
        getFridays[index].innerText = sextouText;
      } else {
        getFridays[index].innerText = fridays[index];
      }
    }
  });
}

showSextou();

// Exercicio 6
function zoomInDays() {
  let days = document.querySelector("#days");

  days.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "25px";
    event.target.style.fontWeight = "700";
  });
}

zoomInDays();

function zoomOutDays() {
  let days = document.querySelector("#days");

  days.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "1em";
    event.target.style.fontWeight = "500";
  });
}

zoomOutDays();

// Exercicio 7
function addTask(tarefa) {
  let myTasks = document.querySelector(".my-tasks");
  newSpan = document.createElement("span");
  newSpan.innerHTML = tarefa;
  myTasks.appendChild(newSpan);
}

addTask("cozinhar");

// Exercicio 8

function addLegenda(cor) {
  let legenda = document.querySelector(".my-tasks");
  newDiv = document.createElement("div");
  newDiv.style.backgroundColor = cor;
  newDiv.className = "task";
  legenda.appendChild(newDiv);
}

addLegenda("red");

// Exercicio 9

function taskSelector() {
  let taskDiv = document.querySelector(".task");

  taskDiv.addEventListener("click", (e) => {
    if (taskDiv.className === "task") {
      e.target.className = "task selected";
    } else {
      e.target.className = "task";
    }
  });
}

taskSelector();


// Exercicio 10
let taskDiv = document.querySelector(".task")
console.log(taskDiv)

console.log(taskDiv.style.backgroundColor)

let taskColor = taskDiv.style.backgroundColor
console.log(taskColor)


function calendarTaskPainter() {
  dia = document.querySelector("#days")
  let taskDiv = document.querySelector(".task")
  let defaultColor = "rgb(119,119,119)"
  taskColor = taskDiv.style.backgroundColor
  console.log(taskColor)

  dia.addEventListener('click', e => {
    let targetColor = e.target.style.color
    console.log(targetColor)
    console.log(taskColor)
    // if (targetColor === defaultColor) {let color = taskColor; targetColor = color}
    // else {e.target.style.backgroundcolor = defaultColor}


    let eventTargetColor = e.target.style.color;
    let selectedTask = document.getElementsByClassName('task selected');

    if (selectedTask.length > 0) {
      let color = selectedTask[0].style.backgroundColor;
      e.target.style.color = color;
    } else if (eventTargetColor === taskColor) {
      e.target.style.color = 'rgb(119,119,119)';
    }




  })
}

calendarTaskPainter()

// function setDayColor() {
//   let selectedTask = document.getElementsByClassName('task selected');
//   let days = document.querySelector('#days');
//   let taskDiv = document.querySelector('.task');
//   let taskColor = taskDiv.style.backgroundColor;
  
//   days.addEventListener('click', function(event){
//     let eventTargetColor = event.target.style.color;
//     if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
//       let color = selectedTask[0].style.backgroundColor;
//       event.target.style.color = color;
//     } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
//       event.target.style.color = 'rgb(119,119,119)';
//     }
//   });
// };

// setDayColor();
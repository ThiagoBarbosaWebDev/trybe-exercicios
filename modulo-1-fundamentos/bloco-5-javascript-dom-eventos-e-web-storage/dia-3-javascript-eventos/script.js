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
  let fridays = [4, 11, 18, 25];

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

  days.addEventListener("mouseover", function (e) {
    if (e.target.tagName = 'LI') {e.target.style.fontWeight = "900";}
  });
}

zoomInDays();

function zoomOutDays() {
  let days = document.querySelector("#days");

  days.addEventListener("mouseout", function (e) {
    if (e.target.tagName = 'LI') {e.target.style.fontWeight = "500";}
  });
}


zoomOutDays();

const tasksContainer = document.querySelector("#my-tasks-container");
const addTaskButton = document.querySelector("#btn-add");

function taskSelector(targetDiv) {
  targetDiv.addEventListener("click", (e) => {
    const listaTasks = Array.from(tasksContainer.children).slice(1);
    listaTasks.forEach((element) => {
      element.firstChild.className = "task";
    });
    if (targetDiv.className === "task") {
      e.target.className = "task selected";
    } else {
      e.target.className = "task";
    }
  });
}

function rgbGenerator() {
  let r = Math.floor((Math.random() * 255) + 1 );
  let g = Math.floor((Math.random() * 255) + 1 );
  let b = Math.floor((Math.random() * 255) + 1 );

  return `rgb(${r}, ${g}, ${b})`
}

function addLegenda(target) {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = rgbGenerator()
  newDiv.className = "task";
  taskSelector(newDiv);
  target.appendChild(newDiv);
}

function addTask(target) {
  const taskInput = document.querySelector("#task-input");
  newSpan = document.createElement("span");
  newSpan.innerText = taskInput.value;
  target.appendChild(newSpan);
}

addTaskButton.addEventListener("click", () => {
const newContainer = document.createElement('div')
newContainer.className = 'task-wrapper'

  addLegenda(newContainer);
  addTask(newContainer)
  tasksContainer.appendChild(newContainer)
});

function taskPainter() {
  let days = document.querySelector('#days');

  days.addEventListener('click', (e) => {
    let selectedTask = document.querySelector('.selected');
    if (e.target.tagName === 'LI') {
      if (e.target.backgroundColor !== selectedTask) {
        e.target.style.backgroundColor = selectedTask.style.backgroundColor
        console.log(e.target)
        console.log(e.target.style.backgroundColor)
        console.log(selectedTask.style.backgroundColor)
      } else {return}
    }
  });
};

taskPainter();

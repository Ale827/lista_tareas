import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTask } from "./readTask.js";

//Funcion para Agregar la estructura HTML
export const addTask = (event) => {
  event.preventDefault();

  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");
  
  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");

  if (value == "" || date == "") {
    return;
  }

  input.value = "";
  calendar.value = "";

  const complete = false;

  const taskObj = {
    value,
    dateFormat,
    complete,
    id:uuid.v4()
  };

  list.innerHTML = "";

  //se usa parse para transformar los datos del archivo  JSON
  const taskList = JSON.parse(localStorage.getItem("task")) || [];
  taskList.push(taskObj);
  //convierte los datos al formato string
  localStorage.setItem("task", JSON.stringify(taskList));

  displayTask();

  // const task = createTask(taskObj);
  // list.appendChild(task);
};

//Funcion para crear la estructura HTML
export const createTask = ({ value, dateFormat, complete, id }) => {
  const task = document.createElement("li");
  task.classList.add("card");

  const taskContent = document.createElement("div");

  const check = checkComplete(id);

  if(complete){
    check.classList.toggle("fas");
    check.classList.toggle("completeIcon");
    check.classList.toggle("far");
  }

  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(check);
  taskContent.appendChild(titleTask);

  const dateElement = document.createElement("span");
  dateElement.innerHTML = dateFormat;
  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon(id));

  return task;
};

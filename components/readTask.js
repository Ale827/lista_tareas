import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates, orderDates } from "../services/date.js";

export const displayTask = () => {
  const list = document.querySelector("[data-list]");
  console.log(list);

  const tasksList = JSON.parse(localStorage.getItem("task")) || [];
  const dates = uniqueDates(tasksList);
  orderDates(dates);
  
  dates.forEach( (date) => {
    const dateMoment = moment(date, "DD/MM/YYYY");
    list.appendChild(dateElement(date));
    tasksList.forEach((task) => {
      // list.appendChild(dateElement(task.dateFormat));
      const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
      const diff = dateMoment.diff(taskDate);
      if(diff == 0){
        list.appendChild(createTask(task));
      }
    });
  });
}


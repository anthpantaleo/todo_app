import { generalApp } from "./generalDom";

const taskModule = (() => {
  let tasksInStorage = localStorage.getItem("tasks") || [];

  class Task {
    constructor(title, description, dueDate, priority, category) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.category = this.category;
    }
  }

  function testFunc(ev) {
    console.log("called from Task Module", ev);
  }

  return { Task, testFunc };
})();

function createTask(ev) {
  console.log("called from Create Task Function", ev);
  taskModule.testFunc(ev);
}

export { createTask };

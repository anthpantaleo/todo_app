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

  function testFunc() {
    console.log("called from Task Module");
  }

  return { Task, testFunc };
})();

function createTask(ev) {
  console.log("called from tasks", ev);
  taskModule.testFunc();
}

export { createTask };

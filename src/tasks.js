import { generalApp } from "./generalDom";

const taskModule = (() => {
  let tasksInStorage = localStorage.getItem("tasks") || [];
})();

class Task {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }
}

export { taskModule, Task };

import { createTask } from "./tasks";

import TTask from "./task2";

const generalApp = (() => {
  window.addEventListener("load", () => {
    // Initial DOM queries
    const nameImput = document.getElementById("name");
    const themeIcon = document.getElementById("icon");
    const info = document.querySelector(".info");
    const addTaskButton = document.querySelector(".create");
    const taskModal = document.querySelector(".modal-bg");
    const modalClose = document.querySelector(".modal-close");
    const taskSubmitButton = document.querySelector("#submitTask");

    // Initial Date Update
    let initialDate = new Date();
    let initalTime = initialDate.toLocaleTimeString();
    info.textContent = `${initialDate.toDateString()}, ${initalTime}`;

    // Storage

    const userName = localStorage.getItem("userName") || "";
    const userTheme = localStorage.getItem("theme") || "";
    const tasksInStorage = localStorage.getItem("tasksInStorage") || "[]";

    nameImput.value = userName;

    nameImput.addEventListener("change", (e) => {
      localStorage.setItem("userName", e.target.value);
    });

    if (localStorage.getItem("theme") == "dark-theme") {
      document.body.classList.toggle("dark-theme");
      themeIcon.src = "../dist/images/sunpixel.png";
    } else {
      localStorage.setItem("theme", "normal");
    }

    themeIcon.onclick = function () {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        themeIcon.src = "../dist/images/sunpixel.png";
        localStorage.setItem("theme", "dark-theme");
      } else {
        themeIcon.src = "../dist/images/half-moon.png";
        localStorage.setItem("theme", "normal");
      }
    };

    // Open Add Task Modal

    addTaskButton.addEventListener("click", function (e) {
      taskModal.classList.add("active");
    });

    // Close Modal

    modalClose.addEventListener("click", function (e) {
      taskModal.classList.remove("active");
    });

    // Update Time
    setInterval(function getDisplayTime() {
      let currentDate = new Date();
      let currentTime = currentDate.toLocaleTimeString();
      info.textContent = `${currentDate.toDateString()}, ${currentTime}`;
    }, 1000);

    // Task Submit to Create Task
    taskSubmitButton.addEventListener("click", function (ev) {
      ev.preventDefault();
      // createTask(ev);

      let taskinput = document.querySelector("#taskinput");
      let taskinputDescription = document.querySelector("#descinput");
      let taskinputDue = document.querySelector("#duedate");
      let taskinputPriority = document.querySelector(
        'input[name="priority"]:checked'
      );

      let tasklength = taskinput.value.length;
      let id = Math.floor(Math.random() * 100000);
      if (tasklength >= 2) {
        let currentCreateTask = new TTask(
          taskinput.value,
          taskinputDescription.value,
          taskinputDue.value,
          taskinputPriority.value,
          "categoryplaceholder",
          id
        );

        taskinput.value = null;
        taskinputDescription.value = null;
        taskinputDue.value = null;

        let temptTasks =
          JSON.parse(localStorage.getItem("tasksInStorage")) || [];
        temptTasks.push(currentCreateTask);

        localStorage.setItem("tasksInStroage", JSON.stringify(temptTasks));
        taskModal.classList.remove("active");
      } else {
        taskModal.classList.remove("active");
      }
    });
  });

  // function getTasks() {
  //   console.log(localStorage.getItem("tasksInStorage"));
  //   return localStorage.getItem("tasksInStorage");
  // }
})();

export { generalApp };

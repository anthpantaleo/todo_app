import TTask from "./task2";
import Category from "./category";

import moon from "./imgs/half-moon.png";
import sun from "./imgs/sunpixel.png";

let selectedCategory = "all tasks";
let nameImput = document.getElementById("name");
let themeIcon = document.getElementById("icon");
let info = document.querySelector(".info");
let addTaskButton = document.querySelector(".create");
let taskModal = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".modal-close");
let taskSubmitButton = document.querySelector("#submitTask");
let categoryInput = document.getElementById("category");
let categoryButton = document.querySelectorAll("[category]");
let deleteCategoryButtons = document.querySelectorAll(".categorydelete");

const initialLoad = (() => {
  window.addEventListener("load", () => {
    // Initial Date Update
    let initialDate = new Date();
    let initalTime = initialDate.toLocaleTimeString();
    info.textContent = `It's ${initialDate.toDateString()}, ${initalTime}`;

    // Storage

    // UserName

    const userName = localStorage.getItem("userName") || "";
    nameImput.value = userName;

    nameImput.addEventListener("change", (e) => {
      localStorage.setItem("userName", e.target.value);
    });

    // Theme

    if (localStorage.getItem("theme") == "dark-theme") {
      document.body.classList.toggle("dark-theme");
      themeIcon.src = sun;
    } else {
      localStorage.setItem("theme", "normal");
      themeIcon.src = moon;
    }

    // Theme Changer

    themeIcon.onclick = function () {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        themeIcon.src = sun;
        localStorage.setItem("theme", "dark-theme");
      } else {
        themeIcon.src = moon;
        localStorage.setItem("theme", "normal");
      }
    };

    //Category Input

    categoryInput.addEventListener("change", (e) => {
      let current = new Category(e.target.value);
      let currentCategoriesInStorage = JSON.parse(
        localStorage.getItem("categories")
      );
      let categories = currentCategoriesInStorage;
      categories.push(current);
      selectedCategory = e.target.value;
      categoryInput.value = "";
      localStorage.setItem("categories", JSON.stringify(categories));

      renderCategories();
      updateDom();
      changeSelectedOnScreenCSS();
    });

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
      info.textContent = `It's ${currentDate.toDateString()}, ${currentTime}`;
    }, 1000);
  });

  // Category Switcher
})();

// Load Categories to DOM

function loadCategories() {
  if (localStorage.getItem("categories")) {
  } else {
    localStorage.setItem(
      "categories",
      JSON.stringify([{ categoryname: "all tasks" }])
    );
  }
  renderCategories();
}

loadCategories();

// Load Tasks

function loadTasks() {
  if (localStorage.getItem("tasks")) {
  } else {
    localStorage.setItem("tasks", JSON.stringify([]));
  }
}

loadTasks();

// Task Submit to Create Task

taskSubmitButton.addEventListener("click", function (ev) {
  ev.preventDefault();

  let taskinput = document.querySelector("#taskinput");
  let taskinputDescription = document.querySelector("#descinput");
  let taskinputDue = document.querySelector("#duedate");
  let taskinputPriority = document.querySelector(
    'input[name="priority"]:checked'
  );

  let tasklength = taskinput.value.length;
  let id = Math.floor(Math.random() * 1000000);
  if (tasklength >= 1) {
    let currentCreateTask = new TTask(
      taskinput.value,
      taskinputDescription.value,
      taskinputDue.value,
      taskinputPriority.value,
      selectedCategory,
      id
    );

    let currentTasksInStorage = JSON.parse(localStorage.getItem("tasks"));

    let tasks = currentTasksInStorage;

    tasks.push(currentCreateTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskinput.value = null;
    taskinputDescription.value = null;
    taskinputDue.value = null;

    taskModal.classList.remove("active");
  } else {
    taskModal.classList.remove("active");
  }
  renderTasks(selectedCategory);
});

// Render Categories

function renderCategories() {
  const categoryDisplay = document.querySelector(".category-display");
  deleteCategories(categoryDisplay);
  let currentCategories = JSON.parse(localStorage.getItem("categories"));
  currentCategories.forEach((element) => {
    let categoryButton = document.createElement("button");
    categoryButton.classList.add("category");
    categoryButton.setAttribute("category", `${element.categoryname}`);
    categoryButton.innerText = element.categoryname;
    if (element.categoryname != "all tasks") {
      let categoryDeleteSpan = document.createElement("span");
      categoryDeleteSpan.classList.add("categorydelete");
      categoryDeleteSpan.setAttribute("id", element.categoryname);
      categoryDeleteSpan.innerText = "X";
      categoryButton.appendChild(categoryDeleteSpan);
    }
    categoryDisplay.appendChild(categoryButton);
  });
  updateDom();
  addCategorySwitcher();
  categoryDeleteListener();
}

// update Category Selectors and Loaders

function updateDom() {
  nameImput = document.getElementById("name");
  themeIcon = document.getElementById("icon");
  info = document.querySelector(".info");
  addTaskButton = document.querySelector(".create");
  taskModal = document.querySelector(".modal-bg");
  modalClose = document.querySelector(".modal-close");
  taskSubmitButton = document.querySelector("#submitTask");
  categoryInput = document.getElementById("category");
  categoryButton = document.querySelectorAll("[category]");
  deleteCategoryButtons = document.querySelectorAll(".categorydelete");
}

// Delete Existing Categories
function deleteCategories(x) {
  while (x.firstChild) {
    x.removeChild(x.firstChild);
  }
}

function changeSelectedOnScreenCSS() {
  categoryButton.forEach((button) => {
    if (button.getAttribute("category") == selectedCategory) {
      button.classList.add("selectedView");
      renderTasks(selectedCategory);
    } else {
      button.classList.remove("selectedView");
    }
  });
}

function addCategorySwitcher() {
  categoryButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      selectedCategory = e.target.getAttribute("category");
      changeSelectedOnScreenCSS();
    });
  });
}

changeSelectedOnScreenCSS();

function categoryDeleteListener() {
  deleteCategoryButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      selectedCategory = "all tasks";
      deleteCategory(e);
    });
  });
}

function deleteCategory(e) {
  const currentCategories = JSON.parse(localStorage.getItem("categories"));
  const selectedCategory = e.target.id;
  let count = 0;
  currentCategories.forEach((category) => {
    if (category.categoryname == selectedCategory) {
      currentCategories.splice(count, 1);
    } else {
      count++;
    }
  });
  localStorage.setItem("categories", JSON.stringify(currentCategories));
  renderCategories();
  deleteOnScreenTasks();
}

function renderTasks(e) {
  deleteOnScreenTasks();
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const taskDisplay = document.querySelector(".taskdisplay");
  tasks.forEach((task) => {
    if (selectedCategory == "all tasks") {
      let taskbox = document.createElement("div");
      taskbox.classList.add("task");

      let taskgeneral = document.createElement("div");
      taskgeneral.classList.add("taskgeneral");

      let tasktitle = document.createElement("div");
      tasktitle.classList.add("tasktitle");
      tasktitle.innerText = `${task.name}`;

      let taskdescription = document.createElement("div");
      taskdescription.classList.add("taskdescription");
      taskdescription.innerText = `${task.description}`;

      taskgeneral.appendChild(tasktitle);
      taskgeneral.appendChild(taskdescription);
      taskbox.appendChild(taskgeneral);

      let taskinfo = document.createElement("div");
      taskinfo.classList.add("taskinfo");

      let taskpriority = document.createElement("div");
      taskpriority.classList.add("taskpriority");
      taskpriority.innerText = task.priority;

      let taskdate = document.createElement("div");
      taskdate.classList.add("taskdate");
      taskdate.innerText = task.dueDate;

      taskinfo.appendChild(taskpriority);
      taskinfo.appendChild(taskdate);

      taskbox.appendChild(taskinfo);

      let deletebutton = document.createElement("button");
      deletebutton.setAttribute("id", task.id);
      deletebutton.classList.add("deletetaskbutton");
      deletebutton.innerText = "Delete";

      // let editButton = document.createElement("button");
      // editButton.setAttribute("id", task.id);
      // editButton.classList.add("edittaskbutton");
      // editButton.innerText = "Edit";

      let taskcategorydisplay = document.createElement("span");
      taskcategorydisplay.innerText = task.category;
      taskcategorydisplay.classList.add("taskcategorydisplay");

      taskbox.appendChild(deletebutton);
      // taskbox.appendChild(editButton);
      taskbox.appendChild(taskcategorydisplay);

      taskDisplay.appendChild(taskbox);

      addTaskEventListeners();
    } else if (task.category == selectedCategory) {
      let taskbox = document.createElement("div");
      taskbox.classList.add("task");

      let taskgeneral = document.createElement("div");
      taskgeneral.classList.add("taskgeneral");

      let tasktitle = document.createElement("div");
      tasktitle.classList.add("tasktitle");
      tasktitle.innerText = `${task.name}`;

      let taskdescription = document.createElement("div");
      taskdescription.classList.add("taskdescription");
      taskdescription.innerText = `${task.description}`;

      taskgeneral.appendChild(tasktitle);
      taskgeneral.appendChild(taskdescription);
      taskbox.appendChild(taskgeneral);

      let taskinfo = document.createElement("div");
      taskinfo.classList.add("taskinfo");

      let taskpriority = document.createElement("div");
      taskpriority.classList.add("taskpriority");
      taskpriority.innerText = task.priority;

      let taskdate = document.createElement("div");
      taskdate.classList.add("taskdate");
      taskdate.innerText = task.dueDate;

      taskinfo.appendChild(taskpriority);
      taskinfo.appendChild(taskdate);

      taskbox.appendChild(taskinfo);

      let deletebutton = document.createElement("button");
      deletebutton.setAttribute("id", task.id);
      deletebutton.classList.add("deletetaskbutton");
      deletebutton.innerText = "Delete";

      // let editButton = document.createElement("button");
      // editButton.setAttribute("id", task.id);
      // editButton.classList.add("edittaskbutton");
      // editButton.innerText = "Edit";

      let taskcategorydisplay = document.createElement("span");
      taskcategorydisplay.innerText = task.category;
      taskcategorydisplay.classList.add("taskcategorydisplay");

      taskbox.appendChild(deletebutton);
      // taskbox.appendChild(editButton);
      taskbox.appendChild(taskcategorydisplay);

      taskDisplay.appendChild(taskbox);
      updateDom();
      addTaskEventListeners();
    }
  });
}

function deleteTask(e) {
  const ID = e.target.getAttribute("id");
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const newTasks = tasks.filter((task) => task.id != ID);
  localStorage.setItem("tasks", JSON.stringify(newTasks));
  renderTasks();
}

// function editTask(e) {}

function deleteOnScreenTasks() {
  const taskDisplay = document.querySelector(".taskdisplay");
  while (taskDisplay.firstChild) {
    taskDisplay.removeChild(taskDisplay.firstChild);
  }
}

function addTaskEventListeners() {
  let deleteButtons = document.querySelectorAll(".deletetaskbutton");
  // let editButtons = document.querySelectorAll(".edittaskbutton");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      deleteTask(e);
    });
  });

  // editButtons.forEach((button) => {
  //   button.addEventListener("click", (e) => {
  //     console.log(e.target.getAttribute("id") + " edit");
  //   });
  // });
}

export { initialLoad };

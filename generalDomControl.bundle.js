/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/category.js":
/*!*************************!*\
  !*** ./src/category.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
// Categories

class Category {
  constructor(categoryname) {
    this.categoryname = categoryname;
  }
}

// const categoryModule = (() => {
//   window.addEventListener("load", () => {
//     const categoryInput = document.getElementById("category");
//     categoryInput.addEventListener("change", (e) => {
//       let current = new Category(e.target.value);
//       let currentCategoriesInStorage = JSON.parse(
//         localStorage.getItem("categories")
//       );
//       let categories = currentCategoriesInStorage;
//       categories.push(current);
//       categoryInput.value = "";
//       localStorage.setItem("categories", JSON.stringify(categories));
//       addCategories(categories);
//     });
//   });

//   function loadCategories() {
//     if (localStorage.getItem("categories")) {
//     } else {
//       localStorage.setItem(
//         "categories",
//         JSON.stringify([{ categoryname: "all tasks" }])
//       );
//     }
//   }

//   loadCategories();

//   function addCategories(categories) {
//     categories.forEach((category) => {
//       console.log(category.categoryname);
//     });
//   }
// })();


/***/ }),

/***/ "./src/task2.js":
/*!**********************!*\
  !*** ./src/task2.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TTask)
/* harmony export */ });
class TTask {
  constructor(name, description, dueDate = "", priority, category, id) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.category = category;
    this.id = id;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getPriority() {
    return this.priority;
  }

  setCategory(category) {
    this.category = category;
  }

  getCategory() {
    return this.category;
  }

  setID() {
    this.id = id;
  }

  getID() {
    return this.id;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/generalDom.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialLoad": () => (/* binding */ initialLoad),
/* harmony export */   "updateDom": () => (/* binding */ updateDom)
/* harmony export */ });
/* harmony import */ var _task2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task2 */ "./src/task2.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ "./src/category.js");



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
      themeIcon.src = "./images/sunpixel.png";
    } else {
      localStorage.setItem("theme", "normal");
      themeIcon.src = "./images/half-moon.png";
    }

    // Theme Changer

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

    //Category Input

    categoryInput.addEventListener("change", (e) => {
      let current = new _category__WEBPACK_IMPORTED_MODULE_1__["default"](e.target.value);
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
  let id = Math.floor(Math.random() * 100000);
  if (tasklength >= 1) {
    let currentCreateTask = new _task2__WEBPACK_IMPORTED_MODULE_0__["default"](
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

    console.table(tasks);

    taskModal.classList.remove("active");
  } else {
    taskModal.classList.remove("active");
  }
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
      categoryDeleteSpan.innerText = "X";
      categoryButton.appendChild(categoryDeleteSpan);
    }
    categoryDisplay.appendChild(categoryButton);
  });
  updateDom();
  console.log(selectedCategory);
  addCategorySwitcher();
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTs7QUFFa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy90YXNrMi5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2dlbmVyYWxEb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2F0ZWdvcmllc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSB7XG4gIGNvbnN0cnVjdG9yKGNhdGVnb3J5bmFtZSkge1xuICAgIHRoaXMuY2F0ZWdvcnluYW1lID0gY2F0ZWdvcnluYW1lO1xuICB9XG59XG5cbi8vIGNvbnN0IGNhdGVnb3J5TW9kdWxlID0gKCgpID0+IHtcbi8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbi8vICAgICBjb25zdCBjYXRlZ29yeUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeVwiKTtcbi8vICAgICBjYXRlZ29yeUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbi8vICAgICAgIGxldCBjdXJyZW50ID0gbmV3IENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKTtcbi8vICAgICAgIGxldCBjdXJyZW50Q2F0ZWdvcmllc0luU3RvcmFnZSA9IEpTT04ucGFyc2UoXG4vLyAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmllc1wiKVxuLy8gICAgICAgKTtcbi8vICAgICAgIGxldCBjYXRlZ29yaWVzID0gY3VycmVudENhdGVnb3JpZXNJblN0b3JhZ2U7XG4vLyAgICAgICBjYXRlZ29yaWVzLnB1c2goY3VycmVudCk7XG4vLyAgICAgICBjYXRlZ29yeUlucHV0LnZhbHVlID0gXCJcIjtcbi8vICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2F0ZWdvcmllc1wiLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKSk7XG4vLyAgICAgICBhZGRDYXRlZ29yaWVzKGNhdGVnb3JpZXMpO1xuLy8gICAgIH0pO1xuLy8gICB9KTtcblxuLy8gICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcmllcygpIHtcbi8vICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWVzXCIpKSB7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuLy8gICAgICAgICBcImNhdGVnb3JpZXNcIixcbi8vICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW3sgY2F0ZWdvcnluYW1lOiBcImFsbCB0YXNrc1wiIH1dKVxuLy8gICAgICAgKTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICBsb2FkQ2F0ZWdvcmllcygpO1xuXG4vLyAgIGZ1bmN0aW9uIGFkZENhdGVnb3JpZXMoY2F0ZWdvcmllcykge1xuLy8gICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5LmNhdGVnb3J5bmFtZSk7XG4vLyAgICAgfSk7XG4vLyAgIH1cbi8vIH0pKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlID0gXCJcIiwgcHJpb3JpdHksIGNhdGVnb3J5LCBpZCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldERhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cblxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgc2V0Q2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gIH1cblxuICBnZXRDYXRlZ29yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yeTtcbiAgfVxuXG4gIHNldElEKCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIGdldElEKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUVGFzayBmcm9tIFwiLi90YXNrMlwiO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL2NhdGVnb3J5XCI7XG5cbmxldCBzZWxlY3RlZENhdGVnb3J5ID0gXCJhbGwgdGFza3NcIjtcbmxldCBuYW1lSW1wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XG5sZXQgdGhlbWVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uXCIpO1xubGV0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG5sZXQgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlXCIpO1xubGV0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYmdcIik7XG5sZXQgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY2xvc2VcIik7XG5sZXQgdGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0VGFza1wiKTtcbmxldCBjYXRlZ29yeUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeVwiKTtcbmxldCBjYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbY2F0ZWdvcnldXCIpO1xuXG5jb25zdCBpbml0aWFsTG9hZCA9ICgoKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgLy8gSW5pdGlhbCBEYXRlIFVwZGF0ZVxuICAgIGxldCBpbml0aWFsRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGluaXRhbFRpbWUgPSBpbml0aWFsRGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICBpbmZvLnRleHRDb250ZW50ID0gYEl0J3MgJHtpbml0aWFsRGF0ZS50b0RhdGVTdHJpbmcoKX0sICR7aW5pdGFsVGltZX1gO1xuXG4gICAgLy8gU3RvcmFnZVxuXG4gICAgLy8gVXNlck5hbWVcblxuICAgIGNvbnN0IHVzZXJOYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyTmFtZVwiKSB8fCBcIlwiO1xuICAgIG5hbWVJbXB1dC52YWx1ZSA9IHVzZXJOYW1lO1xuXG4gICAgbmFtZUltcHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlck5hbWVcIiwgZS50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gVGhlbWVcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpID09IFwiZGFyay10aGVtZVwiKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLXRoZW1lXCIpO1xuICAgICAgdGhlbWVJY29uLnNyYyA9IFwiLi9pbWFnZXMvc3VucGl4ZWwucG5nXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJub3JtYWxcIik7XG4gICAgICB0aGVtZUljb24uc3JjID0gXCIuL2ltYWdlcy9oYWxmLW1vb24ucG5nXCI7XG4gICAgfVxuXG4gICAgLy8gVGhlbWUgQ2hhbmdlclxuXG4gICAgdGhlbWVJY29uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLXRoZW1lXCIpO1xuICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFyay10aGVtZVwiKSkge1xuICAgICAgICB0aGVtZUljb24uc3JjID0gXCIuLi9kaXN0L2ltYWdlcy9zdW5waXhlbC5wbmdcIjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmstdGhlbWVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVtZUljb24uc3JjID0gXCIuLi9kaXN0L2ltYWdlcy9oYWxmLW1vb24ucG5nXCI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJub3JtYWxcIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vQ2F0ZWdvcnkgSW5wdXRcblxuICAgIGNhdGVnb3J5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgbGV0IGN1cnJlbnQgPSBuZXcgQ2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpO1xuICAgICAgbGV0IGN1cnJlbnRDYXRlZ29yaWVzSW5TdG9yYWdlID0gSlNPTi5wYXJzZShcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWVzXCIpXG4gICAgICApO1xuICAgICAgbGV0IGNhdGVnb3JpZXMgPSBjdXJyZW50Q2F0ZWdvcmllc0luU3RvcmFnZTtcbiAgICAgIGNhdGVnb3JpZXMucHVzaChjdXJyZW50KTtcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGNhdGVnb3J5SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXRlZ29yaWVzXCIsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3JpZXMpKTtcblxuICAgICAgcmVuZGVyQ2F0ZWdvcmllcygpO1xuICAgICAgdXBkYXRlRG9tKCk7XG4gICAgICBjaGFuZ2VTZWxlY3RlZE9uU2NyZWVuQ1NTKCk7XG4gICAgfSk7XG5cbiAgICAvLyBPcGVuIEFkZCBUYXNrIE1vZGFsXG5cbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdGFza01vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSk7XG5cbiAgICAvLyBDbG9zZSBNb2RhbFxuXG4gICAgbW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIFRpbWVcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiBnZXREaXNwbGF5VGltZSgpIHtcbiAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgY3VycmVudFRpbWUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgIGluZm8udGV4dENvbnRlbnQgPSBgSXQncyAke2N1cnJlbnREYXRlLnRvRGF0ZVN0cmluZygpfSwgJHtjdXJyZW50VGltZX1gO1xuICAgIH0sIDEwMDApO1xuICB9KTtcblxuICAvLyBDYXRlZ29yeSBTd2l0Y2hlclxufSkoKTtcblxuLy8gTG9hZCBDYXRlZ29yaWVzIHRvIERPTVxuXG5mdW5jdGlvbiBsb2FkQ2F0ZWdvcmllcygpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmllc1wiKSkge1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgXCJjYXRlZ29yaWVzXCIsXG4gICAgICBKU09OLnN0cmluZ2lmeShbeyBjYXRlZ29yeW5hbWU6IFwiYWxsIHRhc2tzXCIgfV0pXG4gICAgKTtcbiAgfVxuICByZW5kZXJDYXRlZ29yaWVzKCk7XG59XG5cbmxvYWRDYXRlZ29yaWVzKCk7XG5cbi8vIExvYWQgVGFza3NcblxuZnVuY3Rpb24gbG9hZFRhc2tzKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkge1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgfVxufVxuXG5sb2FkVGFza3MoKTtcblxuLy8gVGFzayBTdWJtaXQgdG8gQ3JlYXRlIFRhc2tcblxudGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgbGV0IHRhc2tpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza2lucHV0XCIpO1xuICBsZXQgdGFza2lucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NpbnB1dFwiKTtcbiAgbGV0IHRhc2tpbnB1dER1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZVwiKTtcbiAgbGV0IHRhc2tpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnXG4gICk7XG5cbiAgbGV0IHRhc2tsZW5ndGggPSB0YXNraW5wdXQudmFsdWUubGVuZ3RoO1xuICBsZXQgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApO1xuICBpZiAodGFza2xlbmd0aCA+PSAxKSB7XG4gICAgbGV0IGN1cnJlbnRDcmVhdGVUYXNrID0gbmV3IFRUYXNrKFxuICAgICAgdGFza2lucHV0LnZhbHVlLFxuICAgICAgdGFza2lucHV0RGVzY3JpcHRpb24udmFsdWUsXG4gICAgICB0YXNraW5wdXREdWUudmFsdWUsXG4gICAgICB0YXNraW5wdXRQcmlvcml0eS52YWx1ZSxcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnksXG4gICAgICBpZFxuICAgICk7XG5cbiAgICBsZXQgY3VycmVudFRhc2tzSW5TdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcblxuICAgIGxldCB0YXNrcyA9IGN1cnJlbnRUYXNrc0luU3RvcmFnZTtcblxuICAgIHRhc2tzLnB1c2goY3VycmVudENyZWF0ZVRhc2spO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuXG4gICAgdGFza2lucHV0LnZhbHVlID0gbnVsbDtcbiAgICB0YXNraW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IG51bGw7XG4gICAgdGFza2lucHV0RHVlLnZhbHVlID0gbnVsbDtcblxuICAgIGNvbnNvbGUudGFibGUodGFza3MpO1xuXG4gICAgdGFza01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0gZWxzZSB7XG4gICAgdGFza01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbn0pO1xuXG4vLyBSZW5kZXIgQ2F0ZWdvcmllc1xuXG5mdW5jdGlvbiByZW5kZXJDYXRlZ29yaWVzKCkge1xuICBjb25zdCBjYXRlZ29yeURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5LWRpc3BsYXlcIik7XG4gIGRlbGV0ZUNhdGVnb3JpZXMoY2F0ZWdvcnlEaXNwbGF5KTtcbiAgbGV0IGN1cnJlbnRDYXRlZ29yaWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpZXNcIikpO1xuICBjdXJyZW50Q2F0ZWdvcmllcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgbGV0IGNhdGVnb3J5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYXRlZ29yeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlcIik7XG4gICAgY2F0ZWdvcnlCdXR0b24uc2V0QXR0cmlidXRlKFwiY2F0ZWdvcnlcIiwgYCR7ZWxlbWVudC5jYXRlZ29yeW5hbWV9YCk7XG4gICAgY2F0ZWdvcnlCdXR0b24uaW5uZXJUZXh0ID0gZWxlbWVudC5jYXRlZ29yeW5hbWU7XG4gICAgaWYgKGVsZW1lbnQuY2F0ZWdvcnluYW1lICE9IFwiYWxsIHRhc2tzXCIpIHtcbiAgICAgIGxldCBjYXRlZ29yeURlbGV0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGNhdGVnb3J5RGVsZXRlU3Bhbi5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlkZWxldGVcIik7XG4gICAgICBjYXRlZ29yeURlbGV0ZVNwYW4uaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgICBjYXRlZ29yeUJ1dHRvbi5hcHBlbmRDaGlsZChjYXRlZ29yeURlbGV0ZVNwYW4pO1xuICAgIH1cbiAgICBjYXRlZ29yeURpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlCdXR0b24pO1xuICB9KTtcbiAgdXBkYXRlRG9tKCk7XG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkQ2F0ZWdvcnkpO1xuICBhZGRDYXRlZ29yeVN3aXRjaGVyKCk7XG59XG5cbi8vIHVwZGF0ZSBDYXRlZ29yeSBTZWxlY3RvcnMgYW5kIExvYWRlcnNcbmZ1bmN0aW9uIHVwZGF0ZURvbSgpIHtcbiAgbmFtZUltcHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpO1xuICB0aGVtZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImljb25cIik7XG4gIGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG4gIGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZVwiKTtcbiAgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1iZ1wiKTtcbiAgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY2xvc2VcIik7XG4gIHRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFRhc2tcIik7XG4gIGNhdGVnb3J5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdGVnb3J5XCIpO1xuICBjYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbY2F0ZWdvcnldXCIpO1xufVxuXG4vLyBEZWxldGUgRXhpc3RpbmcgQ2F0ZWdvcmllc1xuZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcmllcyh4KSB7XG4gIHdoaWxlICh4LmZpcnN0Q2hpbGQpIHtcbiAgICB4LnJlbW92ZUNoaWxkKHguZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlU2VsZWN0ZWRPblNjcmVlbkNTUygpIHtcbiAgY2F0ZWdvcnlCdXR0b24uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgaWYgKGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJjYXRlZ29yeVwiKSA9PSBzZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkVmlld1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFZpZXdcIik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2F0ZWdvcnlTd2l0Y2hlcigpIHtcbiAgY2F0ZWdvcnlCdXR0b24uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgc2VsZWN0ZWRDYXRlZ29yeSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNhdGVnb3J5XCIpO1xuICAgICAgY2hhbmdlU2VsZWN0ZWRPblNjcmVlbkNTUygpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuY2hhbmdlU2VsZWN0ZWRPblNjcmVlbkNTUygpO1xuXG5leHBvcnQgeyBpbml0aWFsTG9hZCwgdXBkYXRlRG9tIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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


/***/ }),

/***/ "./src/imgs/half-moon.png":
/*!********************************!*\
  !*** ./src/imgs/half-moon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b26bbb069793f6c0827c.png";

/***/ }),

/***/ "./src/imgs/sunpixel.png":
/*!*******************************!*\
  !*** ./src/imgs/sunpixel.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6c1c2d669d369ef5d38.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony export */   "initialLoad": () => (/* binding */ initialLoad)
/* harmony export */ });
/* harmony import */ var _task2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task2 */ "./src/task2.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ "./src/category.js");
/* harmony import */ var _imgs_half_moon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/half-moon.png */ "./src/imgs/half-moon.png");
/* harmony import */ var _imgs_sunpixel_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/sunpixel.png */ "./src/imgs/sunpixel.png");






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
      themeIcon.src = _imgs_sunpixel_png__WEBPACK_IMPORTED_MODULE_3__;
    } else {
      localStorage.setItem("theme", "normal");
      themeIcon.src = _imgs_half_moon_png__WEBPACK_IMPORTED_MODULE_2__;
    }

    // Theme Changer

    themeIcon.onclick = function () {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        themeIcon.src = _imgs_sunpixel_png__WEBPACK_IMPORTED_MODULE_3__;
        localStorage.setItem("theme", "dark-theme");
      } else {
        themeIcon.src = _imgs_half_moon_png__WEBPACK_IMPORTED_MODULE_2__;
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
  deleteCategoryTasks(selectedCategory);
}

function renderTasks(e) {
  console.log(`Render Tasks: ${e}`);
}

function deleteCategoryTasks(e) {
  console.log(`Delete Tasks: ${e}`);
}

function deleteTask(e) {}

function editTask(e) {}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhbERvbUNvbnRyb2wuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjRCO0FBQ007O0FBRU07QUFDRjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDJCQUEyQixJQUFJLFdBQVc7O0FBRXpFOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBRztBQUN6QixNQUFNO0FBQ047QUFDQSxzQkFBc0IsZ0RBQUk7QUFDMUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtDQUFHO0FBQzNCO0FBQ0EsUUFBUTtBQUNSLHdCQUF3QixnREFBSTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0IsaURBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDJCQUEyQixJQUFJLFlBQVk7QUFDNUUsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDhDQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHFCQUFxQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixFQUFFO0FBQ2pDOztBQUVBO0FBQ0EsK0JBQStCLEVBQUU7QUFDakM7O0FBRUE7O0FBRUE7O0FBRXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvdGFzazIuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2dlbmVyYWxEb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2F0ZWdvcmllc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSB7XG4gIGNvbnN0cnVjdG9yKGNhdGVnb3J5bmFtZSkge1xuICAgIHRoaXMuY2F0ZWdvcnluYW1lID0gY2F0ZWdvcnluYW1lO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlID0gXCJcIiwgcHJpb3JpdHksIGNhdGVnb3J5LCBpZCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldERhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cblxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgc2V0Q2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gIH1cblxuICBnZXRDYXRlZ29yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yeTtcbiAgfVxuXG4gIHNldElEKCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIGdldElEKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgVFRhc2sgZnJvbSBcIi4vdGFzazJcIjtcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9jYXRlZ29yeVwiO1xuXG5pbXBvcnQgbW9vbiBmcm9tIFwiLi9pbWdzL2hhbGYtbW9vbi5wbmdcIjtcbmltcG9ydCBzdW4gZnJvbSBcIi4vaW1ncy9zdW5waXhlbC5wbmdcIjtcblxubGV0IHNlbGVjdGVkQ2F0ZWdvcnkgPSBcImFsbCB0YXNrc1wiO1xubGV0IG5hbWVJbXB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKTtcbmxldCB0aGVtZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImljb25cIik7XG5sZXQgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbmxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVcIik7XG5sZXQgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1iZ1wiKTtcbmxldCBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jbG9zZVwiKTtcbmxldCB0YXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRUYXNrXCIpO1xubGV0IGNhdGVnb3J5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdGVnb3J5XCIpO1xubGV0IGNhdGVnb3J5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltjYXRlZ29yeV1cIik7XG5sZXQgZGVsZXRlQ2F0ZWdvcnlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeWRlbGV0ZVwiKTtcblxuY29uc3QgaW5pdGlhbExvYWQgPSAoKCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIC8vIEluaXRpYWwgRGF0ZSBVcGRhdGVcbiAgICBsZXQgaW5pdGlhbERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBpbml0YWxUaW1lID0gaW5pdGlhbERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgaW5mby50ZXh0Q29udGVudCA9IGBJdCdzICR7aW5pdGlhbERhdGUudG9EYXRlU3RyaW5nKCl9LCAke2luaXRhbFRpbWV9YDtcblxuICAgIC8vIFN0b3JhZ2VcblxuICAgIC8vIFVzZXJOYW1lXG5cbiAgICBjb25zdCB1c2VyTmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlck5hbWVcIikgfHwgXCJcIjtcbiAgICBuYW1lSW1wdXQudmFsdWUgPSB1c2VyTmFtZTtcblxuICAgIG5hbWVJbXB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJOYW1lXCIsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIFRoZW1lXG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA9PSBcImRhcmstdGhlbWVcIikge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay10aGVtZVwiKTtcbiAgICAgIHRoZW1lSWNvbi5zcmMgPSBzdW47XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJub3JtYWxcIik7XG4gICAgICB0aGVtZUljb24uc3JjID0gbW9vbjtcbiAgICB9XG5cbiAgICAvLyBUaGVtZSBDaGFuZ2VyXG5cbiAgICB0aGVtZUljb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstdGhlbWVcIik7XG4gICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrLXRoZW1lXCIpKSB7XG4gICAgICAgIHRoZW1lSWNvbi5zcmMgPSBzdW47XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrLXRoZW1lXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhlbWVJY29uLnNyYyA9IG1vb247XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJub3JtYWxcIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vQ2F0ZWdvcnkgSW5wdXRcblxuICAgIGNhdGVnb3J5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgbGV0IGN1cnJlbnQgPSBuZXcgQ2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpO1xuICAgICAgbGV0IGN1cnJlbnRDYXRlZ29yaWVzSW5TdG9yYWdlID0gSlNPTi5wYXJzZShcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWVzXCIpXG4gICAgICApO1xuICAgICAgbGV0IGNhdGVnb3JpZXMgPSBjdXJyZW50Q2F0ZWdvcmllc0luU3RvcmFnZTtcbiAgICAgIGNhdGVnb3JpZXMucHVzaChjdXJyZW50KTtcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGNhdGVnb3J5SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXRlZ29yaWVzXCIsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3JpZXMpKTtcblxuICAgICAgcmVuZGVyQ2F0ZWdvcmllcygpO1xuICAgICAgdXBkYXRlRG9tKCk7XG4gICAgICBjaGFuZ2VTZWxlY3RlZE9uU2NyZWVuQ1NTKCk7XG4gICAgfSk7XG5cbiAgICAvLyBPcGVuIEFkZCBUYXNrIE1vZGFsXG5cbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdGFza01vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSk7XG5cbiAgICAvLyBDbG9zZSBNb2RhbFxuXG4gICAgbW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIFRpbWVcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiBnZXREaXNwbGF5VGltZSgpIHtcbiAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgY3VycmVudFRpbWUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgIGluZm8udGV4dENvbnRlbnQgPSBgSXQncyAke2N1cnJlbnREYXRlLnRvRGF0ZVN0cmluZygpfSwgJHtjdXJyZW50VGltZX1gO1xuICAgIH0sIDEwMDApO1xuICB9KTtcblxuICAvLyBDYXRlZ29yeSBTd2l0Y2hlclxufSkoKTtcblxuLy8gTG9hZCBDYXRlZ29yaWVzIHRvIERPTVxuXG5mdW5jdGlvbiBsb2FkQ2F0ZWdvcmllcygpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmllc1wiKSkge1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgXCJjYXRlZ29yaWVzXCIsXG4gICAgICBKU09OLnN0cmluZ2lmeShbeyBjYXRlZ29yeW5hbWU6IFwiYWxsIHRhc2tzXCIgfV0pXG4gICAgKTtcbiAgfVxuICByZW5kZXJDYXRlZ29yaWVzKCk7XG59XG5cbmxvYWRDYXRlZ29yaWVzKCk7XG5cbi8vIExvYWQgVGFza3NcblxuZnVuY3Rpb24gbG9hZFRhc2tzKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkge1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgfVxufVxuXG5sb2FkVGFza3MoKTtcblxuLy8gVGFzayBTdWJtaXQgdG8gQ3JlYXRlIFRhc2tcblxudGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgbGV0IHRhc2tpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza2lucHV0XCIpO1xuICBsZXQgdGFza2lucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NpbnB1dFwiKTtcbiAgbGV0IHRhc2tpbnB1dER1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZVwiKTtcbiAgbGV0IHRhc2tpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnXG4gICk7XG5cbiAgbGV0IHRhc2tsZW5ndGggPSB0YXNraW5wdXQudmFsdWUubGVuZ3RoO1xuICBsZXQgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApO1xuICBpZiAodGFza2xlbmd0aCA+PSAxKSB7XG4gICAgbGV0IGN1cnJlbnRDcmVhdGVUYXNrID0gbmV3IFRUYXNrKFxuICAgICAgdGFza2lucHV0LnZhbHVlLFxuICAgICAgdGFza2lucHV0RGVzY3JpcHRpb24udmFsdWUsXG4gICAgICB0YXNraW5wdXREdWUudmFsdWUsXG4gICAgICB0YXNraW5wdXRQcmlvcml0eS52YWx1ZSxcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnksXG4gICAgICBpZFxuICAgICk7XG5cbiAgICBsZXQgY3VycmVudFRhc2tzSW5TdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcblxuICAgIGxldCB0YXNrcyA9IGN1cnJlbnRUYXNrc0luU3RvcmFnZTtcblxuICAgIHRhc2tzLnB1c2goY3VycmVudENyZWF0ZVRhc2spO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuXG4gICAgdGFza2lucHV0LnZhbHVlID0gbnVsbDtcbiAgICB0YXNraW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IG51bGw7XG4gICAgdGFza2lucHV0RHVlLnZhbHVlID0gbnVsbDtcblxuICAgIGNvbnNvbGUudGFibGUodGFza3MpO1xuXG4gICAgdGFza01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0gZWxzZSB7XG4gICAgdGFza01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbiAgcmVuZGVyVGFza3Moc2VsZWN0ZWRDYXRlZ29yeSk7XG59KTtcblxuLy8gUmVuZGVyIENhdGVnb3JpZXNcblxuZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcmllcygpIHtcbiAgY29uc3QgY2F0ZWdvcnlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXRlZ29yeS1kaXNwbGF5XCIpO1xuICBkZWxldGVDYXRlZ29yaWVzKGNhdGVnb3J5RGlzcGxheSk7XG4gIGxldCBjdXJyZW50Q2F0ZWdvcmllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWVzXCIpKTtcbiAgY3VycmVudENhdGVnb3JpZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGxldCBjYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2F0ZWdvcnlCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIpO1xuICAgIGNhdGVnb3J5QnV0dG9uLnNldEF0dHJpYnV0ZShcImNhdGVnb3J5XCIsIGAke2VsZW1lbnQuY2F0ZWdvcnluYW1lfWApO1xuICAgIGNhdGVnb3J5QnV0dG9uLmlubmVyVGV4dCA9IGVsZW1lbnQuY2F0ZWdvcnluYW1lO1xuICAgIGlmIChlbGVtZW50LmNhdGVnb3J5bmFtZSAhPSBcImFsbCB0YXNrc1wiKSB7XG4gICAgICBsZXQgY2F0ZWdvcnlEZWxldGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBjYXRlZ29yeURlbGV0ZVNwYW4uY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5ZGVsZXRlXCIpO1xuICAgICAgY2F0ZWdvcnlEZWxldGVTcGFuLnNldEF0dHJpYnV0ZShcImlkXCIsIGVsZW1lbnQuY2F0ZWdvcnluYW1lKTtcbiAgICAgIGNhdGVnb3J5RGVsZXRlU3Bhbi5pbm5lclRleHQgPSBcIlhcIjtcbiAgICAgIGNhdGVnb3J5QnV0dG9uLmFwcGVuZENoaWxkKGNhdGVnb3J5RGVsZXRlU3Bhbik7XG4gICAgfVxuICAgIGNhdGVnb3J5RGlzcGxheS5hcHBlbmRDaGlsZChjYXRlZ29yeUJ1dHRvbik7XG4gIH0pO1xuICB1cGRhdGVEb20oKTtcbiAgYWRkQ2F0ZWdvcnlTd2l0Y2hlcigpO1xuICBjYXRlZ29yeURlbGV0ZUxpc3RlbmVyKCk7XG59XG5cbi8vIHVwZGF0ZSBDYXRlZ29yeSBTZWxlY3RvcnMgYW5kIExvYWRlcnNcblxuZnVuY3Rpb24gdXBkYXRlRG9tKCkge1xuICBuYW1lSW1wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XG4gIHRoZW1lSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWNvblwiKTtcbiAgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbiAgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlXCIpO1xuICB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJnXCIpO1xuICBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jbG9zZVwiKTtcbiAgdGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0VGFza1wiKTtcbiAgY2F0ZWdvcnlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0ZWdvcnlcIik7XG4gIGNhdGVnb3J5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltjYXRlZ29yeV1cIik7XG4gIGRlbGV0ZUNhdGVnb3J5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnlkZWxldGVcIik7XG59XG5cbi8vIERlbGV0ZSBFeGlzdGluZyBDYXRlZ29yaWVzXG5mdW5jdGlvbiBkZWxldGVDYXRlZ29yaWVzKHgpIHtcbiAgd2hpbGUgKHguZmlyc3RDaGlsZCkge1xuICAgIHgucmVtb3ZlQ2hpbGQoeC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VTZWxlY3RlZE9uU2NyZWVuQ1NTKCkge1xuICBjYXRlZ29yeUJ1dHRvbi5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZiAoYnV0dG9uLmdldEF0dHJpYnV0ZShcImNhdGVnb3J5XCIpID09IHNlbGVjdGVkQ2F0ZWdvcnkpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRWaWV3XCIpO1xuICAgICAgcmVuZGVyVGFza3Moc2VsZWN0ZWRDYXRlZ29yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRWaWV3XCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENhdGVnb3J5U3dpdGNoZXIoKSB7XG4gIGNhdGVnb3J5QnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjYXRlZ29yeVwiKTtcbiAgICAgIGNoYW5nZVNlbGVjdGVkT25TY3JlZW5DU1MoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmNoYW5nZVNlbGVjdGVkT25TY3JlZW5DU1MoKTtcblxuZnVuY3Rpb24gY2F0ZWdvcnlEZWxldGVMaXN0ZW5lcigpIHtcbiAgZGVsZXRlQ2F0ZWdvcnlCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkgPSBcImFsbCB0YXNrc1wiO1xuICAgICAgZGVsZXRlQ2F0ZWdvcnkoZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVDYXRlZ29yeShlKSB7XG4gIGNvbnN0IGN1cnJlbnRDYXRlZ29yaWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpZXNcIikpO1xuICBjb25zdCBzZWxlY3RlZENhdGVnb3J5ID0gZS50YXJnZXQuaWQ7XG4gIGxldCBjb3VudCA9IDA7XG4gIGN1cnJlbnRDYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgaWYgKGNhdGVnb3J5LmNhdGVnb3J5bmFtZSA9PSBzZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICBjdXJyZW50Q2F0ZWdvcmllcy5zcGxpY2UoY291bnQsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2F0ZWdvcmllc1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Q2F0ZWdvcmllcykpO1xuICByZW5kZXJDYXRlZ29yaWVzKCk7XG4gIGRlbGV0ZUNhdGVnb3J5VGFza3Moc2VsZWN0ZWRDYXRlZ29yeSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tzKGUpIHtcbiAgY29uc29sZS5sb2coYFJlbmRlciBUYXNrczogJHtlfWApO1xufVxuXG5mdW5jdGlvbiBkZWxldGVDYXRlZ29yeVRhc2tzKGUpIHtcbiAgY29uc29sZS5sb2coYERlbGV0ZSBUYXNrczogJHtlfWApO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGUpIHt9XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKGUpIHt9XG5cbmV4cG9ydCB7IGluaXRpYWxMb2FkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
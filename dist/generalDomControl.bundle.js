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
      console.log(button.getAttribute("category"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhbERvbUNvbnRyb2wuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjRCO0FBQ007O0FBRU07QUFDRjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwyQkFBMkIsSUFBSSxXQUFXOztBQUV6RTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQUc7QUFDekIsTUFBTTtBQUNOO0FBQ0Esc0JBQXNCLGdEQUFJO0FBQzFCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQ0FBRztBQUMzQjtBQUNBLFFBQVE7QUFDUix3QkFBd0IsZ0RBQUk7QUFDNUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCLGlEQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywyQkFBMkIsSUFBSSxZQUFZO0FBQzVFLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw4Q0FBSztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MscUJBQXFCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTs7QUFFdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy90YXNrMi5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvZ2VuZXJhbERvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDYXRlZ29yaWVzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IHtcbiAgY29uc3RydWN0b3IoY2F0ZWdvcnluYW1lKSB7XG4gICAgdGhpcy5jYXRlZ29yeW5hbWUgPSBjYXRlZ29yeW5hbWU7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgPSBcIlwiLCBwcmlvcml0eSwgY2F0ZWdvcnksIGlkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0RGF0ZShkdWVEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuXG4gIGdldERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgfVxuXG4gIHNldFByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICBzZXRDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgfVxuXG4gIGdldENhdGVnb3J5KCkge1xuICAgIHJldHVybiB0aGlzLmNhdGVnb3J5O1xuICB9XG5cbiAgc2V0SUQoKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgZ2V0SUQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBUVGFzayBmcm9tIFwiLi90YXNrMlwiO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL2NhdGVnb3J5XCI7XG5cbmltcG9ydCBtb29uIGZyb20gXCIuL2ltZ3MvaGFsZi1tb29uLnBuZ1wiO1xuaW1wb3J0IHN1biBmcm9tIFwiLi9pbWdzL3N1bnBpeGVsLnBuZ1wiO1xuXG5sZXQgc2VsZWN0ZWRDYXRlZ29yeSA9IFwiYWxsIHRhc2tzXCI7XG5sZXQgbmFtZUltcHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpO1xubGV0IHRoZW1lSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWNvblwiKTtcbmxldCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xubGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZVwiKTtcbmxldCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJnXCIpO1xubGV0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNsb3NlXCIpO1xubGV0IHRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFRhc2tcIik7XG5sZXQgY2F0ZWdvcnlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0ZWdvcnlcIik7XG5sZXQgY2F0ZWdvcnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2NhdGVnb3J5XVwiKTtcblxuY29uc3QgaW5pdGlhbExvYWQgPSAoKCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIC8vIEluaXRpYWwgRGF0ZSBVcGRhdGVcbiAgICBsZXQgaW5pdGlhbERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBpbml0YWxUaW1lID0gaW5pdGlhbERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgaW5mby50ZXh0Q29udGVudCA9IGBJdCdzICR7aW5pdGlhbERhdGUudG9EYXRlU3RyaW5nKCl9LCAke2luaXRhbFRpbWV9YDtcblxuICAgIC8vIFN0b3JhZ2VcblxuICAgIC8vIFVzZXJOYW1lXG5cbiAgICBjb25zdCB1c2VyTmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlck5hbWVcIikgfHwgXCJcIjtcbiAgICBuYW1lSW1wdXQudmFsdWUgPSB1c2VyTmFtZTtcblxuICAgIG5hbWVJbXB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJOYW1lXCIsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIFRoZW1lXG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA9PSBcImRhcmstdGhlbWVcIikge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay10aGVtZVwiKTtcbiAgICAgIHRoZW1lSWNvbi5zcmMgPSBzdW47XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJub3JtYWxcIik7XG4gICAgICB0aGVtZUljb24uc3JjID0gbW9vbjtcbiAgICB9XG5cbiAgICAvLyBUaGVtZSBDaGFuZ2VyXG5cbiAgICB0aGVtZUljb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstdGhlbWVcIik7XG4gICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrLXRoZW1lXCIpKSB7XG4gICAgICAgIHRoZW1lSWNvbi5zcmMgPSBzdW47XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrLXRoZW1lXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhlbWVJY29uLnNyYyA9IG1vb247XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJub3JtYWxcIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vQ2F0ZWdvcnkgSW5wdXRcblxuICAgIGNhdGVnb3J5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgbGV0IGN1cnJlbnQgPSBuZXcgQ2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpO1xuICAgICAgbGV0IGN1cnJlbnRDYXRlZ29yaWVzSW5TdG9yYWdlID0gSlNPTi5wYXJzZShcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWVzXCIpXG4gICAgICApO1xuICAgICAgbGV0IGNhdGVnb3JpZXMgPSBjdXJyZW50Q2F0ZWdvcmllc0luU3RvcmFnZTtcbiAgICAgIGNhdGVnb3JpZXMucHVzaChjdXJyZW50KTtcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGNhdGVnb3J5SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXRlZ29yaWVzXCIsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3JpZXMpKTtcblxuICAgICAgcmVuZGVyQ2F0ZWdvcmllcygpO1xuICAgICAgdXBkYXRlRG9tKCk7XG4gICAgICBjaGFuZ2VTZWxlY3RlZE9uU2NyZWVuQ1NTKCk7XG4gICAgfSk7XG5cbiAgICAvLyBPcGVuIEFkZCBUYXNrIE1vZGFsXG5cbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdGFza01vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSk7XG5cbiAgICAvLyBDbG9zZSBNb2RhbFxuXG4gICAgbW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIFRpbWVcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiBnZXREaXNwbGF5VGltZSgpIHtcbiAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgY3VycmVudFRpbWUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgIGluZm8udGV4dENvbnRlbnQgPSBgSXQncyAke2N1cnJlbnREYXRlLnRvRGF0ZVN0cmluZygpfSwgJHtjdXJyZW50VGltZX1gO1xuICAgIH0sIDEwMDApO1xuICB9KTtcblxuICAvLyBDYXRlZ29yeSBTd2l0Y2hlclxufSkoKTtcblxuLy8gTG9hZCBDYXRlZ29yaWVzIHRvIERPTVxuXG5mdW5jdGlvbiBsb2FkQ2F0ZWdvcmllcygpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmllc1wiKSkge1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgXCJjYXRlZ29yaWVzXCIsXG4gICAgICBKU09OLnN0cmluZ2lmeShbeyBjYXRlZ29yeW5hbWU6IFwiYWxsIHRhc2tzXCIgfV0pXG4gICAgKTtcbiAgfVxuICByZW5kZXJDYXRlZ29yaWVzKCk7XG59XG5cbmxvYWRDYXRlZ29yaWVzKCk7XG5cbi8vIExvYWQgVGFza3NcblxuZnVuY3Rpb24gbG9hZFRhc2tzKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkge1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgfVxufVxuXG5sb2FkVGFza3MoKTtcblxuLy8gVGFzayBTdWJtaXQgdG8gQ3JlYXRlIFRhc2tcblxudGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgbGV0IHRhc2tpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza2lucHV0XCIpO1xuICBsZXQgdGFza2lucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NpbnB1dFwiKTtcbiAgbGV0IHRhc2tpbnB1dER1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlZGF0ZVwiKTtcbiAgbGV0IHRhc2tpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnXG4gICk7XG5cbiAgbGV0IHRhc2tsZW5ndGggPSB0YXNraW5wdXQudmFsdWUubGVuZ3RoO1xuICBsZXQgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApO1xuICBpZiAodGFza2xlbmd0aCA+PSAxKSB7XG4gICAgbGV0IGN1cnJlbnRDcmVhdGVUYXNrID0gbmV3IFRUYXNrKFxuICAgICAgdGFza2lucHV0LnZhbHVlLFxuICAgICAgdGFza2lucHV0RGVzY3JpcHRpb24udmFsdWUsXG4gICAgICB0YXNraW5wdXREdWUudmFsdWUsXG4gICAgICB0YXNraW5wdXRQcmlvcml0eS52YWx1ZSxcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnksXG4gICAgICBpZFxuICAgICk7XG5cbiAgICBsZXQgY3VycmVudFRhc2tzSW5TdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcblxuICAgIGxldCB0YXNrcyA9IGN1cnJlbnRUYXNrc0luU3RvcmFnZTtcblxuICAgIHRhc2tzLnB1c2goY3VycmVudENyZWF0ZVRhc2spO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuXG4gICAgdGFza2lucHV0LnZhbHVlID0gbnVsbDtcbiAgICB0YXNraW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IG51bGw7XG4gICAgdGFza2lucHV0RHVlLnZhbHVlID0gbnVsbDtcblxuICAgIGNvbnNvbGUudGFibGUodGFza3MpO1xuXG4gICAgdGFza01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0gZWxzZSB7XG4gICAgdGFza01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbn0pO1xuXG4vLyBSZW5kZXIgQ2F0ZWdvcmllc1xuXG5mdW5jdGlvbiByZW5kZXJDYXRlZ29yaWVzKCkge1xuICBjb25zdCBjYXRlZ29yeURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5LWRpc3BsYXlcIik7XG4gIGRlbGV0ZUNhdGVnb3JpZXMoY2F0ZWdvcnlEaXNwbGF5KTtcbiAgbGV0IGN1cnJlbnRDYXRlZ29yaWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpZXNcIikpO1xuICBjdXJyZW50Q2F0ZWdvcmllcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgbGV0IGNhdGVnb3J5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYXRlZ29yeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlcIik7XG4gICAgY2F0ZWdvcnlCdXR0b24uc2V0QXR0cmlidXRlKFwiY2F0ZWdvcnlcIiwgYCR7ZWxlbWVudC5jYXRlZ29yeW5hbWV9YCk7XG4gICAgY2F0ZWdvcnlCdXR0b24uaW5uZXJUZXh0ID0gZWxlbWVudC5jYXRlZ29yeW5hbWU7XG4gICAgaWYgKGVsZW1lbnQuY2F0ZWdvcnluYW1lICE9IFwiYWxsIHRhc2tzXCIpIHtcbiAgICAgIGxldCBjYXRlZ29yeURlbGV0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGNhdGVnb3J5RGVsZXRlU3Bhbi5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlkZWxldGVcIik7XG4gICAgICBjYXRlZ29yeURlbGV0ZVNwYW4uaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgICBjYXRlZ29yeUJ1dHRvbi5hcHBlbmRDaGlsZChjYXRlZ29yeURlbGV0ZVNwYW4pO1xuICAgIH1cbiAgICBjYXRlZ29yeURpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlCdXR0b24pO1xuICB9KTtcbiAgdXBkYXRlRG9tKCk7XG4gIGFkZENhdGVnb3J5U3dpdGNoZXIoKTtcbn1cblxuLy8gdXBkYXRlIENhdGVnb3J5IFNlbGVjdG9ycyBhbmQgTG9hZGVyc1xuXG5mdW5jdGlvbiB1cGRhdGVEb20oKSB7XG4gIG5hbWVJbXB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKTtcbiAgdGhlbWVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uXCIpO1xuICBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuICBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVcIik7XG4gIHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYmdcIik7XG4gIG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNsb3NlXCIpO1xuICB0YXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRUYXNrXCIpO1xuICBjYXRlZ29yeUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeVwiKTtcbiAgY2F0ZWdvcnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2NhdGVnb3J5XVwiKTtcbn1cblxuLy8gRGVsZXRlIEV4aXN0aW5nIENhdGVnb3JpZXNcbmZ1bmN0aW9uIGRlbGV0ZUNhdGVnb3JpZXMoeCkge1xuICB3aGlsZSAoeC5maXJzdENoaWxkKSB7XG4gICAgeC5yZW1vdmVDaGlsZCh4LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNlbGVjdGVkT25TY3JlZW5DU1MoKSB7XG4gIGNhdGVnb3J5QnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKFwiY2F0ZWdvcnlcIikgPT0gc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFZpZXdcIik7XG4gICAgICBjb25zb2xlLmxvZyhidXR0b24uZ2V0QXR0cmlidXRlKFwiY2F0ZWdvcnlcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkVmlld1wiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRDYXRlZ29yeVN3aXRjaGVyKCkge1xuICBjYXRlZ29yeUJ1dHRvbi5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBzZWxlY3RlZENhdGVnb3J5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2F0ZWdvcnlcIik7XG4gICAgICBjaGFuZ2VTZWxlY3RlZE9uU2NyZWVuQ1NTKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5jaGFuZ2VTZWxlY3RlZE9uU2NyZWVuQ1NTKCk7XG5cbmV4cG9ydCB7IGluaXRpYWxMb2FkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
/* harmony export */   "generalApp": () => (/* binding */ generalApp)
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

const generalApp = (() => {
  window.addEventListener("load", () => {
    // Initial DOM queries

    // Initial Date Update
    let initialDate = new Date();
    let initalTime = initialDate.toLocaleTimeString();
    info.textContent = `${initialDate.toDateString()}, ${initalTime}`;

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
      themeIcon.src = "../dist/images/sunpixel.png";
    } else {
      localStorage.setItem("theme", "normal");
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
      categoryInput.value = "";
      localStorage.setItem("categories", JSON.stringify(categories));
      renderCategories();
    });

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
      // loadCategorySelect();
    }

    // Delete Existing Categories

    function deleteCategories(x) {
      while (x.firstChild) {
        x.removeChild(x.firstChild);
      }
    }

    // update Category Selectors and Loaders
  });
})();

function updateDom() {
  nameImput = document.getElementById("name");
  themeIcon = document.getElementById("icon");
  info = document.querySelector(".info");
  addTaskButton = document.querySelector(".create");
  taskModal = document.querySelector(".modal-bg");
  modalClose = document.querySelector(".modal-close");
  taskSubmitButton = document.querySelector("#submitTask");
  categoryInput = document.getElementById("category");
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2NhdGVnb3J5LmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL3Rhc2syLmpzIiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvZ2VuZXJhbERvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDYXRlZ29yaWVzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IHtcbiAgY29uc3RydWN0b3IoY2F0ZWdvcnluYW1lKSB7XG4gICAgdGhpcy5jYXRlZ29yeW5hbWUgPSBjYXRlZ29yeW5hbWU7XG4gIH1cbn1cblxuLy8gY29uc3QgY2F0ZWdvcnlNb2R1bGUgPSAoKCkgPT4ge1xuLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuLy8gICAgIGNvbnN0IGNhdGVnb3J5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdGVnb3J5XCIpO1xuLy8gICAgIGNhdGVnb3J5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuLy8gICAgICAgbGV0IGN1cnJlbnQgPSBuZXcgQ2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpO1xuLy8gICAgICAgbGV0IGN1cnJlbnRDYXRlZ29yaWVzSW5TdG9yYWdlID0gSlNPTi5wYXJzZShcbi8vICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWVzXCIpXG4vLyAgICAgICApO1xuLy8gICAgICAgbGV0IGNhdGVnb3JpZXMgPSBjdXJyZW50Q2F0ZWdvcmllc0luU3RvcmFnZTtcbi8vICAgICAgIGNhdGVnb3JpZXMucHVzaChjdXJyZW50KTtcbi8vICAgICAgIGNhdGVnb3J5SW5wdXQudmFsdWUgPSBcIlwiO1xuLy8gICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXRlZ29yaWVzXCIsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3JpZXMpKTtcbi8vICAgICAgIGFkZENhdGVnb3JpZXMoY2F0ZWdvcmllcyk7XG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuXG4vLyAgIGZ1bmN0aW9uIGxvYWRDYXRlZ29yaWVzKCkge1xuLy8gICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpZXNcIikpIHtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4vLyAgICAgICAgIFwiY2F0ZWdvcmllc1wiLFxuLy8gICAgICAgICBKU09OLnN0cmluZ2lmeShbeyBjYXRlZ29yeW5hbWU6IFwiYWxsIHRhc2tzXCIgfV0pXG4vLyAgICAgICApO1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyAgIGxvYWRDYXRlZ29yaWVzKCk7XG5cbi8vICAgZnVuY3Rpb24gYWRkQ2F0ZWdvcmllcyhjYXRlZ29yaWVzKSB7XG4vLyAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuLy8gICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkuY2F0ZWdvcnluYW1lKTtcbi8vICAgICB9KTtcbi8vICAgfVxuLy8gfSkoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgPSBcIlwiLCBwcmlvcml0eSwgY2F0ZWdvcnksIGlkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0RGF0ZShkdWVEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuXG4gIGdldERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgfVxuXG4gIHNldFByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICBzZXRDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgfVxuXG4gIGdldENhdGVnb3J5KCkge1xuICAgIHJldHVybiB0aGlzLmNhdGVnb3J5O1xuICB9XG5cbiAgc2V0SUQoKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgZ2V0SUQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRUYXNrIGZyb20gXCIuL3Rhc2syXCI7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vY2F0ZWdvcnlcIjtcblxubGV0IHNlbGVjdGVkQ2F0ZWdvcnkgPSBcImFsbCB0YXNrc1wiO1xubGV0IG5hbWVJbXB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKTtcbmxldCB0aGVtZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImljb25cIik7XG5sZXQgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbmxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVcIik7XG5sZXQgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1iZ1wiKTtcbmxldCBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jbG9zZVwiKTtcbmxldCB0YXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRUYXNrXCIpO1xubGV0IGNhdGVnb3J5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdGVnb3J5XCIpO1xuXG5jb25zdCBnZW5lcmFsQXBwID0gKCgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAvLyBJbml0aWFsIERPTSBxdWVyaWVzXG5cbiAgICAvLyBJbml0aWFsIERhdGUgVXBkYXRlXG4gICAgbGV0IGluaXRpYWxEYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgaW5pdGFsVGltZSA9IGluaXRpYWxEYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIGluZm8udGV4dENvbnRlbnQgPSBgJHtpbml0aWFsRGF0ZS50b0RhdGVTdHJpbmcoKX0sICR7aW5pdGFsVGltZX1gO1xuXG4gICAgLy8gU3RvcmFnZVxuXG4gICAgLy8gVXNlck5hbWVcblxuICAgIGNvbnN0IHVzZXJOYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyTmFtZVwiKSB8fCBcIlwiO1xuICAgIG5hbWVJbXB1dC52YWx1ZSA9IHVzZXJOYW1lO1xuXG4gICAgbmFtZUltcHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlck5hbWVcIiwgZS50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gVGhlbWVcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpID09IFwiZGFyay10aGVtZVwiKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLXRoZW1lXCIpO1xuICAgICAgdGhlbWVJY29uLnNyYyA9IFwiLi4vZGlzdC9pbWFnZXMvc3VucGl4ZWwucG5nXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJub3JtYWxcIik7XG4gICAgfVxuXG4gICAgLy8gVGhlbWUgQ2hhbmdlclxuXG4gICAgdGhlbWVJY29uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLXRoZW1lXCIpO1xuICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFyay10aGVtZVwiKSkge1xuICAgICAgICB0aGVtZUljb24uc3JjID0gXCIuLi9kaXN0L2ltYWdlcy9zdW5waXhlbC5wbmdcIjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmstdGhlbWVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVtZUljb24uc3JjID0gXCIuLi9kaXN0L2ltYWdlcy9oYWxmLW1vb24ucG5nXCI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJub3JtYWxcIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vQ2F0ZWdvcnkgSW5wdXRcblxuICAgIGNhdGVnb3J5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgbGV0IGN1cnJlbnQgPSBuZXcgQ2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpO1xuICAgICAgbGV0IGN1cnJlbnRDYXRlZ29yaWVzSW5TdG9yYWdlID0gSlNPTi5wYXJzZShcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWVzXCIpXG4gICAgICApO1xuICAgICAgbGV0IGNhdGVnb3JpZXMgPSBjdXJyZW50Q2F0ZWdvcmllc0luU3RvcmFnZTtcbiAgICAgIGNhdGVnb3JpZXMucHVzaChjdXJyZW50KTtcbiAgICAgIGNhdGVnb3J5SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXRlZ29yaWVzXCIsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3JpZXMpKTtcbiAgICAgIHJlbmRlckNhdGVnb3JpZXMoKTtcbiAgICB9KTtcblxuICAgIC8vIExvYWQgQ2F0ZWdvcmllcyB0byBET01cblxuICAgIGZ1bmN0aW9uIGxvYWRDYXRlZ29yaWVzKCkge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmllc1wiKSkge1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgXCJjYXRlZ29yaWVzXCIsXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW3sgY2F0ZWdvcnluYW1lOiBcImFsbCB0YXNrc1wiIH1dKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmVuZGVyQ2F0ZWdvcmllcygpO1xuICAgIH1cblxuICAgIGxvYWRDYXRlZ29yaWVzKCk7XG5cbiAgICAvLyBPcGVuIEFkZCBUYXNrIE1vZGFsXG5cbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdGFza01vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSk7XG5cbiAgICAvLyBDbG9zZSBNb2RhbFxuXG4gICAgbW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIFRpbWVcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiBnZXREaXNwbGF5VGltZSgpIHtcbiAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgY3VycmVudFRpbWUgPSBjdXJyZW50RGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgIGluZm8udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50RGF0ZS50b0RhdGVTdHJpbmcoKX0sICR7Y3VycmVudFRpbWV9YDtcbiAgICB9LCAxMDAwKTtcblxuICAgIC8vIExvYWQgVGFza3NcblxuICAgIGZ1bmN0aW9uIGxvYWRUYXNrcygpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFRhc2tzKCk7XG5cbiAgICAvLyBUYXNrIFN1Ym1pdCB0byBDcmVhdGUgVGFza1xuXG4gICAgdGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBsZXQgdGFza2lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNraW5wdXRcIik7XG4gICAgICBsZXQgdGFza2lucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NpbnB1dFwiKTtcbiAgICAgIGxldCB0YXNraW5wdXREdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZWRhdGVcIik7XG4gICAgICBsZXQgdGFza2lucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnXG4gICAgICApO1xuXG4gICAgICBsZXQgdGFza2xlbmd0aCA9IHRhc2tpbnB1dC52YWx1ZS5sZW5ndGg7XG4gICAgICBsZXQgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApO1xuICAgICAgaWYgKHRhc2tsZW5ndGggPj0gMSkge1xuICAgICAgICBsZXQgY3VycmVudENyZWF0ZVRhc2sgPSBuZXcgVFRhc2soXG4gICAgICAgICAgdGFza2lucHV0LnZhbHVlLFxuICAgICAgICAgIHRhc2tpbnB1dERlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgIHRhc2tpbnB1dER1ZS52YWx1ZSxcbiAgICAgICAgICB0YXNraW5wdXRQcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5LFxuICAgICAgICAgIGlkXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRUYXNrc0luU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG5cbiAgICAgICAgbGV0IHRhc2tzID0gY3VycmVudFRhc2tzSW5TdG9yYWdlO1xuXG4gICAgICAgIHRhc2tzLnB1c2goY3VycmVudENyZWF0ZVRhc2spO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcblxuICAgICAgICB0YXNraW5wdXQudmFsdWUgPSBudWxsO1xuICAgICAgICB0YXNraW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRhc2tpbnB1dER1ZS52YWx1ZSA9IG51bGw7XG5cbiAgICAgICAgdGFza01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFJlbmRlciBDYXRlZ29yaWVzXG5cbiAgICBmdW5jdGlvbiByZW5kZXJDYXRlZ29yaWVzKCkge1xuICAgICAgY29uc3QgY2F0ZWdvcnlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXRlZ29yeS1kaXNwbGF5XCIpO1xuICAgICAgZGVsZXRlQ2F0ZWdvcmllcyhjYXRlZ29yeURpc3BsYXkpO1xuICAgICAgbGV0IGN1cnJlbnRDYXRlZ29yaWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpZXNcIikpO1xuICAgICAgY3VycmVudENhdGVnb3JpZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBsZXQgY2F0ZWdvcnlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjYXRlZ29yeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlcIik7XG4gICAgICAgIGNhdGVnb3J5QnV0dG9uLnNldEF0dHJpYnV0ZShcImNhdGVnb3J5XCIsIGAke2VsZW1lbnQuY2F0ZWdvcnluYW1lfWApO1xuICAgICAgICBjYXRlZ29yeUJ1dHRvbi5pbm5lclRleHQgPSBlbGVtZW50LmNhdGVnb3J5bmFtZTtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2F0ZWdvcnluYW1lICE9IFwiYWxsIHRhc2tzXCIpIHtcbiAgICAgICAgICBsZXQgY2F0ZWdvcnlEZWxldGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgY2F0ZWdvcnlEZWxldGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeWRlbGV0ZVwiKTtcbiAgICAgICAgICBjYXRlZ29yeURlbGV0ZVNwYW4uaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgICAgICAgY2F0ZWdvcnlCdXR0b24uYXBwZW5kQ2hpbGQoY2F0ZWdvcnlEZWxldGVTcGFuKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRlZ29yeURpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlCdXR0b24pO1xuICAgICAgfSk7XG4gICAgICB1cGRhdGVEb20oKTtcbiAgICAgIC8vIGxvYWRDYXRlZ29yeVNlbGVjdCgpO1xuICAgIH1cblxuICAgIC8vIERlbGV0ZSBFeGlzdGluZyBDYXRlZ29yaWVzXG5cbiAgICBmdW5jdGlvbiBkZWxldGVDYXRlZ29yaWVzKHgpIHtcbiAgICAgIHdoaWxlICh4LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgeC5yZW1vdmVDaGlsZCh4LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBDYXRlZ29yeSBTZWxlY3RvcnMgYW5kIExvYWRlcnNcbiAgfSk7XG59KSgpO1xuXG5mdW5jdGlvbiB1cGRhdGVEb20oKSB7XG4gIG5hbWVJbXB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKTtcbiAgdGhlbWVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uXCIpO1xuICBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuICBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVcIik7XG4gIHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYmdcIik7XG4gIG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNsb3NlXCIpO1xuICB0YXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRUYXNrXCIpO1xuICBjYXRlZ29yeUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeVwiKTtcbn1cblxuZXhwb3J0IHsgZ2VuZXJhbEFwcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
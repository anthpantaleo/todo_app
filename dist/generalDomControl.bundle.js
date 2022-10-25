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
    const categoryInput = document.getElementById("category");
    let categorySelect = document.querySelectorAll("[category]");

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
          "categoryplaceholder",
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
      loadCategorySelect();
    }

    // Delete Existing Categories

    function deleteCategories(x) {
      while (x.firstChild) {
        x.removeChild(x.firstChild);
      }
    }

    // update Category Selectors and Loaders

    function loadCategorySelect() {
      categorySelect = document.querySelectorAll("[category]");
      categorySelect.forEach((element) => {
        if (element.getAttribute("category") == selectedCategory) {
          element.classList.toggle("selectedView");
        } else {
          element.classList.remove("selectedView");
        }
      });
    }
  });
})();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy90YXNrMi5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2dlbmVyYWxEb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2F0ZWdvcmllc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSB7XG4gIGNvbnN0cnVjdG9yKGNhdGVnb3J5bmFtZSkge1xuICAgIHRoaXMuY2F0ZWdvcnluYW1lID0gY2F0ZWdvcnluYW1lO1xuICB9XG59XG5cbi8vIGNvbnN0IGNhdGVnb3J5TW9kdWxlID0gKCgpID0+IHtcbi8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbi8vICAgICBjb25zdCBjYXRlZ29yeUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeVwiKTtcbi8vICAgICBjYXRlZ29yeUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbi8vICAgICAgIGxldCBjdXJyZW50ID0gbmV3IENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKTtcbi8vICAgICAgIGxldCBjdXJyZW50Q2F0ZWdvcmllc0luU3RvcmFnZSA9IEpTT04ucGFyc2UoXG4vLyAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmllc1wiKVxuLy8gICAgICAgKTtcbi8vICAgICAgIGxldCBjYXRlZ29yaWVzID0gY3VycmVudENhdGVnb3JpZXNJblN0b3JhZ2U7XG4vLyAgICAgICBjYXRlZ29yaWVzLnB1c2goY3VycmVudCk7XG4vLyAgICAgICBjYXRlZ29yeUlucHV0LnZhbHVlID0gXCJcIjtcbi8vICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2F0ZWdvcmllc1wiLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKSk7XG4vLyAgICAgICBhZGRDYXRlZ29yaWVzKGNhdGVnb3JpZXMpO1xuLy8gICAgIH0pO1xuLy8gICB9KTtcblxuLy8gICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcmllcygpIHtcbi8vICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWVzXCIpKSB7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuLy8gICAgICAgICBcImNhdGVnb3JpZXNcIixcbi8vICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW3sgY2F0ZWdvcnluYW1lOiBcImFsbCB0YXNrc1wiIH1dKVxuLy8gICAgICAgKTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICBsb2FkQ2F0ZWdvcmllcygpO1xuXG4vLyAgIGZ1bmN0aW9uIGFkZENhdGVnb3JpZXMoY2F0ZWdvcmllcykge1xuLy8gICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5LmNhdGVnb3J5bmFtZSk7XG4vLyAgICAgfSk7XG4vLyAgIH1cbi8vIH0pKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlID0gXCJcIiwgcHJpb3JpdHksIGNhdGVnb3J5LCBpZCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldERhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cblxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgc2V0Q2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gIH1cblxuICBnZXRDYXRlZ29yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yeTtcbiAgfVxuXG4gIHNldElEKCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIGdldElEKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUVGFzayBmcm9tIFwiLi90YXNrMlwiO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL2NhdGVnb3J5XCI7XG5cbmxldCBzZWxlY3RlZENhdGVnb3J5ID0gXCJhbGwgdGFza3NcIjtcblxuY29uc3QgZ2VuZXJhbEFwcCA9ICgoKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgLy8gSW5pdGlhbCBET00gcXVlcmllc1xuICAgIGNvbnN0IG5hbWVJbXB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKTtcbiAgICBjb25zdCB0aGVtZUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImljb25cIik7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVcIik7XG4gICAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1iZ1wiKTtcbiAgICBjb25zdCBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jbG9zZVwiKTtcbiAgICBjb25zdCB0YXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRUYXNrXCIpO1xuICAgIGNvbnN0IGNhdGVnb3J5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdGVnb3J5XCIpO1xuICAgIGxldCBjYXRlZ29yeVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbY2F0ZWdvcnldXCIpO1xuXG4gICAgLy8gSW5pdGlhbCBEYXRlIFVwZGF0ZVxuICAgIGxldCBpbml0aWFsRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGluaXRhbFRpbWUgPSBpbml0aWFsRGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICBpbmZvLnRleHRDb250ZW50ID0gYCR7aW5pdGlhbERhdGUudG9EYXRlU3RyaW5nKCl9LCAke2luaXRhbFRpbWV9YDtcblxuICAgIC8vIFN0b3JhZ2VcblxuICAgIC8vIFVzZXJOYW1lXG5cbiAgICBjb25zdCB1c2VyTmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlck5hbWVcIikgfHwgXCJcIjtcbiAgICBuYW1lSW1wdXQudmFsdWUgPSB1c2VyTmFtZTtcblxuICAgIG5hbWVJbXB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJOYW1lXCIsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIFRoZW1lXG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA9PSBcImRhcmstdGhlbWVcIikge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay10aGVtZVwiKTtcbiAgICAgIHRoZW1lSWNvbi5zcmMgPSBcIi4uL2Rpc3QvaW1hZ2VzL3N1bnBpeGVsLnBuZ1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibm9ybWFsXCIpO1xuICAgIH1cblxuICAgIC8vIFRoZW1lIENoYW5nZXJcblxuICAgIHRoZW1lSWNvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay10aGVtZVwiKTtcbiAgICAgIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmstdGhlbWVcIikpIHtcbiAgICAgICAgdGhlbWVJY29uLnNyYyA9IFwiLi4vZGlzdC9pbWFnZXMvc3VucGl4ZWwucG5nXCI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrLXRoZW1lXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhlbWVJY29uLnNyYyA9IFwiLi4vZGlzdC9pbWFnZXMvaGFsZi1tb29uLnBuZ1wiO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibm9ybWFsXCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvL0NhdGVnb3J5IElucHV0XG5cbiAgICBjYXRlZ29yeUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIGxldCBjdXJyZW50ID0gbmV3IENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGxldCBjdXJyZW50Q2F0ZWdvcmllc0luU3RvcmFnZSA9IEpTT04ucGFyc2UoXG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmllc1wiKVxuICAgICAgKTtcbiAgICAgIGxldCBjYXRlZ29yaWVzID0gY3VycmVudENhdGVnb3JpZXNJblN0b3JhZ2U7XG4gICAgICBjYXRlZ29yaWVzLnB1c2goY3VycmVudCk7XG4gICAgICBjYXRlZ29yeUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2F0ZWdvcmllc1wiLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKSk7XG4gICAgICByZW5kZXJDYXRlZ29yaWVzKCk7XG4gICAgfSk7XG5cbiAgICAvLyBMb2FkIENhdGVnb3JpZXMgdG8gRE9NXG5cbiAgICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcmllcygpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpZXNcIikpIHtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgIFwiY2F0ZWdvcmllc1wiLFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFt7IGNhdGVnb3J5bmFtZTogXCJhbGwgdGFza3NcIiB9XSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJlbmRlckNhdGVnb3JpZXMoKTtcbiAgICB9XG5cbiAgICBsb2FkQ2F0ZWdvcmllcygpO1xuXG4gICAgLy8gT3BlbiBBZGQgVGFzayBNb2RhbFxuXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2UgTW9kYWxcblxuICAgIG1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSBUaW1lXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gZ2V0RGlzcGxheVRpbWUoKSB7XG4gICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IGN1cnJlbnRUaW1lID0gY3VycmVudERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICBpbmZvLnRleHRDb250ZW50ID0gYCR7Y3VycmVudERhdGUudG9EYXRlU3RyaW5nKCl9LCAke2N1cnJlbnRUaW1lfWA7XG4gICAgfSwgMTAwMCk7XG5cbiAgICAvLyBMb2FkIFRhc2tzXG5cbiAgICBmdW5jdGlvbiBsb2FkVGFza3MoKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkge1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRUYXNrcygpO1xuXG4gICAgLy8gVGFzayBTdWJtaXQgdG8gQ3JlYXRlIFRhc2tcblxuICAgIHRhc2tTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IHRhc2tpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza2lucHV0XCIpO1xuICAgICAgbGV0IHRhc2tpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjaW5wdXRcIik7XG4gICAgICBsZXQgdGFza2lucHV0RHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVkYXRlXCIpO1xuICAgICAgbGV0IHRhc2tpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJ1xuICAgICAgKTtcblxuICAgICAgbGV0IHRhc2tsZW5ndGggPSB0YXNraW5wdXQudmFsdWUubGVuZ3RoO1xuICAgICAgbGV0IGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKTtcbiAgICAgIGlmICh0YXNrbGVuZ3RoID49IDEpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRDcmVhdGVUYXNrID0gbmV3IFRUYXNrKFxuICAgICAgICAgIHRhc2tpbnB1dC52YWx1ZSxcbiAgICAgICAgICB0YXNraW5wdXREZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICB0YXNraW5wdXREdWUudmFsdWUsXG4gICAgICAgICAgdGFza2lucHV0UHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgXCJjYXRlZ29yeXBsYWNlaG9sZGVyXCIsXG4gICAgICAgICAgaWRcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgY3VycmVudFRhc2tzSW5TdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcblxuICAgICAgICBsZXQgdGFza3MgPSBjdXJyZW50VGFza3NJblN0b3JhZ2U7XG5cbiAgICAgICAgdGFza3MucHVzaChjdXJyZW50Q3JlYXRlVGFzayk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuXG4gICAgICAgIHRhc2tpbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRhc2tpbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGFza2lucHV0RHVlLnZhbHVlID0gbnVsbDtcblxuICAgICAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUmVuZGVyIENhdGVnb3JpZXNcblxuICAgIGZ1bmN0aW9uIHJlbmRlckNhdGVnb3JpZXMoKSB7XG4gICAgICBjb25zdCBjYXRlZ29yeURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5LWRpc3BsYXlcIik7XG4gICAgICBkZWxldGVDYXRlZ29yaWVzKGNhdGVnb3J5RGlzcGxheSk7XG4gICAgICBsZXQgY3VycmVudENhdGVnb3JpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmllc1wiKSk7XG4gICAgICBjdXJyZW50Q2F0ZWdvcmllcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGxldCBjYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNhdGVnb3J5QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeVwiKTtcbiAgICAgICAgY2F0ZWdvcnlCdXR0b24uc2V0QXR0cmlidXRlKFwiY2F0ZWdvcnlcIiwgYCR7ZWxlbWVudC5jYXRlZ29yeW5hbWV9YCk7XG4gICAgICAgIGNhdGVnb3J5QnV0dG9uLmlubmVyVGV4dCA9IGVsZW1lbnQuY2F0ZWdvcnluYW1lO1xuICAgICAgICBpZiAoZWxlbWVudC5jYXRlZ29yeW5hbWUgIT0gXCJhbGwgdGFza3NcIikge1xuICAgICAgICAgIGxldCBjYXRlZ29yeURlbGV0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICBjYXRlZ29yeURlbGV0ZVNwYW4uY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5ZGVsZXRlXCIpO1xuICAgICAgICAgIGNhdGVnb3J5RGVsZXRlU3Bhbi5pbm5lclRleHQgPSBcIlhcIjtcbiAgICAgICAgICBjYXRlZ29yeUJ1dHRvbi5hcHBlbmRDaGlsZChjYXRlZ29yeURlbGV0ZVNwYW4pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGVnb3J5RGlzcGxheS5hcHBlbmRDaGlsZChjYXRlZ29yeUJ1dHRvbik7XG4gICAgICB9KTtcbiAgICAgIGxvYWRDYXRlZ29yeVNlbGVjdCgpO1xuICAgIH1cblxuICAgIC8vIERlbGV0ZSBFeGlzdGluZyBDYXRlZ29yaWVzXG5cbiAgICBmdW5jdGlvbiBkZWxldGVDYXRlZ29yaWVzKHgpIHtcbiAgICAgIHdoaWxlICh4LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgeC5yZW1vdmVDaGlsZCh4LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBDYXRlZ29yeSBTZWxlY3RvcnMgYW5kIExvYWRlcnNcblxuICAgIGZ1bmN0aW9uIGxvYWRDYXRlZ29yeVNlbGVjdCgpIHtcbiAgICAgIGNhdGVnb3J5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltjYXRlZ29yeV1cIik7XG4gICAgICBjYXRlZ29yeVNlbGVjdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShcImNhdGVnb3J5XCIpID09IHNlbGVjdGVkQ2F0ZWdvcnkpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJzZWxlY3RlZFZpZXdcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRWaWV3XCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufSkoKTtcblxuZXhwb3J0IHsgZ2VuZXJhbEFwcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
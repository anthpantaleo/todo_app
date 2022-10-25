/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generalDom.js":
/*!***************************!*\
  !*** ./src/generalDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generalApp": () => (/* binding */ generalApp)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _task2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task2 */ "./src/task2.js");




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
        let currentCreateTask = new _task2__WEBPACK_IMPORTED_MODULE_1__["default"](
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

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _generalDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generalDom */ "./src/generalDom.js");


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/generalDom.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhbERvbUNvbnRyb2wuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7O0FBRVQ7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyQkFBMkIsSUFBSSxXQUFXOztBQUVwRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQkFBMkIsSUFBSSxZQUFZO0FBQ3ZFLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw4Q0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7OztBQ25IUDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEMEM7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFc0I7Ozs7Ozs7VUMzQnRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvZ2VuZXJhbERvbS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy90YXNrMi5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcblxuaW1wb3J0IFRUYXNrIGZyb20gXCIuL3Rhc2syXCI7XG5cbmNvbnN0IGdlbmVyYWxBcHAgPSAoKCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIC8vIEluaXRpYWwgRE9NIHF1ZXJpZXNcbiAgICBjb25zdCBuYW1lSW1wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XG4gICAgY29uc3QgdGhlbWVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uXCIpO1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlXCIpO1xuICAgIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYmdcIik7XG4gICAgY29uc3QgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY2xvc2VcIik7XG4gICAgY29uc3QgdGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0VGFza1wiKTtcblxuICAgIC8vIEluaXRpYWwgRGF0ZSBVcGRhdGVcbiAgICBsZXQgaW5pdGlhbERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBpbml0YWxUaW1lID0gaW5pdGlhbERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgaW5mby50ZXh0Q29udGVudCA9IGAke2luaXRpYWxEYXRlLnRvRGF0ZVN0cmluZygpfSwgJHtpbml0YWxUaW1lfWA7XG5cbiAgICAvLyBTdG9yYWdlXG5cbiAgICBjb25zdCB1c2VyTmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlck5hbWVcIikgfHwgXCJcIjtcbiAgICBjb25zdCB1c2VyVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IFwiXCI7XG4gICAgY29uc3QgdGFza3NJblN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzSW5TdG9yYWdlXCIpIHx8IFwiW11cIjtcblxuICAgIG5hbWVJbXB1dC52YWx1ZSA9IHVzZXJOYW1lO1xuXG4gICAgbmFtZUltcHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlck5hbWVcIiwgZS50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgPT0gXCJkYXJrLXRoZW1lXCIpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstdGhlbWVcIik7XG4gICAgICB0aGVtZUljb24uc3JjID0gXCIuLi9kaXN0L2ltYWdlcy9zdW5waXhlbC5wbmdcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcIm5vcm1hbFwiKTtcbiAgICB9XG5cbiAgICB0aGVtZUljb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstdGhlbWVcIik7XG4gICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrLXRoZW1lXCIpKSB7XG4gICAgICAgIHRoZW1lSWNvbi5zcmMgPSBcIi4uL2Rpc3QvaW1hZ2VzL3N1bnBpeGVsLnBuZ1wiO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFyay10aGVtZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW1lSWNvbi5zcmMgPSBcIi4uL2Rpc3QvaW1hZ2VzL2hhbGYtbW9vbi5wbmdcIjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcIm5vcm1hbFwiKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gT3BlbiBBZGQgVGFzayBNb2RhbFxuXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2UgTW9kYWxcblxuICAgIG1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSBUaW1lXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gZ2V0RGlzcGxheVRpbWUoKSB7XG4gICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IGN1cnJlbnRUaW1lID0gY3VycmVudERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICBpbmZvLnRleHRDb250ZW50ID0gYCR7Y3VycmVudERhdGUudG9EYXRlU3RyaW5nKCl9LCAke2N1cnJlbnRUaW1lfWA7XG4gICAgfSwgMTAwMCk7XG5cbiAgICAvLyBUYXNrIFN1Ym1pdCB0byBDcmVhdGUgVGFza1xuICAgIHRhc2tTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIGNyZWF0ZVRhc2soZXYpO1xuXG4gICAgICBsZXQgdGFza2lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNraW5wdXRcIik7XG4gICAgICBsZXQgdGFza2lucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NpbnB1dFwiKTtcbiAgICAgIGxldCB0YXNraW5wdXREdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZWRhdGVcIik7XG4gICAgICBsZXQgdGFza2lucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnXG4gICAgICApO1xuXG4gICAgICBsZXQgdGFza2xlbmd0aCA9IHRhc2tpbnB1dC52YWx1ZS5sZW5ndGg7XG4gICAgICBsZXQgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApO1xuICAgICAgaWYgKHRhc2tsZW5ndGggPj0gMikge1xuICAgICAgICBsZXQgY3VycmVudENyZWF0ZVRhc2sgPSBuZXcgVFRhc2soXG4gICAgICAgICAgdGFza2lucHV0LnZhbHVlLFxuICAgICAgICAgIHRhc2tpbnB1dERlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgIHRhc2tpbnB1dER1ZS52YWx1ZSxcbiAgICAgICAgICB0YXNraW5wdXRQcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICBcImNhdGVnb3J5cGxhY2Vob2xkZXJcIixcbiAgICAgICAgICBpZFxuICAgICAgICApO1xuXG4gICAgICAgIHRhc2tpbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRhc2tpbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGFza2lucHV0RHVlLnZhbHVlID0gbnVsbDtcblxuICAgICAgICBsZXQgdGVtcHRUYXNrcyA9XG4gICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzSW5TdG9yYWdlXCIpKSB8fCBbXTtcbiAgICAgICAgdGVtcHRUYXNrcy5wdXNoKGN1cnJlbnRDcmVhdGVUYXNrKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzSW5TdHJvYWdlXCIsIEpTT04uc3RyaW5naWZ5KHRlbXB0VGFza3MpKTtcbiAgICAgICAgdGFza01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG4gIC8vICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc0luU3RvcmFnZVwiKSk7XG4gIC8vICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NJblN0b3JhZ2VcIik7XG4gIC8vIH1cbn0pKCk7XG5cbmV4cG9ydCB7IGdlbmVyYWxBcHAgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgPSBcIlwiLCBwcmlvcml0eSwgY2F0ZWdvcnksIGlkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0RGF0ZShkdWVEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuXG4gIGdldERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgfVxuXG4gIHNldFByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICBzZXRDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgfVxuXG4gIGdldENhdGVnb3J5KCkge1xuICAgIHJldHVybiB0aGlzLmNhdGVnb3J5O1xuICB9XG5cbiAgc2V0SUQoKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgZ2V0SUQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IGdlbmVyYWxBcHAgfSBmcm9tIFwiLi9nZW5lcmFsRG9tXCI7XG5cbmNvbnN0IHRhc2tNb2R1bGUgPSAoKCkgPT4ge1xuICBsZXQgdGFza3NJblN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpIHx8IFtdO1xuXG4gIGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNhdGVnb3J5KSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgdGhpcy5jYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcnk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdGVzdEZ1bmMoZXYpIHtcbiAgICBjb25zb2xlLmxvZyhcImNhbGxlZCBmcm9tIFRhc2sgTW9kdWxlXCIsIGV2KTtcbiAgfVxuXG4gIHJldHVybiB7IFRhc2ssIHRlc3RGdW5jIH07XG59KSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGV2KSB7XG4gIGNvbnNvbGUubG9nKFwiY2FsbGVkIGZyb20gQ3JlYXRlIFRhc2sgRnVuY3Rpb25cIiwgZXYpO1xuICB0YXNrTW9kdWxlLnRlc3RGdW5jKGV2KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVGFzayB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9nZW5lcmFsRG9tLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
      let current = currentDate.toLocaleTimeString();
      info.textContent = `${currentDate.toDateString()}, ${current}`;
    }, 1000);

    // Task Submit to Create Task
    taskSubmitButton.addEventListener("click", function (ev) {
      ev.preventDefault();
      console.log("yo");
      (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.createTask)(ev);
    });
  });
})();




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
  console.log("called from tasks", ev);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/tasks.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJCQUEyQixJQUFJLFdBQVc7O0FBRXBFOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQkFBMkIsSUFBSSxRQUFRO0FBQ25FLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtEQUFVO0FBQ2hCLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRW9COztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRXNCOzs7Ozs7O1VDM0J0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2dlbmVyYWxEb20uanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5cbmNvbnN0IGdlbmVyYWxBcHAgPSAoKCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIC8vIEluaXRpYWwgRE9NIHF1ZXJpZXNcbiAgICBjb25zdCBuYW1lSW1wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XG4gICAgY29uc3QgdGhlbWVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uXCIpO1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlXCIpO1xuICAgIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYmdcIik7XG4gICAgY29uc3QgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY2xvc2VcIik7XG4gICAgY29uc3QgdGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0VGFza1wiKTtcblxuICAgIC8vIEluaXRpYWwgRGF0ZSBVcGRhdGVcbiAgICBsZXQgaW5pdGlhbERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBpbml0YWxUaW1lID0gaW5pdGlhbERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgaW5mby50ZXh0Q29udGVudCA9IGAke2luaXRpYWxEYXRlLnRvRGF0ZVN0cmluZygpfSwgJHtpbml0YWxUaW1lfWA7XG5cbiAgICAvLyBTdG9yYWdlXG5cbiAgICBjb25zdCB1c2VyTmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlck5hbWVcIikgfHwgXCJcIjtcbiAgICBjb25zdCB1c2VyVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IFwiXCI7XG5cbiAgICBuYW1lSW1wdXQudmFsdWUgPSB1c2VyTmFtZTtcblxuICAgIG5hbWVJbXB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJOYW1lXCIsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpID09IFwiZGFyay10aGVtZVwiKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLXRoZW1lXCIpO1xuICAgICAgdGhlbWVJY29uLnNyYyA9IFwiLi4vZGlzdC9pbWFnZXMvc3VucGl4ZWwucG5nXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJub3JtYWxcIik7XG4gICAgfVxuXG4gICAgdGhlbWVJY29uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLXRoZW1lXCIpO1xuICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFyay10aGVtZVwiKSkge1xuICAgICAgICB0aGVtZUljb24uc3JjID0gXCIuLi9kaXN0L2ltYWdlcy9zdW5waXhlbC5wbmdcIjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmstdGhlbWVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVtZUljb24uc3JjID0gXCIuLi9kaXN0L2ltYWdlcy9oYWxmLW1vb24ucG5nXCI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJub3JtYWxcIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIE9wZW4gQWRkIFRhc2sgTW9kYWxcblxuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIC8vIENsb3NlIE1vZGFsXG5cbiAgICBtb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdGFza01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgVGltZVxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uIGdldERpc3BsYXlUaW1lKCkge1xuICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGxldCBjdXJyZW50ID0gY3VycmVudERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICBpbmZvLnRleHRDb250ZW50ID0gYCR7Y3VycmVudERhdGUudG9EYXRlU3RyaW5nKCl9LCAke2N1cnJlbnR9YDtcbiAgICB9LCAxMDAwKTtcblxuICAgIC8vIFRhc2sgU3VibWl0IHRvIENyZWF0ZSBUYXNrXG4gICAgdGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc29sZS5sb2coXCJ5b1wiKTtcbiAgICAgIGNyZWF0ZVRhc2soZXYpO1xuICAgIH0pO1xuICB9KTtcbn0pKCk7XG5cbmV4cG9ydCB7IGdlbmVyYWxBcHAgfTtcbiIsImltcG9ydCB7IGdlbmVyYWxBcHAgfSBmcm9tIFwiLi9nZW5lcmFsRG9tXCI7XG5cbmNvbnN0IHRhc2tNb2R1bGUgPSAoKCkgPT4ge1xuICBsZXQgdGFza3NJblN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpIHx8IFtdO1xuXG4gIGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNhdGVnb3J5KSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgdGhpcy5jYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcnk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdGVzdEZ1bmMoZXYpIHtcbiAgICBjb25zb2xlLmxvZyhcImNhbGxlZCBmcm9tIFRhc2sgTW9kdWxlXCIsIGV2KTtcbiAgfVxuXG4gIHJldHVybiB7IFRhc2ssIHRlc3RGdW5jIH07XG59KSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGV2KSB7XG4gIGNvbnNvbGUubG9nKFwiY2FsbGVkIGZyb20gdGFza3NcIiwgZXYpO1xuICB0YXNrTW9kdWxlLnRlc3RGdW5jKGV2KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVGFzayB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90YXNrcy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
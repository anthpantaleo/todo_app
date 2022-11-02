/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Press+Start+2P&family=Silkscreen:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-color: #edf2fc;\n  --secondary-color: #212121;\n  /* --primary-color: #dff6ff;\n  --secondary-color: #06283d; */\n  /* --primary-color: #feb139;\n  --secondary-color: #1746a2; */\n  /* --primary-color: #f8cb2e;\n  --secondary-color: #006e7f; */\n}\n\n.dark-theme {\n  --primary-color: #212121;\n  --secondary-color: #edf2fc;\n  /* --primary-color: #1746A2;\n  --secondary-color: #dff6ff; */\n  /* --primary-color: #1746a2;\n  --secondary-color: #feb139; */\n  /* --primary-color: #006e7f;\n  --secondary-color: #f8cb2e; */\n}\n\nhtml {\n  margin: 0 auto;\n  max-width: 1024px;\n}\n\n* {\n  font-family: \"Silkscreen\", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  padding: 10px;\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  min-height: 100vh;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n}\n\ninput:not([type=\"radio\"]):not([type=\"checkbox\"]) {\n  appearance: none;\n  border: none;\n  outline: none;\n  background-color: none;\n  cursor: initial;\n}\n\ninput[type=\"text\"] {\n  background-color: var(--primary-color);\n}\n\n#name {\n  font-size: 24px;\n  width: 180px;\n  color: var(--secondary-color);\n  font-weight: bold;\n}\n\n#icon {\n  height: 32px;\n  width: auto;\n  margin-left: auto;\n  cursor: pointer;\n}\n\n.createtitle {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.createtitle button {\n  height: 25px;\n  width: 25px;\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  border: none;\n  font-size: large;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 3px solid var(--secondary-color);\n  cursor: pointer;\n}\n\n.createtitle button:hover {\n  opacity: 0.9;\n}\n\n.createcategory {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n#category {\n  font-size: 18px;\n  width: 180px;\n  color: var(--secondary-color);\n  font-weight: bold;\n}\n\n.modal-bg {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.2);\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s, opacity 0.25s;\n}\n\n.active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.category-display {\n  display: flex;\n  gap: 8px;\n  padding: 5px 0;\n}\n\n.category {\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  border: none;\n  border: 3px solid var(--secondary-color);\n  cursor: pointer;\n  text-align: left;\n}\n\n.category:hover {\n  opacity: 0.9;\n}\n\n.category span {\n  margin-left: 15px;\n  margin-right: 5px;\n}\n\n.modal {\n  position: relative;\n  padding: 10px;\n  display: flex;\n  min-width: 50vw;\n  justify-content: space-around;\n  flex-direction: column;\n  border: 4px solid var(--secondary-color);\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  gap: 5px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\nform input {\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n}\n\n.prioritydiv {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n#downarrow {\n  transform: rotate(180deg);\n  transform-origin: 50% 50%;\n}\n\nform button {\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  border: none;\n  font-size: large;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 3px solid var(--secondary-color);\n  cursor: pointer;\n}\n\nform input {\n  font-size: 1rem;\n}\n\n.modal-close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.selectedView {\n  background-color: var(--secondary-color);\n  color: var(--primary-color);\n}\n\n.taskdisplay {\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.category-display {\n  flex-wrap: wrap;\n}\n\n.task {\n  border: 4px solid var(--secondary-color);\n  padding: 2px 2px;\n  gap: 0;\n}\n\n.taskgeneral {\n  display: flex;\n  gap: 15px;\n}\n\n.taskinfo {\n  display: flex;\n  gap: 15px;\n}\n\n.task button {\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  border: none;\n  justify-content: center;\n  align-items: center;\n  border: 3px solid var(--secondary-color);\n  cursor: pointer;\n  margin-right: 5px;\n}\n\n.task button:hover {\n  background-color: var(--secondary-color);\n  color: var(--primary-color);\n}\n\n@media only screen and (max-width: 400px) {\n  #icon {\n    position: relative;\n    bottom: 10px;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  #icon {\n    position: relative;\n    bottom: 0px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Press+Start+2P&family=Silkscreen:wght@400;700&display=swap\");\n:root {\n  --primary-color: #edf2fc;\n  --secondary-color: #212121;\n  /* --primary-color: #dff6ff;\n  --secondary-color: #06283d; */\n  /* --primary-color: #feb139;\n  --secondary-color: #1746a2; */\n  /* --primary-color: #f8cb2e;\n  --secondary-color: #006e7f; */\n}\n\n.dark-theme {\n  --primary-color: #212121;\n  --secondary-color: #edf2fc;\n  /* --primary-color: #1746A2;\n  --secondary-color: #dff6ff; */\n  /* --primary-color: #1746a2;\n  --secondary-color: #feb139; */\n  /* --primary-color: #006e7f;\n  --secondary-color: #f8cb2e; */\n}\n\nhtml {\n  margin: 0 auto;\n  max-width: 1024px;\n}\n\n* {\n  font-family: \"Silkscreen\", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  padding: 10px;\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  min-height: 100vh;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n}\n\ninput:not([type=\"radio\"]):not([type=\"checkbox\"]) {\n  appearance: none;\n  border: none;\n  outline: none;\n  background-color: none;\n  cursor: initial;\n}\n\ninput[type=\"text\"] {\n  background-color: var(--primary-color);\n}\n\n#name {\n  font-size: 24px;\n  width: 180px;\n  color: var(--secondary-color);\n  font-weight: bold;\n}\n\n#icon {\n  height: 32px;\n  width: auto;\n  margin-left: auto;\n  cursor: pointer;\n}\n\n.createtitle {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.createtitle button {\n  height: 25px;\n  width: 25px;\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  border: none;\n  font-size: large;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 3px solid var(--secondary-color);\n  cursor: pointer;\n}\n\n.createtitle button:hover {\n  opacity: 0.9;\n}\n\n.createcategory {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n#category {\n  font-size: 18px;\n  width: 180px;\n  color: var(--secondary-color);\n  font-weight: bold;\n}\n\n.modal-bg {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.2);\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s, opacity 0.25s;\n}\n\n.active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.category-display {\n  display: flex;\n  gap: 8px;\n  padding: 5px 0;\n}\n\n.category {\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  border: none;\n  border: 3px solid var(--secondary-color);\n  cursor: pointer;\n  text-align: left;\n}\n\n.category:hover {\n  opacity: 0.9;\n}\n\n.category span {\n  margin-left: 15px;\n  margin-right: 5px;\n}\n\n.modal {\n  position: relative;\n  padding: 10px;\n  display: flex;\n  min-width: 50vw;\n  justify-content: space-around;\n  flex-direction: column;\n  border: 4px solid var(--secondary-color);\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  gap: 5px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\nform input {\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n}\n\n.prioritydiv {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n#downarrow {\n  transform: rotate(180deg);\n  transform-origin: 50% 50%;\n}\n\nform button {\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  border: none;\n  font-size: large;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 3px solid var(--secondary-color);\n  cursor: pointer;\n}\n\nform input {\n  font-size: 1rem;\n}\n\n.modal-close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.selectedView {\n  background-color: var(--secondary-color);\n  color: var(--primary-color);\n}\n\n.taskdisplay {\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.category-display {\n  flex-wrap: wrap;\n}\n\n.task {\n  border: 4px solid var(--secondary-color);\n  padding: 2px 2px;\n  gap: 0;\n}\n\n.taskgeneral {\n  display: flex;\n  gap: 15px;\n}\n\n.taskinfo {\n  display: flex;\n  gap: 15px;\n}\n\n.task button {\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  border: none;\n  justify-content: center;\n  align-items: center;\n  border: 3px solid var(--secondary-color);\n  cursor: pointer;\n  margin-right: 5px;\n}\n\n.task button:hover {\n  background-color: var(--secondary-color);\n  color: var(--primary-color);\n}\n\n@media only screen and (max-width: 400px) {\n  #icon {\n    position: relative;\n    bottom: 10px;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  #icon {\n    position: relative;\n    bottom: 0px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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

/***/ "./src/generalDom.js":
/*!***************************!*\
  !*** ./src/generalDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  let id = Math.floor(Math.random() * 1000000);
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _generalDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generalDom */ "./src/generalDom.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFB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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvZ2VuZXJhbERvbS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy90YXNrMi5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs2MDAmZmFtaWx5PVByZXNzK1N0YXJ0KzJQJmZhbWlseT1TaWxrc2NyZWVuOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICNlZGYyZmM7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzIxMjEyMTtcXG4gIC8qIC0tcHJpbWFyeS1jb2xvcjogI2RmZjZmZjtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMDYyODNkOyAqL1xcbiAgLyogLS1wcmltYXJ5LWNvbG9yOiAjZmViMTM5O1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMxNzQ2YTI7ICovXFxuICAvKiAtLXByaW1hcnktY29sb3I6ICNmOGNiMmU7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzAwNmU3ZjsgKi9cXG59XFxuXFxuLmRhcmstdGhlbWUge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMjEyMTIxO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNlZGYyZmM7XFxuICAvKiAtLXByaW1hcnktY29sb3I6ICMxNzQ2QTI7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogI2RmZjZmZjsgKi9cXG4gIC8qIC0tcHJpbWFyeS1jb2xvcjogIzE3NDZhMjtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZmViMTM5OyAqL1xcbiAgLyogLS1wcmltYXJ5LWNvbG9yOiAjMDA2ZTdmO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNmOGNiMmU7ICovXFxufVxcblxcbmh0bWwge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMjRweDtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIlNpbGtzY3JlZW5cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0Om5vdChbdHlwZT1cXFwicmFkaW9cXFwiXSk6bm90KFt0eXBlPVxcXCJjaGVja2JveFxcXCJdKSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICBjdXJzb3I6IGluaXRpYWw7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuI25hbWUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2ljb24ge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNyZWF0ZXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3JlYXRldGl0bGUgYnV0dG9uIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNyZWF0ZXRpdGxlIGJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi5jcmVhdGVjYXRlZ29yeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NhdGVnb3J5IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHdpZHRoOiAxODBweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tb2RhbC1iZyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuMjVzO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2F0ZWdvcnktZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxuICBwYWRkaW5nOiA1cHggMDtcXG59XFxuXFxuLmNhdGVnb3J5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmNhdGVnb3J5OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLmNhdGVnb3J5IHNwYW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLXdpZHRoOiA1MHZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4ucHJpb3JpdHlkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNkb3duYXJyb3cge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubW9kYWwtY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNlbGVjdGVkVmlldyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4udGFza2Rpc3BsYXkge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4uY2F0ZWdvcnktZGlzcGxheSB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi50YXNrIHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBwYWRkaW5nOiAycHggMnB4O1xcbiAgZ2FwOiAwO1xcbn1cXG5cXG4udGFza2dlbmVyYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLnRhc2tpbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi50YXNrIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4udGFzayBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgI2ljb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMTBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgI2ljb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUI7K0JBQzZCO0VBQzdCOytCQUM2QjtFQUM3QjsrQkFDNkI7QUFDL0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCOytCQUM2QjtFQUM3QjsrQkFDNkI7RUFDN0I7K0JBQzZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0Qyw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0Qyw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLHdDQUF3QztFQUN4QyxzQ0FBc0M7RUFDdEMsNkJBQTZCO0VBQzdCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0Qyw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsZ0JBQWdCO0VBQ2hCLE1BQU07QUFDUjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDA7NjAwJmZhbWlseT1QcmVzcytTdGFydCsyUCZmYW1pbHk9U2lsa3NjcmVlbjp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZWRmMmZjO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMyMTIxMjE7XFxuICAvKiAtLXByaW1hcnktY29sb3I6ICNkZmY2ZmY7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzA2MjgzZDsgKi9cXG4gIC8qIC0tcHJpbWFyeS1jb2xvcjogI2ZlYjEzOTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMTc0NmEyOyAqL1xcbiAgLyogLS1wcmltYXJ5LWNvbG9yOiAjZjhjYjJlO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMwMDZlN2Y7ICovXFxufVxcblxcbi5kYXJrLXRoZW1lIHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzIxMjEyMTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZWRmMmZjO1xcbiAgLyogLS1wcmltYXJ5LWNvbG9yOiAjMTc0NkEyO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNkZmY2ZmY7ICovXFxuICAvKiAtLXByaW1hcnktY29sb3I6ICMxNzQ2YTI7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogI2ZlYjEzOTsgKi9cXG4gIC8qIC0tcHJpbWFyeS1jb2xvcjogIzAwNmU3ZjtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZjhjYjJlOyAqL1xcbn1cXG5cXG5odG1sIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTaWxrc2NyZWVuXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pbnB1dDpub3QoW3R5cGU9XFxcInJhZGlvXFxcIl0pOm5vdChbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSkge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgY3Vyc29yOiBpbml0aWFsO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbiNuYW1lIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHdpZHRoOiAxODBweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNpY29uIHtcXG4gIGhlaWdodDogMzJweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jcmVhdGV0aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNyZWF0ZXRpdGxlIGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jcmVhdGV0aXRsZSBidXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4uY3JlYXRlY2F0ZWdvcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjYXRlZ29yeSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB3aWR0aDogMTgwcHg7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubW9kYWwtYmcge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjI1cztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNhdGVnb3J5LWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbiAgcGFkZGluZzogNXB4IDA7XFxufVxcblxcbi5jYXRlZ29yeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5jYXRlZ29yeTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi5jYXRlZ29yeSBzcGFuIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi13aWR0aDogNTB2dztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnByaW9yaXR5ZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZG93bmFycm93IHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLm1vZGFsLWNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zZWxlY3RlZFZpZXcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnRhc2tkaXNwbGF5IHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLmNhdGVnb3J5LWRpc3BsYXkge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4udGFzayB7XFxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgcGFkZGluZzogMnB4IDJweDtcXG4gIGdhcDogMDtcXG59XFxuXFxuLnRhc2tnZW5lcmFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi50YXNraW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4udGFzayBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLnRhc2sgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gICNpY29uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gICNpY29uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIENhdGVnb3JpZXNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkge1xuICBjb25zdHJ1Y3RvcihjYXRlZ29yeW5hbWUpIHtcbiAgICB0aGlzLmNhdGVnb3J5bmFtZSA9IGNhdGVnb3J5bmFtZTtcbiAgfVxufVxuIiwiaW1wb3J0IFRUYXNrIGZyb20gXCIuL3Rhc2syXCI7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vY2F0ZWdvcnlcIjtcblxuaW1wb3J0IG1vb24gZnJvbSBcIi4vaW1ncy9oYWxmLW1vb24ucG5nXCI7XG5pbXBvcnQgc3VuIGZyb20gXCIuL2ltZ3Mvc3VucGl4ZWwucG5nXCI7XG5cbmxldCBzZWxlY3RlZENhdGVnb3J5ID0gXCJhbGwgdGFza3NcIjtcbmxldCBuYW1lSW1wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XG5sZXQgdGhlbWVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uXCIpO1xubGV0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG5sZXQgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlXCIpO1xubGV0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYmdcIik7XG5sZXQgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY2xvc2VcIik7XG5sZXQgdGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0VGFza1wiKTtcbmxldCBjYXRlZ29yeUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeVwiKTtcbmxldCBjYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbY2F0ZWdvcnldXCIpO1xubGV0IGRlbGV0ZUNhdGVnb3J5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnlkZWxldGVcIik7XG5cbmNvbnN0IGluaXRpYWxMb2FkID0gKCgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAvLyBJbml0aWFsIERhdGUgVXBkYXRlXG4gICAgbGV0IGluaXRpYWxEYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgaW5pdGFsVGltZSA9IGluaXRpYWxEYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIGluZm8udGV4dENvbnRlbnQgPSBgSXQncyAke2luaXRpYWxEYXRlLnRvRGF0ZVN0cmluZygpfSwgJHtpbml0YWxUaW1lfWA7XG5cbiAgICAvLyBTdG9yYWdlXG5cbiAgICAvLyBVc2VyTmFtZVxuXG4gICAgY29uc3QgdXNlck5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJOYW1lXCIpIHx8IFwiXCI7XG4gICAgbmFtZUltcHV0LnZhbHVlID0gdXNlck5hbWU7XG5cbiAgICBuYW1lSW1wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyTmFtZVwiLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBUaGVtZVxuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgPT0gXCJkYXJrLXRoZW1lXCIpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstdGhlbWVcIik7XG4gICAgICB0aGVtZUljb24uc3JjID0gc3VuO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibm9ybWFsXCIpO1xuICAgICAgdGhlbWVJY29uLnNyYyA9IG1vb247XG4gICAgfVxuXG4gICAgLy8gVGhlbWUgQ2hhbmdlclxuXG4gICAgdGhlbWVJY29uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLXRoZW1lXCIpO1xuICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFyay10aGVtZVwiKSkge1xuICAgICAgICB0aGVtZUljb24uc3JjID0gc3VuO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFyay10aGVtZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW1lSWNvbi5zcmMgPSBtb29uO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibm9ybWFsXCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvL0NhdGVnb3J5IElucHV0XG5cbiAgICBjYXRlZ29yeUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIGxldCBjdXJyZW50ID0gbmV3IENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGxldCBjdXJyZW50Q2F0ZWdvcmllc0luU3RvcmFnZSA9IEpTT04ucGFyc2UoXG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmllc1wiKVxuICAgICAgKTtcbiAgICAgIGxldCBjYXRlZ29yaWVzID0gY3VycmVudENhdGVnb3JpZXNJblN0b3JhZ2U7XG4gICAgICBjYXRlZ29yaWVzLnB1c2goY3VycmVudCk7XG4gICAgICBzZWxlY3RlZENhdGVnb3J5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBjYXRlZ29yeUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2F0ZWdvcmllc1wiLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKSk7XG5cbiAgICAgIHJlbmRlckNhdGVnb3JpZXMoKTtcbiAgICAgIHVwZGF0ZURvbSgpO1xuICAgICAgY2hhbmdlU2VsZWN0ZWRPblNjcmVlbkNTUygpO1xuICAgIH0pO1xuXG4gICAgLy8gT3BlbiBBZGQgVGFzayBNb2RhbFxuXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2UgTW9kYWxcblxuICAgIG1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSBUaW1lXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gZ2V0RGlzcGxheVRpbWUoKSB7XG4gICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IGN1cnJlbnRUaW1lID0gY3VycmVudERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICBpbmZvLnRleHRDb250ZW50ID0gYEl0J3MgJHtjdXJyZW50RGF0ZS50b0RhdGVTdHJpbmcoKX0sICR7Y3VycmVudFRpbWV9YDtcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG5cbiAgLy8gQ2F0ZWdvcnkgU3dpdGNoZXJcbn0pKCk7XG5cbi8vIExvYWQgQ2F0ZWdvcmllcyB0byBET01cblxuZnVuY3Rpb24gbG9hZENhdGVnb3JpZXMoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpZXNcIikpIHtcbiAgfSBlbHNlIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIFwiY2F0ZWdvcmllc1wiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoW3sgY2F0ZWdvcnluYW1lOiBcImFsbCB0YXNrc1wiIH1dKVxuICAgICk7XG4gIH1cbiAgcmVuZGVyQ2F0ZWdvcmllcygpO1xufVxuXG5sb2FkQ2F0ZWdvcmllcygpO1xuXG4vLyBMb2FkIFRhc2tzXG5cbmZ1bmN0aW9uIGxvYWRUYXNrcygpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHtcbiAgfSBlbHNlIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gIH1cbn1cblxubG9hZFRhc2tzKCk7XG5cbi8vIFRhc2sgU3VibWl0IHRvIENyZWF0ZSBUYXNrXG5cbnRhc2tTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGxldCB0YXNraW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tpbnB1dFwiKTtcbiAgbGV0IHRhc2tpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjaW5wdXRcIik7XG4gIGxldCB0YXNraW5wdXREdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZWRhdGVcIik7XG4gIGxldCB0YXNraW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJ1xuICApO1xuXG4gIGxldCB0YXNrbGVuZ3RoID0gdGFza2lucHV0LnZhbHVlLmxlbmd0aDtcbiAgbGV0IGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG4gIGlmICh0YXNrbGVuZ3RoID49IDEpIHtcbiAgICBsZXQgY3VycmVudENyZWF0ZVRhc2sgPSBuZXcgVFRhc2soXG4gICAgICB0YXNraW5wdXQudmFsdWUsXG4gICAgICB0YXNraW5wdXREZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIHRhc2tpbnB1dER1ZS52YWx1ZSxcbiAgICAgIHRhc2tpbnB1dFByaW9yaXR5LnZhbHVlLFxuICAgICAgc2VsZWN0ZWRDYXRlZ29yeSxcbiAgICAgIGlkXG4gICAgKTtcblxuICAgIGxldCBjdXJyZW50VGFza3NJblN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuXG4gICAgbGV0IHRhc2tzID0gY3VycmVudFRhc2tzSW5TdG9yYWdlO1xuXG4gICAgdGFza3MucHVzaChjdXJyZW50Q3JlYXRlVGFzayk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG5cbiAgICB0YXNraW5wdXQudmFsdWUgPSBudWxsO1xuICAgIHRhc2tpbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gbnVsbDtcbiAgICB0YXNraW5wdXREdWUudmFsdWUgPSBudWxsO1xuXG4gICAgdGFza01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0gZWxzZSB7XG4gICAgdGFza01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbiAgcmVuZGVyVGFza3Moc2VsZWN0ZWRDYXRlZ29yeSk7XG59KTtcblxuLy8gUmVuZGVyIENhdGVnb3JpZXNcblxuZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcmllcygpIHtcbiAgY29uc3QgY2F0ZWdvcnlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXRlZ29yeS1kaXNwbGF5XCIpO1xuICBkZWxldGVDYXRlZ29yaWVzKGNhdGVnb3J5RGlzcGxheSk7XG4gIGxldCBjdXJyZW50Q2F0ZWdvcmllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWVzXCIpKTtcbiAgY3VycmVudENhdGVnb3JpZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGxldCBjYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2F0ZWdvcnlCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIpO1xuICAgIGNhdGVnb3J5QnV0dG9uLnNldEF0dHJpYnV0ZShcImNhdGVnb3J5XCIsIGAke2VsZW1lbnQuY2F0ZWdvcnluYW1lfWApO1xuICAgIGNhdGVnb3J5QnV0dG9uLmlubmVyVGV4dCA9IGVsZW1lbnQuY2F0ZWdvcnluYW1lO1xuICAgIGlmIChlbGVtZW50LmNhdGVnb3J5bmFtZSAhPSBcImFsbCB0YXNrc1wiKSB7XG4gICAgICBsZXQgY2F0ZWdvcnlEZWxldGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBjYXRlZ29yeURlbGV0ZVNwYW4uY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5ZGVsZXRlXCIpO1xuICAgICAgY2F0ZWdvcnlEZWxldGVTcGFuLnNldEF0dHJpYnV0ZShcImlkXCIsIGVsZW1lbnQuY2F0ZWdvcnluYW1lKTtcbiAgICAgIGNhdGVnb3J5RGVsZXRlU3Bhbi5pbm5lclRleHQgPSBcIlhcIjtcbiAgICAgIGNhdGVnb3J5QnV0dG9uLmFwcGVuZENoaWxkKGNhdGVnb3J5RGVsZXRlU3Bhbik7XG4gICAgfVxuICAgIGNhdGVnb3J5RGlzcGxheS5hcHBlbmRDaGlsZChjYXRlZ29yeUJ1dHRvbik7XG4gIH0pO1xuICB1cGRhdGVEb20oKTtcbiAgYWRkQ2F0ZWdvcnlTd2l0Y2hlcigpO1xuICBjYXRlZ29yeURlbGV0ZUxpc3RlbmVyKCk7XG59XG5cbi8vIHVwZGF0ZSBDYXRlZ29yeSBTZWxlY3RvcnMgYW5kIExvYWRlcnNcblxuZnVuY3Rpb24gdXBkYXRlRG9tKCkge1xuICBuYW1lSW1wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XG4gIHRoZW1lSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWNvblwiKTtcbiAgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbiAgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlXCIpO1xuICB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJnXCIpO1xuICBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jbG9zZVwiKTtcbiAgdGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0VGFza1wiKTtcbiAgY2F0ZWdvcnlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0ZWdvcnlcIik7XG4gIGNhdGVnb3J5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltjYXRlZ29yeV1cIik7XG4gIGRlbGV0ZUNhdGVnb3J5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnlkZWxldGVcIik7XG59XG5cbi8vIERlbGV0ZSBFeGlzdGluZyBDYXRlZ29yaWVzXG5mdW5jdGlvbiBkZWxldGVDYXRlZ29yaWVzKHgpIHtcbiAgd2hpbGUgKHguZmlyc3RDaGlsZCkge1xuICAgIHgucmVtb3ZlQ2hpbGQoeC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VTZWxlY3RlZE9uU2NyZWVuQ1NTKCkge1xuICBjYXRlZ29yeUJ1dHRvbi5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZiAoYnV0dG9uLmdldEF0dHJpYnV0ZShcImNhdGVnb3J5XCIpID09IHNlbGVjdGVkQ2F0ZWdvcnkpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRWaWV3XCIpO1xuICAgICAgcmVuZGVyVGFza3Moc2VsZWN0ZWRDYXRlZ29yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRWaWV3XCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENhdGVnb3J5U3dpdGNoZXIoKSB7XG4gIGNhdGVnb3J5QnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjYXRlZ29yeVwiKTtcbiAgICAgIGNoYW5nZVNlbGVjdGVkT25TY3JlZW5DU1MoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmNoYW5nZVNlbGVjdGVkT25TY3JlZW5DU1MoKTtcblxuZnVuY3Rpb24gY2F0ZWdvcnlEZWxldGVMaXN0ZW5lcigpIHtcbiAgZGVsZXRlQ2F0ZWdvcnlCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkgPSBcImFsbCB0YXNrc1wiO1xuICAgICAgZGVsZXRlQ2F0ZWdvcnkoZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVDYXRlZ29yeShlKSB7XG4gIGNvbnN0IGN1cnJlbnRDYXRlZ29yaWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpZXNcIikpO1xuICBjb25zdCBzZWxlY3RlZENhdGVnb3J5ID0gZS50YXJnZXQuaWQ7XG4gIGxldCBjb3VudCA9IDA7XG4gIGN1cnJlbnRDYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgaWYgKGNhdGVnb3J5LmNhdGVnb3J5bmFtZSA9PSBzZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICBjdXJyZW50Q2F0ZWdvcmllcy5zcGxpY2UoY291bnQsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2F0ZWdvcmllc1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Q2F0ZWdvcmllcykpO1xuICByZW5kZXJDYXRlZ29yaWVzKCk7XG4gIGRlbGV0ZU9uU2NyZWVuVGFza3MoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3MoZSkge1xuICBkZWxldGVPblNjcmVlblRhc2tzKCk7XG4gIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tkaXNwbGF5XCIpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkQ2F0ZWdvcnkgPT0gXCJhbGwgdGFza3NcIikge1xuICAgICAgbGV0IHRhc2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza2JveC5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgICAgbGV0IHRhc2tnZW5lcmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tnZW5lcmFsLmNsYXNzTGlzdC5hZGQoXCJ0YXNrZ2VuZXJhbFwiKTtcblxuICAgICAgbGV0IHRhc2t0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0YXNrdGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2t0aXRsZVwiKTtcbiAgICAgIHRhc2t0aXRsZS5pbm5lclRleHQgPSBgJHt0YXNrLm5hbWV9YDtcblxuICAgICAgbGV0IHRhc2tkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0YXNrZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2tkZXNjcmlwdGlvblwiKTtcbiAgICAgIHRhc2tkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgJHt0YXNrLmRlc2NyaXB0aW9ufWA7XG5cbiAgICAgIHRhc2tnZW5lcmFsLmFwcGVuZENoaWxkKHRhc2t0aXRsZSk7XG4gICAgICB0YXNrZ2VuZXJhbC5hcHBlbmRDaGlsZCh0YXNrZGVzY3JpcHRpb24pO1xuICAgICAgdGFza2JveC5hcHBlbmRDaGlsZCh0YXNrZ2VuZXJhbCk7XG5cbiAgICAgIGxldCB0YXNraW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0YXNraW5mby5jbGFzc0xpc3QuYWRkKFwidGFza2luZm9cIik7XG5cbiAgICAgIGxldCB0YXNrcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza3ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrcHJpb3JpdHlcIik7XG4gICAgICB0YXNrcHJpb3JpdHkuaW5uZXJUZXh0ID0gdGFzay5wcmlvcml0eTtcblxuICAgICAgbGV0IHRhc2tkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tkYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrZGF0ZVwiKTtcbiAgICAgIHRhc2tkYXRlLmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZTtcblxuICAgICAgdGFza2luZm8uYXBwZW5kQ2hpbGQodGFza3ByaW9yaXR5KTtcbiAgICAgIHRhc2tpbmZvLmFwcGVuZENoaWxkKHRhc2tkYXRlKTtcblxuICAgICAgdGFza2JveC5hcHBlbmRDaGlsZCh0YXNraW5mbyk7XG5cbiAgICAgIGxldCBkZWxldGVidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZGVsZXRlYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2suaWQpO1xuICAgICAgZGVsZXRlYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGV0YXNrYnV0dG9uXCIpO1xuICAgICAgZGVsZXRlYnV0dG9uLmlubmVyVGV4dCA9IFwiRGVsZXRlXCI7XG5cbiAgICAgIC8vIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIC8vIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFzay5pZCk7XG4gICAgICAvLyBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0dGFza2J1dHRvblwiKTtcbiAgICAgIC8vIGVkaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJFZGl0XCI7XG5cbiAgICAgIGxldCB0YXNrY2F0ZWdvcnlkaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICB0YXNrY2F0ZWdvcnlkaXNwbGF5LmlubmVyVGV4dCA9IHRhc2suY2F0ZWdvcnk7XG4gICAgICB0YXNrY2F0ZWdvcnlkaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrY2F0ZWdvcnlkaXNwbGF5XCIpO1xuXG4gICAgICB0YXNrYm94LmFwcGVuZENoaWxkKGRlbGV0ZWJ1dHRvbik7XG4gICAgICAvLyB0YXNrYm94LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgICAgdGFza2JveC5hcHBlbmRDaGlsZCh0YXNrY2F0ZWdvcnlkaXNwbGF5KTtcblxuICAgICAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza2JveCk7XG5cbiAgICAgIGFkZFRhc2tFdmVudExpc3RlbmVycygpO1xuICAgIH0gZWxzZSBpZiAodGFzay5jYXRlZ29yeSA9PSBzZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICBsZXQgdGFza2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0YXNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG4gICAgICBsZXQgdGFza2dlbmVyYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza2dlbmVyYWwuY2xhc3NMaXN0LmFkZChcInRhc2tnZW5lcmFsXCIpO1xuXG4gICAgICBsZXQgdGFza3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2t0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza3RpdGxlXCIpO1xuICAgICAgdGFza3RpdGxlLmlubmVyVGV4dCA9IGAke3Rhc2submFtZX1gO1xuXG4gICAgICBsZXQgdGFza2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFza2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgdGFza2Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGAke3Rhc2suZGVzY3JpcHRpb259YDtcblxuICAgICAgdGFza2dlbmVyYWwuYXBwZW5kQ2hpbGQodGFza3RpdGxlKTtcbiAgICAgIHRhc2tnZW5lcmFsLmFwcGVuZENoaWxkKHRhc2tkZXNjcmlwdGlvbik7XG4gICAgICB0YXNrYm94LmFwcGVuZENoaWxkKHRhc2tnZW5lcmFsKTtcblxuICAgICAgbGV0IHRhc2tpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2tpbmZvLmNsYXNzTGlzdC5hZGQoXCJ0YXNraW5mb1wiKTtcblxuICAgICAgbGV0IHRhc2twcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0YXNrcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRhc2twcmlvcml0eVwiKTtcbiAgICAgIHRhc2twcmlvcml0eS5pbm5lclRleHQgPSB0YXNrLnByaW9yaXR5O1xuXG4gICAgICBsZXQgdGFza2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGFza2RhdGUuY2xhc3NMaXN0LmFkZChcInRhc2tkYXRlXCIpO1xuICAgICAgdGFza2RhdGUuaW5uZXJUZXh0ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgICB0YXNraW5mby5hcHBlbmRDaGlsZCh0YXNrcHJpb3JpdHkpO1xuICAgICAgdGFza2luZm8uYXBwZW5kQ2hpbGQodGFza2RhdGUpO1xuXG4gICAgICB0YXNrYm94LmFwcGVuZENoaWxkKHRhc2tpbmZvKTtcblxuICAgICAgbGV0IGRlbGV0ZWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBkZWxldGVidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgdGFzay5pZCk7XG4gICAgICBkZWxldGVidXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZXRhc2tidXR0b25cIik7XG4gICAgICBkZWxldGVidXR0b24uaW5uZXJUZXh0ID0gXCJEZWxldGVcIjtcblxuICAgICAgLy8gbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgLy8gZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLmlkKTtcbiAgICAgIC8vIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXR0YXNrYnV0dG9uXCIpO1xuICAgICAgLy8gZWRpdEJ1dHRvbi5pbm5lclRleHQgPSBcIkVkaXRcIjtcblxuICAgICAgbGV0IHRhc2tjYXRlZ29yeWRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHRhc2tjYXRlZ29yeWRpc3BsYXkuaW5uZXJUZXh0ID0gdGFzay5jYXRlZ29yeTtcbiAgICAgIHRhc2tjYXRlZ29yeWRpc3BsYXkuY2xhc3NMaXN0LmFkZChcInRhc2tjYXRlZ29yeWRpc3BsYXlcIik7XG5cbiAgICAgIHRhc2tib3guYXBwZW5kQ2hpbGQoZGVsZXRlYnV0dG9uKTtcbiAgICAgIC8vIHRhc2tib3guYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgICB0YXNrYm94LmFwcGVuZENoaWxkKHRhc2tjYXRlZ29yeWRpc3BsYXkpO1xuXG4gICAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrYm94KTtcbiAgICAgIHVwZGF0ZURvbSgpO1xuICAgICAgYWRkVGFza0V2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhlKSB7XG4gIGNvbnN0IElEID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgY29uc3QgbmV3VGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT0gSUQpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KG5ld1Rhc2tzKSk7XG4gIHJlbmRlclRhc2tzKCk7XG59XG5cbi8vIGZ1bmN0aW9uIGVkaXRUYXNrKGUpIHt9XG5cbmZ1bmN0aW9uIGRlbGV0ZU9uU2NyZWVuVGFza3MoKSB7XG4gIGNvbnN0IHRhc2tEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrZGlzcGxheVwiKTtcbiAgd2hpbGUgKHRhc2tEaXNwbGF5LmZpcnN0Q2hpbGQpIHtcbiAgICB0YXNrRGlzcGxheS5yZW1vdmVDaGlsZCh0YXNrRGlzcGxheS5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRUYXNrRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGxldCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGV0YXNrYnV0dG9uXCIpO1xuICAvLyBsZXQgZWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXR0YXNrYnV0dG9uXCIpO1xuICBkZWxldGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGRlbGV0ZVRhc2soZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIGVkaXRCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAvLyAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpICsgXCIgZWRpdFwiKTtcbiAgLy8gICB9KTtcbiAgLy8gfSk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxMb2FkIH07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlID0gXCJcIiwgcHJpb3JpdHksIGNhdGVnb3J5LCBpZCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldERhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cblxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgc2V0Q2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gIH1cblxuICBnZXRDYXRlZ29yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yeTtcbiAgfVxuXG4gIHNldElEKCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIGdldElEKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBpbml0aWFsTG9hZCB9IGZyb20gXCIuL2dlbmVyYWxEb21cIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
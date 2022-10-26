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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-color: #edf2fc;\n  --secondary-color: #212121;\n  /* --primary-color: #dff6ff;\n  --secondary-color: #06283d; */\n  /* --primary-color: #feb139;\n  --secondary-color: #1746a2; */\n  /* --primary-color: #f8cb2e;\n  --secondary-color: #006e7f; */\n}\n\n.dark-theme {\n  --primary-color: #212121;\n  --secondary-color: #edf2fc;\n  /* --primary-color: #1746A2;\n  --secondary-color: #dff6ff; */\n  /* --primary-color: #1746a2;\n  --secondary-color: #feb139; */\n  /* --primary-color: #006e7f;\n  --secondary-color: #f8cb2e; */\n}\n\nhtml {\n  margin: 0 auto;\n  max-width: 1024px;\n}\n\n* {\n  font-family: \"Silkscreen\", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  padding: 10px;\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  min-height: 100vh;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n}\n\ninput:not([type=\"radio\"]):not([type=\"checkbox\"]) {\n  appearance: none;\n  border: none;\n  outline: none;\n  background-color: none;\n  cursor: initial;\n}\n\ninput[type=\"text\"] {\n  background-color: var(--primary-color);\n}\n\n#name {\n  font-size: 24px;\n  width: 180px;\n  color: var(--secondary-color);\n  font-weight: bold;\n}\n\n#icon {\n  height: 32px;\n  width: auto;\n  margin-left: auto;\n  cursor: pointer;\n}\n\n.createtitle {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.createtitle button {\n  height: 25px;\n  width: 25px;\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  border: none;\n  font-size: large;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 3px solid var(--secondary-color);\n  cursor: pointer;\n}\n\n.createtitle button:hover {\n  opacity: 0.9;\n}\n\n.createcategory {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n#category {\n  font-size: 18px;\n  width: 180px;\n  color: var(--secondary-color);\n  font-weight: bold;\n}\n\n.modal-bg {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.2);\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s, opacity 0.25s;\n}\n\n.active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.category-display {\n  display: flex;\n  gap: 8px;\n  padding: 5px 0;\n}\n\n.category {\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  border: none;\n  border: 3px solid var(--secondary-color);\n  cursor: pointer;\n  text-align: left;\n}\n\n.category:hover {\n  opacity: 0.9;\n}\n\n.category span {\n  margin-left: 15px;\n  margin-right: 5px;\n}\n\n.modal {\n  position: relative;\n  padding: 10px;\n  display: flex;\n  min-width: 50vw;\n  justify-content: space-around;\n  flex-direction: column;\n  border: 4px solid var(--secondary-color);\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  gap: 5px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\nform input {\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n}\n\n.prioritydiv {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n#downarrow {\n  transform: rotate(180deg);\n  transform-origin: 50% 50%;\n}\n\nform button {\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  border: none;\n  font-size: large;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 3px solid var(--secondary-color);\n  cursor: pointer;\n}\n\nform input {\n  font-size: 1rem;\n}\n\n.modal-close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.selectedView {\n  background-color: var(--secondary-color);\n  color: var(--primary-color);\n}\n\n.taskdisplay {\n  padding-top: 10px;\n}\n\n.category-display {\n  flex-wrap: wrap;\n}\n\n@media only screen and (max-width: 400px) {\n  #icon {\n    position: relative;\n    bottom: 10px;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  #icon {\n    position: relative;\n    bottom: 0px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AACA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B;+BAC6B;EAC7B;+BAC6B;EAC7B;+BAC6B;AAC/B;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B;+BAC6B;EAC7B;+BAC6B;EAC7B;+BAC6B;AAC/B;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,qCAAqC;EACrC,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,sCAAsC;EACtC,6BAA6B;EAC7B,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wCAAwC;EACxC,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,oCAAoC;EACpC,MAAM;EACN,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;EACV,wCAAwC;AAC1C;;AAEA;EACE,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,cAAc;AAChB;;AAEA;EACE,sCAAsC;EACtC,6BAA6B;EAC7B,YAAY;EACZ,wCAAwC;EACxC,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,eAAe;EACf,6BAA6B;EAC7B,sBAAsB;EACtB,wCAAwC;EACxC,sCAAsC;EACtC,6BAA6B;EAC7B,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,sCAAsC;EACtC,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,sCAAsC;EACtC,6BAA6B;EAC7B,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wCAAwC;EACxC,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,wCAAwC;EACxC,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,kBAAkB;IAClB,YAAY;EACd;AACF;;AAEA;EACE;IACE,kBAAkB;IAClB,WAAW;EACb;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Press+Start+2P&family=Silkscreen:wght@400;700&display=swap\");\n:root {\n  --primary-color: #edf2fc;\n  --secondary-color: #212121;\n  /* --primary-color: #dff6ff;\n  --secondary-color: #06283d; */\n  /* --primary-color: #feb139;\n  --secondary-color: #1746a2; */\n  /* --primary-color: #f8cb2e;\n  --secondary-color: #006e7f; */\n}\n\n.dark-theme {\n  --primary-color: #212121;\n  --secondary-color: #edf2fc;\n  /* --primary-color: #1746A2;\n  --secondary-color: #dff6ff; */\n  /* --primary-color: #1746a2;\n  --secondary-color: #feb139; */\n  /* --primary-color: #006e7f;\n  --secondary-color: #f8cb2e; */\n}\n\nhtml {\n  margin: 0 auto;\n  max-width: 1024px;\n}\n\n* {\n  font-family: \"Silkscreen\", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  padding: 10px;\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  min-height: 100vh;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n}\n\ninput:not([type=\"radio\"]):not([type=\"checkbox\"]) {\n  appearance: none;\n  border: none;\n  outline: none;\n  background-color: none;\n  cursor: initial;\n}\n\ninput[type=\"text\"] {\n  background-color: var(--primary-color);\n}\n\n#name {\n  font-size: 24px;\n  width: 180px;\n  color: var(--secondary-color);\n  font-weight: bold;\n}\n\n#icon {\n  height: 32px;\n  width: auto;\n  margin-left: auto;\n  cursor: pointer;\n}\n\n.createtitle {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.createtitle button {\n  height: 25px;\n  width: 25px;\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  border: none;\n  font-size: large;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 3px solid var(--secondary-color);\n  cursor: pointer;\n}\n\n.createtitle button:hover {\n  opacity: 0.9;\n}\n\n.createcategory {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n#category {\n  font-size: 18px;\n  width: 180px;\n  color: var(--secondary-color);\n  font-weight: bold;\n}\n\n.modal-bg {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.2);\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s, opacity 0.25s;\n}\n\n.active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.category-display {\n  display: flex;\n  gap: 8px;\n  padding: 5px 0;\n}\n\n.category {\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  border: none;\n  border: 3px solid var(--secondary-color);\n  cursor: pointer;\n  text-align: left;\n}\n\n.category:hover {\n  opacity: 0.9;\n}\n\n.category span {\n  margin-left: 15px;\n  margin-right: 5px;\n}\n\n.modal {\n  position: relative;\n  padding: 10px;\n  display: flex;\n  min-width: 50vw;\n  justify-content: space-around;\n  flex-direction: column;\n  border: 4px solid var(--secondary-color);\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  gap: 5px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\nform input {\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n}\n\n.prioritydiv {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n#downarrow {\n  transform: rotate(180deg);\n  transform-origin: 50% 50%;\n}\n\nform button {\n  background-color: var(--primary-color);\n  color: var(--secondary-color);\n  border: none;\n  font-size: large;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 3px solid var(--secondary-color);\n  cursor: pointer;\n}\n\nform input {\n  font-size: 1rem;\n}\n\n.modal-close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.selectedView {\n  background-color: var(--secondary-color);\n  color: var(--primary-color);\n}\n\n.taskdisplay {\n  padding-top: 10px;\n}\n\n.category-display {\n  flex-wrap: wrap;\n}\n\n@media only screen and (max-width: 400px) {\n  #icon {\n    position: relative;\n    bottom: 10px;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  #icon {\n    position: relative;\n    bottom: 0px;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/generalDom.js":
/*!***************************!*\
  !*** ./src/generalDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2NhdGVnb3J5LmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2dlbmVyYWxEb20uanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvdGFzazIuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzYwMCZmYW1pbHk9UHJlc3MrU3RhcnQrMlAmZmFtaWx5PVNpbGtzY3JlZW46d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogI2VkZjJmYztcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMjEyMTIxO1xcbiAgLyogLS1wcmltYXJ5LWNvbG9yOiAjZGZmNmZmO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMwNjI4M2Q7ICovXFxuICAvKiAtLXByaW1hcnktY29sb3I6ICNmZWIxMzk7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzE3NDZhMjsgKi9cXG4gIC8qIC0tcHJpbWFyeS1jb2xvcjogI2Y4Y2IyZTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMDA2ZTdmOyAqL1xcbn1cXG5cXG4uZGFyay10aGVtZSB7XFxuICAtLXByaW1hcnktY29sb3I6ICMyMTIxMjE7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogI2VkZjJmYztcXG4gIC8qIC0tcHJpbWFyeS1jb2xvcjogIzE3NDZBMjtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZGZmNmZmOyAqL1xcbiAgLyogLS1wcmltYXJ5LWNvbG9yOiAjMTc0NmEyO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNmZWIxMzk7ICovXFxuICAvKiAtLXByaW1hcnktY29sb3I6ICMwMDZlN2Y7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogI2Y4Y2IyZTsgKi9cXG59XFxuXFxuaHRtbCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogMTAyNHB4O1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2lsa3NjcmVlblxcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQ6bm90KFt0eXBlPVxcXCJyYWRpb1xcXCJdKTpub3QoW3R5cGU9XFxcImNoZWNrYm94XFxcIl0pIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gIGN1cnNvcjogaW5pdGlhbDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4jbmFtZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB3aWR0aDogMTgwcHg7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jaWNvbiB7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY3JlYXRldGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jcmVhdGV0aXRsZSBidXR0b24ge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY3JlYXRldGl0bGUgYnV0dG9uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLmNyZWF0ZWNhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY2F0ZWdvcnkge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1vZGFsLWJnIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC4yNXM7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jYXRlZ29yeS1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbn1cXG5cXG4uY2F0ZWdvcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uY2F0ZWdvcnk6aG92ZXIge1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4uY2F0ZWdvcnkgc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4td2lkdGg6IDUwdnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Rvd25hcnJvdyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5tb2RhbC1jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc2VsZWN0ZWRWaWV3IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi50YXNrZGlzcGxheSB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLmNhdGVnb3J5LWRpc3BsYXkge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAjaWNvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAjaWNvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAwcHg7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Ny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OztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs2MDAmZmFtaWx5PVByZXNzK1N0YXJ0KzJQJmZhbWlseT1TaWxrc2NyZWVuOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICNlZGYyZmM7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzIxMjEyMTtcXG4gIC8qIC0tcHJpbWFyeS1jb2xvcjogI2RmZjZmZjtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMDYyODNkOyAqL1xcbiAgLyogLS1wcmltYXJ5LWNvbG9yOiAjZmViMTM5O1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICMxNzQ2YTI7ICovXFxuICAvKiAtLXByaW1hcnktY29sb3I6ICNmOGNiMmU7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzAwNmU3ZjsgKi9cXG59XFxuXFxuLmRhcmstdGhlbWUge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMjEyMTIxO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNlZGYyZmM7XFxuICAvKiAtLXByaW1hcnktY29sb3I6ICMxNzQ2QTI7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogI2RmZjZmZjsgKi9cXG4gIC8qIC0tcHJpbWFyeS1jb2xvcjogIzE3NDZhMjtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZmViMTM5OyAqL1xcbiAgLyogLS1wcmltYXJ5LWNvbG9yOiAjMDA2ZTdmO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNmOGNiMmU7ICovXFxufVxcblxcbmh0bWwge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMjRweDtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIlNpbGtzY3JlZW5cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0Om5vdChbdHlwZT1cXFwicmFkaW9cXFwiXSk6bm90KFt0eXBlPVxcXCJjaGVja2JveFxcXCJdKSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICBjdXJzb3I6IGluaXRpYWw7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuI25hbWUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2ljb24ge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNyZWF0ZXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3JlYXRldGl0bGUgYnV0dG9uIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNyZWF0ZXRpdGxlIGJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi5jcmVhdGVjYXRlZ29yeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NhdGVnb3J5IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHdpZHRoOiAxODBweDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tb2RhbC1iZyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuMjVzO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2F0ZWdvcnktZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxuICBwYWRkaW5nOiA1cHggMDtcXG59XFxuXFxuLmNhdGVnb3J5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmNhdGVnb3J5OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLmNhdGVnb3J5IHNwYW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLXdpZHRoOiA1MHZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4ucHJpb3JpdHlkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNkb3duYXJyb3cge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubW9kYWwtY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNlbGVjdGVkVmlldyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4udGFza2Rpc3BsYXkge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi5jYXRlZ29yeS1kaXNwbGF5IHtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgI2ljb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMTBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgI2ljb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gQ2F0ZWdvcmllc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSB7XG4gIGNvbnN0cnVjdG9yKGNhdGVnb3J5bmFtZSkge1xuICAgIHRoaXMuY2F0ZWdvcnluYW1lID0gY2F0ZWdvcnluYW1lO1xuICB9XG59XG5cbi8vIGNvbnN0IGNhdGVnb3J5TW9kdWxlID0gKCgpID0+IHtcbi8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbi8vICAgICBjb25zdCBjYXRlZ29yeUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeVwiKTtcbi8vICAgICBjYXRlZ29yeUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbi8vICAgICAgIGxldCBjdXJyZW50ID0gbmV3IENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKTtcbi8vICAgICAgIGxldCBjdXJyZW50Q2F0ZWdvcmllc0luU3RvcmFnZSA9IEpTT04ucGFyc2UoXG4vLyAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmllc1wiKVxuLy8gICAgICAgKTtcbi8vICAgICAgIGxldCBjYXRlZ29yaWVzID0gY3VycmVudENhdGVnb3JpZXNJblN0b3JhZ2U7XG4vLyAgICAgICBjYXRlZ29yaWVzLnB1c2goY3VycmVudCk7XG4vLyAgICAgICBjYXRlZ29yeUlucHV0LnZhbHVlID0gXCJcIjtcbi8vICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2F0ZWdvcmllc1wiLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKSk7XG4vLyAgICAgICBhZGRDYXRlZ29yaWVzKGNhdGVnb3JpZXMpO1xuLy8gICAgIH0pO1xuLy8gICB9KTtcblxuLy8gICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcmllcygpIHtcbi8vICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWVzXCIpKSB7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuLy8gICAgICAgICBcImNhdGVnb3JpZXNcIixcbi8vICAgICAgICAgSlNPTi5zdHJpbmdpZnkoW3sgY2F0ZWdvcnluYW1lOiBcImFsbCB0YXNrc1wiIH1dKVxuLy8gICAgICAgKTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICBsb2FkQ2F0ZWdvcmllcygpO1xuXG4vLyAgIGZ1bmN0aW9uIGFkZENhdGVnb3JpZXMoY2F0ZWdvcmllcykge1xuLy8gICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5LmNhdGVnb3J5bmFtZSk7XG4vLyAgICAgfSk7XG4vLyAgIH1cbi8vIH0pKCk7XG4iLCJpbXBvcnQgVFRhc2sgZnJvbSBcIi4vdGFzazJcIjtcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9jYXRlZ29yeVwiO1xuXG5sZXQgc2VsZWN0ZWRDYXRlZ29yeSA9IFwiYWxsIHRhc2tzXCI7XG5sZXQgbmFtZUltcHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpO1xubGV0IHRoZW1lSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWNvblwiKTtcbmxldCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xubGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZVwiKTtcbmxldCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJnXCIpO1xubGV0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNsb3NlXCIpO1xubGV0IHRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFRhc2tcIik7XG5sZXQgY2F0ZWdvcnlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0ZWdvcnlcIik7XG5sZXQgY2F0ZWdvcnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2NhdGVnb3J5XVwiKTtcblxuY29uc3QgaW5pdGlhbExvYWQgPSAoKCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIC8vIEluaXRpYWwgRGF0ZSBVcGRhdGVcbiAgICBsZXQgaW5pdGlhbERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBpbml0YWxUaW1lID0gaW5pdGlhbERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgaW5mby50ZXh0Q29udGVudCA9IGBJdCdzICR7aW5pdGlhbERhdGUudG9EYXRlU3RyaW5nKCl9LCAke2luaXRhbFRpbWV9YDtcblxuICAgIC8vIFN0b3JhZ2VcblxuICAgIC8vIFVzZXJOYW1lXG5cbiAgICBjb25zdCB1c2VyTmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlck5hbWVcIikgfHwgXCJcIjtcbiAgICBuYW1lSW1wdXQudmFsdWUgPSB1c2VyTmFtZTtcblxuICAgIG5hbWVJbXB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJOYW1lXCIsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIFRoZW1lXG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA9PSBcImRhcmstdGhlbWVcIikge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay10aGVtZVwiKTtcbiAgICAgIHRoZW1lSWNvbi5zcmMgPSBcIi4vaW1hZ2VzL3N1bnBpeGVsLnBuZ1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibm9ybWFsXCIpO1xuICAgICAgdGhlbWVJY29uLnNyYyA9IFwiLi9pbWFnZXMvaGFsZi1tb29uLnBuZ1wiO1xuICAgIH1cblxuICAgIC8vIFRoZW1lIENoYW5nZXJcblxuICAgIHRoZW1lSWNvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay10aGVtZVwiKTtcbiAgICAgIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmstdGhlbWVcIikpIHtcbiAgICAgICAgdGhlbWVJY29uLnNyYyA9IFwiLi4vZGlzdC9pbWFnZXMvc3VucGl4ZWwucG5nXCI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrLXRoZW1lXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhlbWVJY29uLnNyYyA9IFwiLi4vZGlzdC9pbWFnZXMvaGFsZi1tb29uLnBuZ1wiO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibm9ybWFsXCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvL0NhdGVnb3J5IElucHV0XG5cbiAgICBjYXRlZ29yeUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIGxldCBjdXJyZW50ID0gbmV3IENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGxldCBjdXJyZW50Q2F0ZWdvcmllc0luU3RvcmFnZSA9IEpTT04ucGFyc2UoXG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmllc1wiKVxuICAgICAgKTtcbiAgICAgIGxldCBjYXRlZ29yaWVzID0gY3VycmVudENhdGVnb3JpZXNJblN0b3JhZ2U7XG4gICAgICBjYXRlZ29yaWVzLnB1c2goY3VycmVudCk7XG4gICAgICBzZWxlY3RlZENhdGVnb3J5ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBjYXRlZ29yeUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2F0ZWdvcmllc1wiLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKSk7XG5cbiAgICAgIHJlbmRlckNhdGVnb3JpZXMoKTtcbiAgICAgIHVwZGF0ZURvbSgpO1xuICAgICAgY2hhbmdlU2VsZWN0ZWRPblNjcmVlbkNTUygpO1xuICAgIH0pO1xuXG4gICAgLy8gT3BlbiBBZGQgVGFzayBNb2RhbFxuXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2UgTW9kYWxcblxuICAgIG1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSBUaW1lXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gZ2V0RGlzcGxheVRpbWUoKSB7XG4gICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IGN1cnJlbnRUaW1lID0gY3VycmVudERhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICBpbmZvLnRleHRDb250ZW50ID0gYEl0J3MgJHtjdXJyZW50RGF0ZS50b0RhdGVTdHJpbmcoKX0sICR7Y3VycmVudFRpbWV9YDtcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG5cbiAgLy8gQ2F0ZWdvcnkgU3dpdGNoZXJcbn0pKCk7XG5cbi8vIExvYWQgQ2F0ZWdvcmllcyB0byBET01cblxuZnVuY3Rpb24gbG9hZENhdGVnb3JpZXMoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpZXNcIikpIHtcbiAgfSBlbHNlIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIFwiY2F0ZWdvcmllc1wiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoW3sgY2F0ZWdvcnluYW1lOiBcImFsbCB0YXNrc1wiIH1dKVxuICAgICk7XG4gIH1cbiAgcmVuZGVyQ2F0ZWdvcmllcygpO1xufVxuXG5sb2FkQ2F0ZWdvcmllcygpO1xuXG4vLyBMb2FkIFRhc2tzXG5cbmZ1bmN0aW9uIGxvYWRUYXNrcygpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHtcbiAgfSBlbHNlIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gIH1cbn1cblxubG9hZFRhc2tzKCk7XG5cbi8vIFRhc2sgU3VibWl0IHRvIENyZWF0ZSBUYXNrXG5cbnRhc2tTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGxldCB0YXNraW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tpbnB1dFwiKTtcbiAgbGV0IHRhc2tpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjaW5wdXRcIik7XG4gIGxldCB0YXNraW5wdXREdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZWRhdGVcIik7XG4gIGxldCB0YXNraW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJ1xuICApO1xuXG4gIGxldCB0YXNrbGVuZ3RoID0gdGFza2lucHV0LnZhbHVlLmxlbmd0aDtcbiAgbGV0IGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKTtcbiAgaWYgKHRhc2tsZW5ndGggPj0gMSkge1xuICAgIGxldCBjdXJyZW50Q3JlYXRlVGFzayA9IG5ldyBUVGFzayhcbiAgICAgIHRhc2tpbnB1dC52YWx1ZSxcbiAgICAgIHRhc2tpbnB1dERlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgdGFza2lucHV0RHVlLnZhbHVlLFxuICAgICAgdGFza2lucHV0UHJpb3JpdHkudmFsdWUsXG4gICAgICBzZWxlY3RlZENhdGVnb3J5LFxuICAgICAgaWRcbiAgICApO1xuXG4gICAgbGV0IGN1cnJlbnRUYXNrc0luU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG5cbiAgICBsZXQgdGFza3MgPSBjdXJyZW50VGFza3NJblN0b3JhZ2U7XG5cbiAgICB0YXNrcy5wdXNoKGN1cnJlbnRDcmVhdGVUYXNrKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcblxuICAgIHRhc2tpbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgdGFza2lucHV0RGVzY3JpcHRpb24udmFsdWUgPSBudWxsO1xuICAgIHRhc2tpbnB1dER1ZS52YWx1ZSA9IG51bGw7XG5cbiAgICBjb25zb2xlLnRhYmxlKHRhc2tzKTtcblxuICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9IGVsc2Uge1xuICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG59KTtcblxuLy8gUmVuZGVyIENhdGVnb3JpZXNcblxuZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcmllcygpIHtcbiAgY29uc3QgY2F0ZWdvcnlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXRlZ29yeS1kaXNwbGF5XCIpO1xuICBkZWxldGVDYXRlZ29yaWVzKGNhdGVnb3J5RGlzcGxheSk7XG4gIGxldCBjdXJyZW50Q2F0ZWdvcmllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWVzXCIpKTtcbiAgY3VycmVudENhdGVnb3JpZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGxldCBjYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2F0ZWdvcnlCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIpO1xuICAgIGNhdGVnb3J5QnV0dG9uLnNldEF0dHJpYnV0ZShcImNhdGVnb3J5XCIsIGAke2VsZW1lbnQuY2F0ZWdvcnluYW1lfWApO1xuICAgIGNhdGVnb3J5QnV0dG9uLmlubmVyVGV4dCA9IGVsZW1lbnQuY2F0ZWdvcnluYW1lO1xuICAgIGlmIChlbGVtZW50LmNhdGVnb3J5bmFtZSAhPSBcImFsbCB0YXNrc1wiKSB7XG4gICAgICBsZXQgY2F0ZWdvcnlEZWxldGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBjYXRlZ29yeURlbGV0ZVNwYW4uY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5ZGVsZXRlXCIpO1xuICAgICAgY2F0ZWdvcnlEZWxldGVTcGFuLmlubmVyVGV4dCA9IFwiWFwiO1xuICAgICAgY2F0ZWdvcnlCdXR0b24uYXBwZW5kQ2hpbGQoY2F0ZWdvcnlEZWxldGVTcGFuKTtcbiAgICB9XG4gICAgY2F0ZWdvcnlEaXNwbGF5LmFwcGVuZENoaWxkKGNhdGVnb3J5QnV0dG9uKTtcbiAgfSk7XG4gIHVwZGF0ZURvbSgpO1xuICBjb25zb2xlLmxvZyhzZWxlY3RlZENhdGVnb3J5KTtcbiAgYWRkQ2F0ZWdvcnlTd2l0Y2hlcigpO1xufVxuXG4vLyB1cGRhdGUgQ2F0ZWdvcnkgU2VsZWN0b3JzIGFuZCBMb2FkZXJzXG5mdW5jdGlvbiB1cGRhdGVEb20oKSB7XG4gIG5hbWVJbXB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKTtcbiAgdGhlbWVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uXCIpO1xuICBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuICBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVcIik7XG4gIHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYmdcIik7XG4gIG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNsb3NlXCIpO1xuICB0YXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRUYXNrXCIpO1xuICBjYXRlZ29yeUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeVwiKTtcbiAgY2F0ZWdvcnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2NhdGVnb3J5XVwiKTtcbn1cblxuLy8gRGVsZXRlIEV4aXN0aW5nIENhdGVnb3JpZXNcbmZ1bmN0aW9uIGRlbGV0ZUNhdGVnb3JpZXMoeCkge1xuICB3aGlsZSAoeC5maXJzdENoaWxkKSB7XG4gICAgeC5yZW1vdmVDaGlsZCh4LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNlbGVjdGVkT25TY3JlZW5DU1MoKSB7XG4gIGNhdGVnb3J5QnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKFwiY2F0ZWdvcnlcIikgPT0gc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFZpZXdcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRWaWV3XCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENhdGVnb3J5U3dpdGNoZXIoKSB7XG4gIGNhdGVnb3J5QnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjYXRlZ29yeVwiKTtcbiAgICAgIGNoYW5nZVNlbGVjdGVkT25TY3JlZW5DU1MoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmNoYW5nZVNlbGVjdGVkT25TY3JlZW5DU1MoKTtcblxuZXhwb3J0IHsgaW5pdGlhbExvYWQsIHVwZGF0ZURvbSB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSA9IFwiXCIsIHByaW9yaXR5LCBjYXRlZ29yeSwgaWQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXREYXRlKGR1ZURhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG5cbiAgZ2V0RGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9XG5cbiAgc2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICBnZXRQcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIHNldENhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICB9XG5cbiAgZ2V0Q2F0ZWdvcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcnk7XG4gIH1cblxuICBzZXRJRCgpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICBnZXRJRCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBpbml0aWFsTG9hZCB9IGZyb20gXCIuL2dlbmVyYWxEb21cIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
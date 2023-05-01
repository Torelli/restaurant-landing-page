/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/home/home.js":
/*!*************************************!*\
  !*** ./src/components/home/home.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Homepage)
/* harmony export */ });
/* harmony import */ var _home_dish_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home_dish.png */ "./src/components/home/home_dish.png");


function Homepage() {
  const container = document.createElement("div");
  container.classList.add(
    "flex",
    "items-center",
    "justify-between",
    "pt-20",
    "pl-24",
    "h-screen",
    "overflow-hidden"
  );

  const heroContainer = document.createElement("div");

  const heading = document.createElement("h2");
  heading.classList.add("text-6xl", "mb-4", "leading-tight");
  heading.innerHTML =
    'Spring in <span class="font-bold text-orange-300">WoodFood</span>';

  heroContainer.appendChild(heading);

  const copy = document.createElement("p");
  copy.innerText = "The most delicious outdoor food";

  heroContainer.appendChild(copy);

  const btnMenu = document.createElement("button");
  btnMenu.classList.add(
    "border",
    "border-slate-300",
    "ml-6",
    "mt-4",
    "px-8",
    "py-4",
    "rounded-full",
    "shadow-sm",
    "hover:shadow-2xl",
    "hover:border-slate-400",
    "transition-all"
  );
  btnMenu.innerText = "Explore our menu";

  heroContainer.appendChild(btnMenu);

  container.appendChild(heroContainer);

  const imageContainer = document.createElement("div");

  const homeDish = new Image();
  homeDish.src = _home_dish_png__WEBPACK_IMPORTED_MODULE_0__;
  homeDish.classList.add("pointer-events-none");
  imageContainer.appendChild(homeDish);

  container.appendChild(imageContainer);

  return container;
}


/***/ }),

/***/ "./src/components/menu/menu.js":
/*!*************************************!*\
  !*** ./src/components/menu/menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
const options = {
    colors: ['orange', 'emerald', 'sky', 'fuchsia', 'rose'],
    range: [4], // Between 100 and 400,
    prefix: 'text' // Can be 'bg', 'text', etc.
};

async function categories(container) {
  const categories = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  )
    .then((response) => response.json())
    .then((categories) => categories.categories);

  for (let category of categories) {
    let color = randomizeColors();
    const title = document.createElement("span");
    title.classList.add(
      `text-${color}`,
      "border",
      `border-${color}`,
      "rounded",
      "px-2",
      "py-1",
      "text-sm",
      "cursor-pointer",
      "hover:bg-slate-200"
    );
    title.innerText = category.strCategory;

    container.appendChild(title);
  }
}

function randomizeColors() {
  let odds = Math.floor(Math.random() * 5);
  return odds === 0
    ? "orange-600"
    : odds === 1
    ? "emerald-600"
    : odds === 2
    ? "sky-600"
    : odds === 3
    ? "fuchsia-600"
    : "rose-600";
}

function Menu() {
  const container = document.createElement("div");
  container.classList.add("pt-24", "px-24");

  const title = document.createElement("h2");
  title.classList.add("text-lg", "font-bold");
  title.innerText = "Categories";

  container.appendChild(title);

  const categoriesContainer = document.createElement("div");
  categoriesContainer.classList.add("flex", "items-center", "gap-2", "mt-2", "flex-wrap");

  container.appendChild(categoriesContainer);

  categories(categoriesContainer);

  return container;
}


/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navbar)
/* harmony export */ });
function btn(title) {
  const btn = document.createElement("button");
  btn.classList.add(
    "font-semibold",
    "text-sm",
    "hover:border-b",
    "hover:border-b-slate-400",
    "transition-all"
  );
  btn.innerHTML = title;

  return btn;
}

function navbar() {
  const container = document.createElement("div");
  container.classList.add(
    "flex",
    "items-center",
    "justify-between",
    "pt-10",
    "pb-5",
    "px-24",
    "w-full",
    "fixed"
  );

  const header = document.createElement("h1");
  header.classList.add("text-2xl", "font-bold", "cursor-pointer");
  header.innerHTML = 'Wood<span class="text-slate-300">Food</span>';
  container.appendChild(header);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("flex", "px-8", "gap-8");

  const btnHome = btn("Home");
  btnContainer.appendChild(btnHome);

  const btnMenu = btn("Menu");
  btnContainer.appendChild(btnMenu);

  const btnContact = btn("Contact");
  btnContainer.appendChild(btnContact);

  container.appendChild(btnContainer);

  const btnSocialContainer = document.createElement("div");
  btnSocialContainer.classList.add("flex", "px-8", "gap-8");

  const btnSocialFacebook = btn(
    '<i class="fa-brands fa-facebook-f text-lg pb-1"></i>'
  );
  btnSocialContainer.appendChild(btnSocialFacebook);

  const btnSocialInstagram = btn(
    '<i class="fa-brands fa-instagram text-lg pb-1"></i>'
  );
  btnSocialContainer.appendChild(btnSocialInstagram);

  container.appendChild(btnSocialContainer);

  return container;
}


/***/ }),

/***/ "./src/components/home/home_dish.png":
/*!*******************************************!*\
  !*** ./src/components/home/home_dish.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c41f48e15fdf89271233.png";

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
/******/ 				scriptUrl = document.currentScript.src;
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar */ "./src/components/navbar.js");
/* harmony import */ var _components_home_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home */ "./src/components/home/home.js");
/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/menu */ "./src/components/menu/menu.js");




const content = document.querySelector("#content");

content.appendChild((0,_components_navbar__WEBPACK_IMPORTED_MODULE_0__["default"])());

content.appendChild((0,_components_menu_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsMkNBQU87QUFDeEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZnlDO0FBQ0s7QUFDSjs7QUFFMUM7O0FBRUEsb0JBQW9CLDhEQUFNOztBQUUxQixvQkFBb0IsaUVBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL3NyYy9jb21wb25lbnRzL2hvbWUvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL3NyYy9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhvbWVJbWcgZnJvbSBcIi4vaG9tZV9kaXNoLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lcGFnZSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJmbGV4XCIsXG4gICAgXCJpdGVtcy1jZW50ZXJcIixcbiAgICBcImp1c3RpZnktYmV0d2VlblwiLFxuICAgIFwicHQtMjBcIixcbiAgICBcInBsLTI0XCIsXG4gICAgXCJoLXNjcmVlblwiLFxuICAgIFwib3ZlcmZsb3ctaGlkZGVuXCJcbiAgKTtcblxuICBjb25zdCBoZXJvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LTZ4bFwiLCBcIm1iLTRcIiwgXCJsZWFkaW5nLXRpZ2h0XCIpO1xuICBoZWFkaW5nLmlubmVySFRNTCA9XG4gICAgJ1NwcmluZyBpbiA8c3BhbiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LW9yYW5nZS0zMDBcIj5Xb29kRm9vZDwvc3Bhbj4nO1xuXG4gIGhlcm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3B5LmlubmVyVGV4dCA9IFwiVGhlIG1vc3QgZGVsaWNpb3VzIG91dGRvb3IgZm9vZFwiO1xuXG4gIGhlcm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY29weSk7XG5cbiAgY29uc3QgYnRuTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bk1lbnUuY2xhc3NMaXN0LmFkZChcbiAgICBcImJvcmRlclwiLFxuICAgIFwiYm9yZGVyLXNsYXRlLTMwMFwiLFxuICAgIFwibWwtNlwiLFxuICAgIFwibXQtNFwiLFxuICAgIFwicHgtOFwiLFxuICAgIFwicHktNFwiLFxuICAgIFwicm91bmRlZC1mdWxsXCIsXG4gICAgXCJzaGFkb3ctc21cIixcbiAgICBcImhvdmVyOnNoYWRvdy0yeGxcIixcbiAgICBcImhvdmVyOmJvcmRlci1zbGF0ZS00MDBcIixcbiAgICBcInRyYW5zaXRpb24tYWxsXCJcbiAgKTtcbiAgYnRuTWVudS5pbm5lclRleHQgPSBcIkV4cGxvcmUgb3VyIG1lbnVcIjtcblxuICBoZXJvQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bk1lbnUpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvQ29udGFpbmVyKTtcblxuICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29uc3QgaG9tZURpc2ggPSBuZXcgSW1hZ2UoKTtcbiAgaG9tZURpc2guc3JjID0gaG9tZUltZztcbiAgaG9tZURpc2guY2xhc3NMaXN0LmFkZChcInBvaW50ZXItZXZlbnRzLW5vbmVcIik7XG4gIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVEaXNoKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG4iLCJjb25zdCBvcHRpb25zID0ge1xuICAgIGNvbG9yczogWydvcmFuZ2UnLCAnZW1lcmFsZCcsICdza3knLCAnZnVjaHNpYScsICdyb3NlJ10sXG4gICAgcmFuZ2U6IFs0XSwgLy8gQmV0d2VlbiAxMDAgYW5kIDQwMCxcbiAgICBwcmVmaXg6ICd0ZXh0JyAvLyBDYW4gYmUgJ2JnJywgJ3RleHQnLCBldGMuXG59O1xuXG5hc3luYyBmdW5jdGlvbiBjYXRlZ29yaWVzKGNvbnRhaW5lcikge1xuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvY2F0ZWdvcmllcy5waHBcIlxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGNhdGVnb3JpZXMpID0+IGNhdGVnb3JpZXMuY2F0ZWdvcmllcyk7XG5cbiAgZm9yIChsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIGxldCBjb2xvciA9IHJhbmRvbWl6ZUNvbG9ycygpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcbiAgICAgIGB0ZXh0LSR7Y29sb3J9YCxcbiAgICAgIFwiYm9yZGVyXCIsXG4gICAgICBgYm9yZGVyLSR7Y29sb3J9YCxcbiAgICAgIFwicm91bmRlZFwiLFxuICAgICAgXCJweC0yXCIsXG4gICAgICBcInB5LTFcIixcbiAgICAgIFwidGV4dC1zbVwiLFxuICAgICAgXCJjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgXCJob3ZlcjpiZy1zbGF0ZS0yMDBcIlxuICAgICk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gY2F0ZWdvcnkuc3RyQ2F0ZWdvcnk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJhbmRvbWl6ZUNvbG9ycygpIHtcbiAgbGV0IG9kZHMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTtcbiAgcmV0dXJuIG9kZHMgPT09IDBcbiAgICA/IFwib3JhbmdlLTYwMFwiXG4gICAgOiBvZGRzID09PSAxXG4gICAgPyBcImVtZXJhbGQtNjAwXCJcbiAgICA6IG9kZHMgPT09IDJcbiAgICA/IFwic2t5LTYwMFwiXG4gICAgOiBvZGRzID09PSAzXG4gICAgPyBcImZ1Y2hzaWEtNjAwXCJcbiAgICA6IFwicm9zZS02MDBcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwdC0yNFwiLCBcInB4LTI0XCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGV4dC1sZ1wiLCBcImZvbnQtYm9sZFwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gXCJDYXRlZ29yaWVzXCI7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBjYXRlZ29yaWVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2F0ZWdvcmllc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmxleFwiLCBcIml0ZW1zLWNlbnRlclwiLCBcImdhcC0yXCIsIFwibXQtMlwiLCBcImZsZXgtd3JhcFwiKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcmllc0NvbnRhaW5lcik7XG5cbiAgY2F0ZWdvcmllcyhjYXRlZ29yaWVzQ29udGFpbmVyKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiZnVuY3Rpb24gYnRuKHRpdGxlKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFxuICAgIFwiZm9udC1zZW1pYm9sZFwiLFxuICAgIFwidGV4dC1zbVwiLFxuICAgIFwiaG92ZXI6Ym9yZGVyLWJcIixcbiAgICBcImhvdmVyOmJvcmRlci1iLXNsYXRlLTQwMFwiLFxuICAgIFwidHJhbnNpdGlvbi1hbGxcIlxuICApO1xuICBidG4uaW5uZXJIVE1MID0gdGl0bGU7XG5cbiAgcmV0dXJuIGJ0bjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2YmFyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcbiAgICBcImZsZXhcIixcbiAgICBcIml0ZW1zLWNlbnRlclwiLFxuICAgIFwianVzdGlmeS1iZXR3ZWVuXCIsXG4gICAgXCJwdC0xMFwiLFxuICAgIFwicGItNVwiLFxuICAgIFwicHgtMjRcIixcbiAgICBcInctZnVsbFwiLFxuICAgIFwiZml4ZWRcIlxuICApO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LTJ4bFwiLCBcImZvbnQtYm9sZFwiLCBcImN1cnNvci1wb2ludGVyXCIpO1xuICBoZWFkZXIuaW5uZXJIVE1MID0gJ1dvb2Q8c3BhbiBjbGFzcz1cInRleHQtc2xhdGUtMzAwXCI+Rm9vZDwvc3Bhbj4nO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZsZXhcIiwgXCJweC04XCIsIFwiZ2FwLThcIik7XG5cbiAgY29uc3QgYnRuSG9tZSA9IGJ0bihcIkhvbWVcIik7XG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Ib21lKTtcblxuICBjb25zdCBidG5NZW51ID0gYnRuKFwiTWVudVwiKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bk1lbnUpO1xuXG4gIGNvbnN0IGJ0bkNvbnRhY3QgPSBidG4oXCJDb250YWN0XCIpO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFjdCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbiAgY29uc3QgYnRuU29jaWFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnRuU29jaWFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIsIFwicHgtOFwiLCBcImdhcC04XCIpO1xuXG4gIGNvbnN0IGJ0blNvY2lhbEZhY2Vib29rID0gYnRuKFxuICAgICc8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1mYWNlYm9vay1mIHRleHQtbGcgcGItMVwiPjwvaT4nXG4gICk7XG4gIGJ0blNvY2lhbENvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Tb2NpYWxGYWNlYm9vayk7XG5cbiAgY29uc3QgYnRuU29jaWFsSW5zdGFncmFtID0gYnRuKFxuICAgICc8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1pbnN0YWdyYW0gdGV4dC1sZyBwYi0xXCI+PC9pPidcbiAgKTtcbiAgYnRuU29jaWFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0blNvY2lhbEluc3RhZ3JhbSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0blNvY2lhbENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbmF2YmFyIGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5pbXBvcnQgSG9tZXBhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2hvbWVcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudS9tZW51XCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2YmFyKCkpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKE1lbnUoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
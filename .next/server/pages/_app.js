/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! notistack */ \"notistack\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_Store__WEBPACK_IMPORTED_MODULE_4__]);\n_utils_Store__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction Loading() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const handleStart = (url)=>url !== router.asPath && setLoading(true)\n        ;\n        const handleComplete = ()=>setLoading(false)\n        ;\n        router.events.on(\"routeChangeStart\", handleStart);\n        router.events.on(\"routeChangeComplete\", handleComplete);\n        router.events.on(\"routeChangeError\", handleComplete);\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handleStart);\n            router.events.off(\"routeChangeComplete\", handleComplete);\n            router.events.off(\"routeChangeError\", handleComplete);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-[100vh] w-[100vw] flex justify-center items-center fixed top-0 left-0 bg-[#061024df] z-10\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-[50%] h-[25px] w-[25px] mt-0 mr-auto mb-auto ml-auto border-2 bg-[#061024] animate-spin\"\n            }, void 0, false, {\n                fileName: \"/Users/sai/Documents/sai_files/sami/mypushgambel/pages/_app.tsx\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sai/Documents/sai_files/sami/mypushgambel/pages/_app.tsx\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_Store__WEBPACK_IMPORTED_MODULE_4__.StoreProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(notistack__WEBPACK_IMPORTED_MODULE_5__.SnackbarProvider, {\n                maxSnack: 3,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loading, {}, void 0, false, {\n                        fileName: \"/Users/sai/Documents/sai_files/sami/mypushgambel/pages/_app.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/sai/Documents/sai_files/sami/mypushgambel/pages/_app.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sai/Documents/sai_files/sami/mypushgambel/pages/_app.tsx\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sai/Documents/sai_files/sami/mypushgambel/pages/_app.tsx\",\n            lineNumber: 40,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUVTO0FBQ0k7QUFDRztBQUNGO0FBRTdDLFNBQVNLLE9BQU8sR0FBRztJQUNqQixNQUFNQyxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQVRSLEdBU1NPLE9BQU8sR0FUaEIsR0FTa0JDLFVBQVUsTUFBSVAsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFFN0NDLGdEQUFTLENBQUMsSUFBTTtRQUNkLE1BQU1PLFdBQVcsR0FBRyxDQUFDQyxHQUFXLEdBQUtBLEdBQUcsS0FBS0osTUFBTSxDQUFDSyxNQUFNLElBQUlILFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFBQztRQUMvRSxNQUFNSSxjQUFjLEdBQUcsSUFBT0osVUFBVSxDQUFDLEtBQUssQ0FBQztRQUFDO1FBRWhERixNQUFNLENBQUNPLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLGtCQUFrQixFQUFFTCxXQUFXLENBQUMsQ0FBQztRQUNsREgsTUFBTSxDQUFDTyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRUYsY0FBYyxDQUFDLENBQUM7UUFDeEROLE1BQU0sQ0FBQ08sTUFBTSxDQUFDQyxFQUFFLENBQUMsa0JBQWtCLEVBQUVGLGNBQWMsQ0FBQyxDQUFDO1FBRXJELE9BQU8sSUFBTTtZQUNYTixNQUFNLENBQUNPLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLGtCQUFrQixFQUFFTixXQUFXLENBQUMsQ0FBQztZQUNuREgsTUFBTSxDQUFDTyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRUgsY0FBYyxDQUFDLENBQUM7WUFDekROLE1BQU0sQ0FBQ08sTUFBTSxDQUFDRSxHQUFHLENBQUMsa0JBQWtCLEVBQUVILGNBQWMsQ0FBQyxDQUFDO1NBQ3ZELENBQUM7S0FDSCxDQUFDLENBQUM7SUFDSCxxQkFDRTtrQkFDR0wsT0FBTyxrQkFDTiw4REFBQ1MsS0FBRztZQUFDQyxTQUFTLEVBQUMsNkZBQTZGO3NCQUMxRyw0RUFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGlIQUFpSDs7Ozs7b0JBQUc7Ozs7O2dCQUMvSDtxQkFFUCxDQUNIO0NBQ0g7QUFFRCxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRTtrQkFDQSw0RUFBQ2pCLHVEQUFhO3NCQUNkLDRFQUFDQyx1REFBZ0I7Z0JBQUNpQixRQUFRLEVBQUUsQ0FBQzs7a0NBQzNCLDhEQUFDaEIsT0FBTzs7Ozs0QkFBRztrQ0FDWCw4REFBQ2MsU0FBUzt3QkFBRSxHQUFHQyxTQUFTOzs7Ozs0QkFBSTs7Ozs7O29CQUNUOzs7OztnQkFDSDtxQkFDZixDQUNIO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3RvcmVQcm92aWRlciB9IGZyb20gXCIuLi91dGlscy9TdG9yZVwiO1xuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciB9IGZyb20gJ25vdGlzdGFjayc7XG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTdGFydCA9ICh1cmw6IHN0cmluZykgPT4gdXJsICE9PSByb3V0ZXIuYXNQYXRoICYmIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAoKSA9PiAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVTdGFydCk7XG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlQ29tcGxldGUpO1xuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsIGhhbmRsZUNvbXBsZXRlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlU3RhcnQpO1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VFcnJvclwiLCBoYW5kbGVDb21wbGV0ZSk7XG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVsxMDB2aF0gdy1bMTAwdnddIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZpeGVkIHRvcC0wIGxlZnQtMCBiZy1bIzA2MTAyNGRmXSB6LTEwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVs1MCVdIHRvcC1bNTAlXSBoLVsyNXB4XSB3LVsyNXB4XSBtdC0wIG1yLWF1dG8gbWItYXV0byBtbC1hdXRvIGJvcmRlci0yIGJnLVsjMDYxMDI0XSBhbmltYXRlLXNwaW5cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxTdG9yZVByb3ZpZGVyPlxuICAgIDxTbmFja2JhclByb3ZpZGVyIG1heFNuYWNrPXszfT5cbiAgICAgIDxMb2FkaW5nIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1NuYWNrYmFyUHJvdmlkZXI+XG4gICAgICA8L1N0b3JlUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3RvcmVQcm92aWRlciIsIlNuYWNrYmFyUHJvdmlkZXIiLCJMb2FkaW5nIiwicm91dGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVTdGFydCIsInVybCIsImFzUGF0aCIsImhhbmRsZUNvbXBsZXRlIiwiZXZlbnRzIiwib24iLCJvZmYiLCJkaXYiLCJjbGFzc05hbWUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1heFNuYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./utils/Store.js":
/*!************************!*\
  !*** ./utils/Store.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Store\": () => (/* binding */ Store),\n/* harmony export */   \"StoreProvider\": () => (/* binding */ StoreProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nconst initialState = {\n    userInfo: js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"userInfo\") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"userInfo\")) : null\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"USER_LOGIN\":\n            return {\n                ...state,\n                userInfo: action.payload\n            };\n        case \"USER_LOGOUT\":\n            return {\n                ...state,\n                userInfo: null\n            };\n        default:\n            return state;\n    }\n}\nfunction StoreProvider(props) {\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/sai/Documents/sai_files/sami/mypushgambel/utils/Store.js\",\n        lineNumber: 31,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9TdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0M7QUFDa0I7QUFFM0MsTUFBTUcsS0FBSyxpQkFBR0Ysb0RBQWEsRUFBRSxDQUFDO0FBRXJDLE1BQU1HLFlBQVksR0FBRztJQUNuQkMsUUFBUSxFQUFFTCxxREFBVyxDQUFDLFVBQVUsQ0FBQyxHQUM3Qk8sSUFBSSxDQUFDQyxLQUFLLENBQUNSLHFEQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsR0FDbkMsSUFBSTtDQUNUO0FBRUQsU0FBU1MsT0FBTyxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sRUFBRTtJQUM5QixPQUFRQSxNQUFNLENBQUNDLElBQUk7UUFFakIsS0FBSyxZQUFZO1lBQ2YsT0FBTztnQkFBRSxHQUFHRixLQUFLO2dCQUFFTCxRQUFRLEVBQUVNLE1BQU0sQ0FBQ0UsT0FBTzthQUFFLENBQUM7UUFDaEQsS0FBSyxhQUFhO1lBQ2hCLE9BQU87Z0JBQ0wsR0FBR0gsS0FBSztnQkFDUkwsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDO1FBRUo7WUFDRSxPQUFPSyxLQUFLLENBQUM7S0FDaEI7Q0FDRjtBQUVNLFNBQVNJLGFBQWEsQ0FBQ0MsS0FBSyxFQUFFO0lBQ25DLE1BQU0sRUE1QlIsR0E0QlNMLEtBQUssR0E1QmQsR0E0QmdCTSxRQUFRLE1BQUlkLGlEQUFVLENBQUNPLE9BQU8sRUFBRUwsWUFBWSxDQUFDO0lBQzNELE1BQU1hLEtBQUssR0FBRztRQUFFUCxLQUFLO1FBQUVNLFFBQVE7S0FBRTtJQUNqQyxxQkFBTyw4REFBQ2IsS0FBSyxDQUFDZSxRQUFRO1FBQUNELEtBQUssRUFBRUEsS0FBSztrQkFBR0YsS0FBSyxDQUFDSSxRQUFROzs7OztZQUFrQixDQUFDO0NBQ3hFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvU3RvcmUuanM/OGI4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXJJbmZvOiBDb29raWVzLmdldCgndXNlckluZm8nKVxuICAgID8gSlNPTi5wYXJzZShDb29raWVzLmdldCgndXNlckluZm8nKSlcbiAgICA6IG51bGwsXG59O1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgXG4gICAgY2FzZSAnVVNFUl9MT0dJTic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlckluZm86IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSAnVVNFUl9MT0dPVVQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJJbmZvOiBudWxsLFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN0b3JlUHJvdmlkZXIocHJvcHMpIHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHZhbHVlID0geyBzdGF0ZSwgZGlzcGF0Y2ggfTtcbiAgcmV0dXJuIDxTdG9yZS5Qcm92aWRlciB2YWx1ZT17dmFsdWV9Pntwcm9wcy5jaGlsZHJlbn08L1N0b3JlLlByb3ZpZGVyPjtcbn0iXSwibmFtZXMiOlsiQ29va2llcyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJ1c2VySW5mbyIsImdldCIsIkpTT04iLCJwYXJzZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiU3RvcmVQcm92aWRlciIsInByb3BzIiwiZGlzcGF0Y2giLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/Store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "notistack":
/*!****************************!*\
  !*** external "notistack" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("notistack");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
"use strict";
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
exports.id = "pages/api/users/login";
exports.ids = ["pages/api/users/login"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./pages/api/users/login.js":
/*!**********************************!*\
  !*** ./pages/api/users/login.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/auth */ \"(api)/./utils/auth.js\");\n/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/client */ \"(api)/./utils/client.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nhandler.post(async (req, res)=>{\n    const user = await _utils_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fetch(`*[_type == \"user\" && email == $email][0]`, {\n        email: req.body.email\n    });\n    if (user && bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compareSync(req.body.password, user.password)) {\n        const token = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__.signToken)({\n            _id: user._id,\n            name: user.name,\n            email: user.email\n        });\n        res.send({\n            _id: user._id,\n            name: user.name,\n            email: user.email,\n            token\n        });\n    } else {\n        res.status(401).send({\n            message: \"Invalid email or password\"\n        });\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0E7QUFDZTtBQUNGO0FBRTNDLE1BQU1JLE9BQU8sR0FBR0osd0RBQUUsRUFBRTtBQUVwQkksT0FBTyxDQUFDQyxJQUFJLENBQUMsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDL0IsTUFBTUMsSUFBSSxHQUFHLE1BQU1MLDJEQUFZLENBQUMsQ0FBQyx3Q0FBd0MsQ0FBQyxFQUFFO1FBQzFFTyxLQUFLLEVBQUVKLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDRCxLQUFLO0tBQ3RCLENBQUM7SUFDRixJQUFJRixJQUFJLElBQUlQLDJEQUFrQixDQUFDSyxHQUFHLENBQUNLLElBQUksQ0FBQ0UsUUFBUSxFQUFFTCxJQUFJLENBQUNLLFFBQVEsQ0FBQyxFQUFFO1FBQ2hFLE1BQU1DLEtBQUssR0FBR1osc0RBQVMsQ0FBQztZQUN0QmEsR0FBRyxFQUFFUCxJQUFJLENBQUNPLEdBQUc7WUFDYkMsSUFBSSxFQUFFUixJQUFJLENBQUNRLElBQUk7WUFDZk4sS0FBSyxFQUFFRixJQUFJLENBQUNFLEtBQUs7U0FDbEIsQ0FBQztRQUNGSCxHQUFHLENBQUNVLElBQUksQ0FBQztZQUNQRixHQUFHLEVBQUVQLElBQUksQ0FBQ08sR0FBRztZQUNiQyxJQUFJLEVBQUVSLElBQUksQ0FBQ1EsSUFBSTtZQUNmTixLQUFLLEVBQUVGLElBQUksQ0FBQ0UsS0FBSztZQUNqQkksS0FBSztTQUNOLENBQUMsQ0FBQztLQUNKLE1BQU07UUFDTFAsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNELElBQUksQ0FBQztZQUFFRSxPQUFPLEVBQUUsMkJBQTJCO1NBQUUsQ0FBQyxDQUFDO0tBQ2hFO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsaUVBQWVmLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS91c2Vycy9sb2dpbi5qcz8wMzg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuYyBmcm9tICduZXh0LWNvbm5lY3QnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XG5pbXBvcnQge3NpZ25Ub2tlbn0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2F1dGhcIlxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY2xpZW50XCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBuYygpO1xuXG5oYW5kbGVyLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBjbGllbnQuZmV0Y2goYCpbX3R5cGUgPT0gXCJ1c2VyXCIgJiYgZW1haWwgPT0gJGVtYWlsXVswXWAsIHtcbiAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gIH0pO1xuICBpZiAodXNlciAmJiBiY3J5cHQuY29tcGFyZVN5bmMocmVxLmJvZHkucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpKSB7XG4gICAgY29uc3QgdG9rZW4gPSBzaWduVG9rZW4oe1xuICAgICAgX2lkOiB1c2VyLl9pZCxcbiAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgIH0pO1xuICAgIHJlcy5zZW5kKHtcbiAgICAgIF9pZDogdXNlci5faWQsXG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIHRva2VuLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnIH0pO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsibmMiLCJiY3J5cHQiLCJzaWduVG9rZW4iLCJjbGllbnQiLCJoYW5kbGVyIiwicG9zdCIsInJlcSIsInJlcyIsInVzZXIiLCJmZXRjaCIsImVtYWlsIiwiYm9keSIsImNvbXBhcmVTeW5jIiwicGFzc3dvcmQiLCJ0b2tlbiIsIl9pZCIsIm5hbWUiLCJzZW5kIiwic3RhdHVzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/login.js\n");

/***/ }),

/***/ "(api)/./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signToken\": () => (/* binding */ signToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst signToken = (user)=>{\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(user, process.env.JWT_SECRET, {\n        expiresIn: \"30d\"\n    });\n};\n// const isAuth = async (req, res, next) => {\n//   const { authorization } = req.headers;\n//   if (authorization) {\n//     const token = authorization.slice(7, authorization.length); // BEARER XXX\n//     jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {\n//       if (err) {\n//         res.status(401).send({ message: 'Token is not valid' });\n//       } else {\n//         req.user = decode;\n//         next();\n//       }\n//     });\n//   } else {\n//     res.status(401).send({ message: 'Token is not suppiled' });\n//   }\n// };\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxTQUFTLEdBQUcsQ0FBQ0MsSUFBSSxHQUFLO0lBQzFCLE9BQU9GLHdEQUFRLENBQUNFLElBQUksRUFBRUUsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVUsRUFBRTtRQUM1Q0MsU0FBUyxFQUFFLEtBQUs7S0FDakIsQ0FBQyxDQUFDO0NBQ0o7QUFFRCw2Q0FBNkM7QUFDN0MsMkNBQTJDO0FBQzNDLHlCQUF5QjtBQUN6QixnRkFBZ0Y7QUFDaEYsbUVBQW1FO0FBQ25FLG1CQUFtQjtBQUNuQixtRUFBbUU7QUFDbkUsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLFVBQVU7QUFDVixhQUFhO0FBQ2Isa0VBQWtFO0FBQ2xFLE1BQU07QUFDTixLQUFLO0FBQ2dCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvYXV0aC5qcz9lYjYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuY29uc3Qgc2lnblRva2VuID0gKHVzZXIpID0+IHtcbiAgcmV0dXJuIGp3dC5zaWduKHVzZXIsIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIHtcbiAgICBleHBpcmVzSW46ICczMGQnLFxuICB9KTtcbn07XG5cbi8vIGNvbnN0IGlzQXV0aCA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuLy8gICBjb25zdCB7IGF1dGhvcml6YXRpb24gfSA9IHJlcS5oZWFkZXJzO1xuLy8gICBpZiAoYXV0aG9yaXphdGlvbikge1xuLy8gICAgIGNvbnN0IHRva2VuID0gYXV0aG9yaXphdGlvbi5zbGljZSg3LCBhdXRob3JpemF0aW9uLmxlbmd0aCk7IC8vIEJFQVJFUiBYWFhcbi8vICAgICBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVULCAoZXJyLCBkZWNvZGUpID0+IHtcbi8vICAgICAgIGlmIChlcnIpIHtcbi8vICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVG9rZW4gaXMgbm90IHZhbGlkJyB9KTtcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHJlcS51c2VyID0gZGVjb2RlO1xuLy8gICAgICAgICBuZXh0KCk7XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVG9rZW4gaXMgbm90IHN1cHBpbGVkJyB9KTtcbi8vICAgfVxuLy8gfTtcbmV4cG9ydCB7IHNpZ25Ub2tlbiB9OyJdLCJuYW1lcyI6WyJqd3QiLCJzaWduVG9rZW4iLCJ1c2VyIiwic2lnbiIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/auth.js\n");

/***/ }),

/***/ "(api)/./utils/client.js":
/*!*************************!*\
  !*** ./utils/client.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"(api)/./utils/config.js\");\n\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"9kfzk4em\",\n    dataset: \"blog\",\n    useCdn: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNaO0FBQzlCLE1BQU1FLE1BQU0sR0FBR0YscURBQVksQ0FBQztJQUMxQkcsU0FBUyxFQUFFQyxVQUF5QztJQUNwREcsT0FBTyxFQUFFSCxNQUFzQztJQUMvQ0ssTUFBTSxFQUFFLElBQUk7Q0FDYixDQUFDO0FBQ0YsaUVBQWVQLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL2NsaWVudC5qcz82ZTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSAnQHNhbml0eS9jbGllbnQnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5jb25zdCBjbGllbnQgPSBzYW5pdHlDbGllbnQoe1xuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lELFxuICBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCxcbiAgdXNlQ2RuOiB0cnVlLFxufSk7XG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7Il0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsImNvbmZpZyIsImNsaWVudCIsInByb2plY3RJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCIsImRhdGFzZXQiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsInVzZUNkbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/client.js\n");

/***/ }),

/***/ "(api)/./utils/config.js":
/*!*************************!*\
  !*** ./utils/config.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst config = {\n    projectId: \"9kfzk4em\",\n    dataset: \"blog\" || 0,\n    apiVersion: \"2022-06-26\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE1BQU0sR0FBRztJQUNYQyxTQUFTLEVBQUVDLFVBQXlDO0lBQ3BERyxPQUFPLEVBQUVILE1BQXNDLElBQUksQ0FBWTtJQUMvREssVUFBVSxFQUFFLFlBQVk7Q0FDekI7QUFDRCxpRUFBZVAsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29uZmlnLmpzPzdkYjMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29uZmlnID0ge1xuICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQsXG4gICAgZGF0YXNldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQgfHwgXCJwcm9kdWN0aW9uXCIsXG4gICAgYXBpVmVyc2lvbjogXCIyMDIyLTA2LTI2XCIsXG4gIH07XG4gIGV4cG9ydCBkZWZhdWx0IGNvbmZpZzsiXSwibmFtZXMiOlsiY29uZmlnIiwicHJvamVjdElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIiwiZGF0YXNldCIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwiYXBpVmVyc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/config.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/login.js"));
module.exports = __webpack_exports__;

})();
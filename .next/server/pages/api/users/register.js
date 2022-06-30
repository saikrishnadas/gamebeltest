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
exports.id = "pages/api/users/register";
exports.ids = ["pages/api/users/register"];
exports.modules = {

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./pages/api/users/register.js":
/*!*************************************!*\
  !*** ./pages/api/users/register.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/config */ \"(api)/./utils/config.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/auth */ \"(api)/./utils/auth.js\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../sanity */ \"(api)/./sanity.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nhandler.post(async (req, res)=>{\n    const projectId = \"9kfzk4em\";\n    const dataset = \"blog\";\n    const tokenWithWriteAccess = process.env.SANITY_API_TOKEN;\n    const createMutations = [\n        {\n            create: {\n                _type: \"user\",\n                name: req.body.name,\n                email: req.body.email,\n                password: bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hashSync(req.body.password)\n            }\n        }, \n    ];\n    const existUser = await _sanity__WEBPACK_IMPORTED_MODULE_5__.sanityClient.fetch(`*[_type == \"user\" && email == $email][0]`, {\n        email: req.body.email\n    });\n    if (existUser) {\n        return res.status(401).send({\n            message: \"Email aleardy exists\"\n        });\n    }\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`, {\n        mutations: createMutations\n    }, {\n        headers: {\n            \"Content-type\": \"application/json\",\n            Authorization: `Bearer ${tokenWithWriteAccess}`\n        }\n    });\n    const userId = data.results[0].id;\n    const user = {\n        _id: userId,\n        name: req.body.name,\n        email: req.body.email\n    };\n    const token = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_4__.signToken)(user);\n    res.send({\n        ...user,\n        token\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvcmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0E7QUFDSjtBQUNtQjtBQUNBO0FBQ0Q7QUFFNUMsTUFBTU0sT0FBTyxHQUFHTix3REFBRSxFQUFFO0FBRXBCTSxPQUFPLENBQUNDLElBQUksQ0FBQyxPQUFNQyxHQUFHLEVBQUNDLEdBQUcsR0FBSztJQUMzQixNQUFNQyxTQUFTLEdBQUdDLFVBQXlDO0lBQzNELE1BQU1HLE9BQU8sR0FBR0gsTUFBc0M7SUFDdEQsTUFBTUssb0JBQW9CLEdBQUdMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxnQkFBZ0I7SUFFekQsTUFBTUMsZUFBZSxHQUFHO1FBQ3BCO1lBQ0VDLE1BQU0sRUFBRTtnQkFDTkMsS0FBSyxFQUFFLE1BQU07Z0JBQ2JDLElBQUksRUFBRWIsR0FBRyxDQUFDYyxJQUFJLENBQUNELElBQUk7Z0JBQ25CRSxLQUFLLEVBQUVmLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDQyxLQUFLO2dCQUNyQkMsUUFBUSxFQUFFdkIsd0RBQWUsQ0FBQ08sR0FBRyxDQUFDYyxJQUFJLENBQUNFLFFBQVEsQ0FBQzthQUM3QztTQUNGO0tBQ0Y7SUFFRCxNQUFNRSxTQUFTLEdBQUcsTUFBTXJCLHVEQUFrQixDQUN4QyxDQUFDLHdDQUF3QyxDQUFDLEVBQzFDO1FBQ0VrQixLQUFLLEVBQUVmLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDQyxLQUFLO0tBQ3RCLENBQ0Y7SUFDRCxJQUFJRyxTQUFTLEVBQUU7UUFDYixPQUFPakIsR0FBRyxDQUFDbUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLHNCQUFzQjtTQUFFLENBQUMsQ0FBQztLQUNsRTtJQUVELE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUcsTUFBTTdCLGlEQUFVLENBQy9CLENBQUMsUUFBUSxFQUFFUSxTQUFTLENBQUMsOEJBQThCLEVBQUVJLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFDN0U7UUFBRWtCLFNBQVMsRUFBRWQsZUFBZTtLQUFFLEVBQzlCO1FBQ0VlLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxrQkFBa0I7WUFDbENDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRWxCLG9CQUFvQixDQUFDLENBQUM7U0FDaEQ7S0FDRixDQUNGO0lBRUQsTUFBTW1CLE1BQU0sR0FBR0osSUFBSSxDQUFDSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLEVBQUU7SUFDckMsTUFBTUMsSUFBSSxHQUFHO1FBQ1hDLEdBQUcsRUFBRUosTUFBTTtRQUNYZCxJQUFJLEVBQUViLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDRCxJQUFJO1FBQ25CRSxLQUFLLEVBQUVmLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDQyxLQUFLO0tBQ3RCO0lBQ0QsTUFBTWlCLEtBQUssR0FBR3BDLHNEQUFTLENBQUNrQyxJQUFJLENBQUM7SUFDN0I3QixHQUFHLENBQUNvQixJQUFJLENBQUM7UUFBRSxHQUFHUyxJQUFJO1FBQUVFLEtBQUs7S0FBRSxDQUFDLENBQUM7Q0FDOUIsQ0FBQztBQUVGLGlFQUFlbEMsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3VzZXJzL3JlZ2lzdGVyLmpzPzUwNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5jIGZyb20gJ25leHQtY29ubmVjdCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NvbmZpZ1wiO1xuaW1wb3J0IHtzaWduVG9rZW59IGZyb20gXCIuLi8uLi8uLi91dGlscy9hdXRoXCJcbmltcG9ydCB7c2FuaXR5Q2xpZW50fSBmcm9tIFwiLi4vLi4vLi4vc2FuaXR5XCJcblxuY29uc3QgaGFuZGxlciA9IG5jKCk7XG5cbmhhbmRsZXIucG9zdChhc3luYyhyZXEscmVzKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdElkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQ7XG4gICAgY29uc3QgZGF0YXNldCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUO1xuICAgIGNvbnN0IHRva2VuV2l0aFdyaXRlQWNjZXNzID0gcHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9UT0tFTjtcblxuICAgIGNvbnN0IGNyZWF0ZU11dGF0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgX3R5cGU6ICd1c2VyJyxcbiAgICAgICAgICAgIG5hbWU6IHJlcS5ib2R5Lm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogYmNyeXB0Lmhhc2hTeW5jKHJlcS5ib2R5LnBhc3N3b3JkKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdO1xuXG4gICAgICBjb25zdCBleGlzdFVzZXIgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2goXG4gICAgICAgIGAqW190eXBlID09IFwidXNlclwiICYmIGVtYWlsID09ICRlbWFpbF1bMF1gLFxuICAgICAgICB7XG4gICAgICAgICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgaWYgKGV4aXN0VXNlcikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnRW1haWwgYWxlYXJkeSBleGlzdHMnIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIGBodHRwczovLyR7cHJvamVjdElkfS5hcGkuc2FuaXR5LmlvL3YxL2RhdGEvbXV0YXRlLyR7ZGF0YXNldH0/cmV0dXJuSWRzPXRydWVgLFxuICAgICAgICB7IG11dGF0aW9uczogY3JlYXRlTXV0YXRpb25zIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VuV2l0aFdyaXRlQWNjZXNzfWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgY29uc3QgdXNlcklkID0gZGF0YS5yZXN1bHRzWzBdLmlkO1xuICBjb25zdCB1c2VyID0ge1xuICAgIF9pZDogdXNlcklkLFxuICAgIG5hbWU6IHJlcS5ib2R5Lm5hbWUsXG4gICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxuICB9O1xuICBjb25zdCB0b2tlbiA9IHNpZ25Ub2tlbih1c2VyKTtcbiAgcmVzLnNlbmQoeyAuLi51c2VyLCB0b2tlbiB9KTtcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIm5jIiwiYmNyeXB0IiwiYXhpb3MiLCJjb25maWciLCJzaWduVG9rZW4iLCJzYW5pdHlDbGllbnQiLCJoYW5kbGVyIiwicG9zdCIsInJlcSIsInJlcyIsInByb2plY3RJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCIsImRhdGFzZXQiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsInRva2VuV2l0aFdyaXRlQWNjZXNzIiwiU0FOSVRZX0FQSV9UT0tFTiIsImNyZWF0ZU11dGF0aW9ucyIsImNyZWF0ZSIsIl90eXBlIiwibmFtZSIsImJvZHkiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFzaFN5bmMiLCJleGlzdFVzZXIiLCJmZXRjaCIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwiZGF0YSIsIm11dGF0aW9ucyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXNlcklkIiwicmVzdWx0cyIsImlkIiwidXNlciIsIl9pZCIsInRva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/register.js\n");

/***/ }),

/***/ "(api)/./sanity.js":
/*!*******************!*\
  !*** ./sanity.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor),\n/* harmony export */   \"useCurrentUser\": () => (/* binding */ useCurrentUser)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst config = {\n    // Find your Project Id and dataset in `sanity.json` in your studio project\n    dataset: \"blog\" || 0,\n    projectId: \"9kfzk4em\",\n    apiVersion: \"2022-06-26\",\n    useCdn: \"development\" == \"production\"\n};\n//Set up the client for fetching data in the getProps page functions\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);\n//Helper function to generate image url from the asset data\nconst urlFor = (source)=>_sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(config).image(source)\n;\n//Helper function for using the current logged in user account\nconst useCurrentUser = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createCurrentUserHook)(config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zYW5pdHkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHdUI7QUFDZ0M7QUFFOUMsTUFBTUcsTUFBTSxHQUFHO0lBQ3BCLDJFQUEyRTtJQUMzRUMsT0FBTyxFQUFFQyxNQUFzQyxJQUFJLENBQVk7SUFDL0RHLFNBQVMsRUFBRUgsVUFBeUM7SUFDcERLLFVBQVUsRUFBRSxZQUFZO0lBRXhCQyxNQUFNLEVBQUVOLGFBWkMsSUFZdUIsWUFBWTtDQUM3QyxDQUFDO0FBRUYsb0VBQW9FO0FBQzdELE1BQU1PLFlBQVksR0FBR1gseURBQVksQ0FBQ0UsTUFBTSxDQUFDLENBQUM7QUFFakQsMkRBQTJEO0FBQ3BELE1BQU1VLE1BQU0sR0FBRyxDQUFDQyxNQUFNLEdBQUtaLHdEQUFxQixDQUFDQyxNQUFNLENBQUMsQ0FBQ1ksS0FBSyxDQUFDRCxNQUFNLENBQUM7QUFBQSxDQUFDO0FBRTlFLDhEQUE4RDtBQUN2RCxNQUFNRSxjQUFjLEdBQUdoQixrRUFBcUIsQ0FBQ0csTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYW5pdHkuanM/ODVkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIGNyZWF0ZUN1cnJlbnRVc2VySG9vayxcbiAgICBjcmVhdGVDbGllbnQsXG4gIH0gZnJvbSBcIm5leHQtc2FuaXR5XCI7XG4gIGltcG9ydCBjcmVhdGVJbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG4gIFxuICBleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIC8vIEZpbmQgeW91ciBQcm9qZWN0IElkIGFuZCBkYXRhc2V0IGluIGBzYW5pdHkuanNvbmAgaW4geW91ciBzdHVkaW8gcHJvamVjdFxuICAgIGRhdGFzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIHx8IFwicHJvZHVjdGlvblwiLFxuICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQsXG4gICAgYXBpVmVyc2lvbjogXCIyMDIyLTA2LTI2XCIsXG4gIFxuICAgIHVzZUNkbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJwcm9kdWN0aW9uXCIsXG4gIH07XG4gIFxuICAvL1NldCB1cCB0aGUgY2xpZW50IGZvciBmZXRjaGluZyBkYXRhIGluIHRoZSBnZXRQcm9wcyBwYWdlIGZ1bmN0aW9uc1xuICBleHBvcnQgY29uc3Qgc2FuaXR5Q2xpZW50ID0gY3JlYXRlQ2xpZW50KGNvbmZpZyk7XG4gIFxuICAvL0hlbHBlciBmdW5jdGlvbiB0byBnZW5lcmF0ZSBpbWFnZSB1cmwgZnJvbSB0aGUgYXNzZXQgZGF0YVxuICBleHBvcnQgY29uc3QgdXJsRm9yID0gKHNvdXJjZSkgPT4gY3JlYXRlSW1hZ2VVcmxCdWlsZGVyKGNvbmZpZykuaW1hZ2Uoc291cmNlKTtcbiAgXG4gIC8vSGVscGVyIGZ1bmN0aW9uIGZvciB1c2luZyB0aGUgY3VycmVudCBsb2dnZWQgaW4gdXNlciBhY2NvdW50XG4gIGV4cG9ydCBjb25zdCB1c2VDdXJyZW50VXNlciA9IGNyZWF0ZUN1cnJlbnRVc2VySG9vayhjb25maWcpOyJdLCJuYW1lcyI6WyJjcmVhdGVDdXJyZW50VXNlckhvb2siLCJjcmVhdGVDbGllbnQiLCJjcmVhdGVJbWFnZVVybEJ1aWxkZXIiLCJjb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJhcGlWZXJzaW9uIiwidXNlQ2RuIiwic2FuaXR5Q2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJ1c2VDdXJyZW50VXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./sanity.js\n");

/***/ }),

/***/ "(api)/./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signToken\": () => (/* binding */ signToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst signToken = (user)=>{\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(user, process.env.JWT_SECRET, {\n        expiresIn: \"30d\"\n    });\n};\n// const isAuth = async (req, res, next) => {\n//   const { authorization } = req.headers;\n//   if (authorization) {\n//     const token = authorization.slice(7, authorization.length); // BEARER XXX\n//     jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {\n//       if (err) {\n//         res.status(401).send({ message: 'Token is not valid' });\n//       } else {\n//         req.user = decode;\n//         next();\n//       }\n//     });\n//   } else {\n//     res.status(401).send({ message: 'Token is not suppiled' });\n//   }\n// };\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxTQUFTLEdBQUcsQ0FBQ0MsSUFBSSxHQUFLO0lBQzFCLE9BQU9GLHdEQUFRLENBQUNFLElBQUksRUFBRUUsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVUsRUFBRTtRQUM1Q0MsU0FBUyxFQUFFLEtBQUs7S0FDakIsQ0FBQyxDQUFDO0NBQ0o7QUFFRCw2Q0FBNkM7QUFDN0MsMkNBQTJDO0FBQzNDLHlCQUF5QjtBQUN6QixnRkFBZ0Y7QUFDaEYsbUVBQW1FO0FBQ25FLG1CQUFtQjtBQUNuQixtRUFBbUU7QUFDbkUsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLFVBQVU7QUFDVixhQUFhO0FBQ2Isa0VBQWtFO0FBQ2xFLE1BQU07QUFDTixLQUFLO0FBQ2dCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvYXV0aC5qcz9lYjYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuY29uc3Qgc2lnblRva2VuID0gKHVzZXIpID0+IHtcbiAgcmV0dXJuIGp3dC5zaWduKHVzZXIsIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIHtcbiAgICBleHBpcmVzSW46ICczMGQnLFxuICB9KTtcbn07XG5cbi8vIGNvbnN0IGlzQXV0aCA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuLy8gICBjb25zdCB7IGF1dGhvcml6YXRpb24gfSA9IHJlcS5oZWFkZXJzO1xuLy8gICBpZiAoYXV0aG9yaXphdGlvbikge1xuLy8gICAgIGNvbnN0IHRva2VuID0gYXV0aG9yaXphdGlvbi5zbGljZSg3LCBhdXRob3JpemF0aW9uLmxlbmd0aCk7IC8vIEJFQVJFUiBYWFhcbi8vICAgICBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVULCAoZXJyLCBkZWNvZGUpID0+IHtcbi8vICAgICAgIGlmIChlcnIpIHtcbi8vICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVG9rZW4gaXMgbm90IHZhbGlkJyB9KTtcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHJlcS51c2VyID0gZGVjb2RlO1xuLy8gICAgICAgICBuZXh0KCk7XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVG9rZW4gaXMgbm90IHN1cHBpbGVkJyB9KTtcbi8vICAgfVxuLy8gfTtcbmV4cG9ydCB7IHNpZ25Ub2tlbiB9OyJdLCJuYW1lcyI6WyJqd3QiLCJzaWduVG9rZW4iLCJ1c2VyIiwic2lnbiIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/auth.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/register.js"));
module.exports = __webpack_exports__;

})();
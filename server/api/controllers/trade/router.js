"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var express = _interopRequireWildcard(require("express"));

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = express.Router().post('/', _controller.default.updateTrade).post('/new', _controller.default.createTrade).get('/:accesstoken', _controller.default.queryUserTrades).post('/history', _controller.default.queryHistoryTrades);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvdHJhZGUvcm91dGVyLmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJSb3V0ZXIiLCJwb3N0IiwiY29udHJvbGxlciIsInVwZGF0ZVRyYWRlIiwiY3JlYXRlVHJhZGUiLCJnZXQiLCJxdWVyeVVzZXJUcmFkZXMiLCJxdWVyeUhpc3RvcnlUcmFkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O2VBRWVBLE9BQU8sQ0FDbkJDLE1BRFksR0FFWkMsSUFGWSxDQUVQLEdBRk8sRUFFRkMsb0JBQVdDLFdBRlQsRUFHWkYsSUFIWSxDQUdQLE1BSE8sRUFHQ0Msb0JBQVdFLFdBSFosRUFJWkMsR0FKWSxDQUlSLGVBSlEsRUFJU0gsb0JBQVdJLGVBSnBCLEVBS1pMLElBTFksQ0FLUCxVQUxPLEVBS0tDLG9CQUFXSyxrQkFMaEIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHByZXNzXHJcbiAgLlJvdXRlcigpXHJcbiAgLnBvc3QoJy8nLCBjb250cm9sbGVyLnVwZGF0ZVRyYWRlKVxyXG4gIC5wb3N0KCcvbmV3JywgY29udHJvbGxlci5jcmVhdGVUcmFkZSlcclxuICAuZ2V0KCcvOmFjY2Vzc3Rva2VuJywgY29udHJvbGxlci5xdWVyeVVzZXJUcmFkZXMpXHJcbiAgLnBvc3QoJy9oaXN0b3J5JywgY29udHJvbGxlci5xdWVyeUhpc3RvcnlUcmFkZXMpIl19
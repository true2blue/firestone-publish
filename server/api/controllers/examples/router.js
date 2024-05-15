"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var express = _interopRequireWildcard(require("express"));

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = express.Router().post('/', _controller.default.create).get('/', _controller.default.all).get('/:id', _controller.default.byId);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvZXhhbXBsZXMvcm91dGVyLmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJSb3V0ZXIiLCJwb3N0IiwiY29udHJvbGxlciIsImNyZWF0ZSIsImdldCIsImFsbCIsImJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O2VBRWVBLE9BQU8sQ0FDbkJDLE1BRFksR0FFWkMsSUFGWSxDQUVQLEdBRk8sRUFFRkMsb0JBQVdDLE1BRlQsRUFHWkMsR0FIWSxDQUdSLEdBSFEsRUFHSEYsb0JBQVdHLEdBSFIsRUFJWkQsR0FKWSxDQUlSLE1BSlEsRUFJQUYsb0JBQVdJLElBSlgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBleHByZXNzXG4gIC5Sb3V0ZXIoKVxuICAucG9zdCgnLycsIGNvbnRyb2xsZXIuY3JlYXRlKVxuICAuZ2V0KCcvJywgY29udHJvbGxlci5hbGwpXG4gIC5nZXQoJy86aWQnLCBjb250cm9sbGVyLmJ5SWQpO1xuIl19
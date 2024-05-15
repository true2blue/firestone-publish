"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var express = _interopRequireWildcard(require("express"));

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = express.Router().get('/:accesstoken', _controller.default.getConfig).post('/', _controller.default.saveConfig);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvY29uZmlnbW9ja3Mvcm91dGVyLmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJSb3V0ZXIiLCJnZXQiLCJjb250cm9sbGVyIiwiZ2V0Q29uZmlnIiwicG9zdCIsInNhdmVDb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O2VBRWVBLE9BQU8sQ0FDbkJDLE1BRFksR0FFWkMsR0FGWSxDQUVSLGVBRlEsRUFFU0Msb0JBQVdDLFNBRnBCLEVBR1pDLElBSFksQ0FHUCxHQUhPLEVBR0ZGLG9CQUFXRyxVQUhULEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXhwcmVzc1xyXG4gIC5Sb3V0ZXIoKVxyXG4gIC5nZXQoJy86YWNjZXNzdG9rZW4nLCBjb250cm9sbGVyLmdldENvbmZpZylcclxuICAucG9zdCgnLycsIGNvbnRyb2xsZXIuc2F2ZUNvbmZpZykiXX0=
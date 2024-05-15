"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var express = _interopRequireWildcard(require("express"));

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = express.Router().post('/', _controller.default.updateMockTrade).post('/new', _controller.default.createMockTrade).get('/:accesstoken', _controller.default.queryUserMockTrades).post('/history', _controller.default.queryHistoryMockTrades);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvbW9ja3RyYWRlL3JvdXRlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwiUm91dGVyIiwicG9zdCIsImNvbnRyb2xsZXIiLCJ1cGRhdGVNb2NrVHJhZGUiLCJjcmVhdGVNb2NrVHJhZGUiLCJnZXQiLCJxdWVyeVVzZXJNb2NrVHJhZGVzIiwicXVlcnlIaXN0b3J5TW9ja1RyYWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7ZUFFZUEsT0FBTyxDQUNuQkMsTUFEWSxHQUVaQyxJQUZZLENBRVAsR0FGTyxFQUVGQyxvQkFBV0MsZUFGVCxFQUdaRixJQUhZLENBR1AsTUFITyxFQUdDQyxvQkFBV0UsZUFIWixFQUlaQyxHQUpZLENBSVIsZUFKUSxFQUlTSCxvQkFBV0ksbUJBSnBCLEVBS1pMLElBTFksQ0FLUCxVQUxPLEVBS0tDLG9CQUFXSyxzQkFMaEIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHByZXNzXHJcbiAgLlJvdXRlcigpXHJcbiAgLnBvc3QoJy8nLCBjb250cm9sbGVyLnVwZGF0ZU1vY2tUcmFkZSlcclxuICAucG9zdCgnL25ldycsIGNvbnRyb2xsZXIuY3JlYXRlTW9ja1RyYWRlKVxyXG4gIC5nZXQoJy86YWNjZXNzdG9rZW4nLCBjb250cm9sbGVyLnF1ZXJ5VXNlck1vY2tUcmFkZXMpXHJcbiAgLnBvc3QoJy9oaXN0b3J5JywgY29udHJvbGxlci5xdWVyeUhpc3RvcnlNb2NrVHJhZGVzKSJdfQ==
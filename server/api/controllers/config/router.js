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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvY29uZmlnL3JvdXRlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwiUm91dGVyIiwiZ2V0IiwiY29udHJvbGxlciIsImdldENvbmZpZyIsInBvc3QiLCJzYXZlQ29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztlQUVlQSxPQUFPLENBQ25CQyxNQURZLEdBRVpDLEdBRlksQ0FFUixlQUZRLEVBRVNDLG9CQUFXQyxTQUZwQixFQUdaQyxJQUhZLENBR1AsR0FITyxFQUdGRixvQkFBV0csVUFIVCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4cHJlc3NcclxuICAuUm91dGVyKClcclxuICAuZ2V0KCcvOmFjY2Vzc3Rva2VuJywgY29udHJvbGxlci5nZXRDb25maWcpXHJcbiAgLnBvc3QoJy8nLCBjb250cm9sbGVyLnNhdmVDb25maWcpIl19
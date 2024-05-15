"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var express = _interopRequireWildcard(require("express"));

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = express.Router().post('/', _controller.default.create).get('/heartbeat/:accesstoken', _controller.default.heart_beat).post('/pingheartbeat', _controller.default.ping_heart_beat).post('/pingdfcfheartbeat', _controller.default.ping_dfcf_heart_beat);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvZmlyZXN0b25lcm9jay9yb3V0ZXIuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsIlJvdXRlciIsInBvc3QiLCJjb250cm9sbGVyIiwiY3JlYXRlIiwiZ2V0IiwiaGVhcnRfYmVhdCIsInBpbmdfaGVhcnRfYmVhdCIsInBpbmdfZGZjZl9oZWFydF9iZWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztlQUVlQSxPQUFPLENBQ25CQyxNQURZLEdBRVpDLElBRlksQ0FFUCxHQUZPLEVBRUZDLG9CQUFXQyxNQUZULEVBR1pDLEdBSFksQ0FHUix5QkFIUSxFQUdtQkYsb0JBQVdHLFVBSDlCLEVBSVpKLElBSlksQ0FJUCxnQkFKTyxFQUlXQyxvQkFBV0ksZUFKdEIsRUFLWkwsSUFMWSxDQUtQLG9CQUxPLEVBS2VDLG9CQUFXSyxvQkFMMUIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHByZXNzXHJcbiAgLlJvdXRlcigpXHJcbiAgLnBvc3QoJy8nLCBjb250cm9sbGVyLmNyZWF0ZSlcclxuICAuZ2V0KCcvaGVhcnRiZWF0LzphY2Nlc3N0b2tlbicsIGNvbnRyb2xsZXIuaGVhcnRfYmVhdClcclxuICAucG9zdCgnL3BpbmdoZWFydGJlYXQnLCBjb250cm9sbGVyLnBpbmdfaGVhcnRfYmVhdClcclxuICAucG9zdCgnL3BpbmdkZmNmaGVhcnRiZWF0JywgY29udHJvbGxlci5waW5nX2RmY2ZfaGVhcnRfYmVhdCkiXX0=
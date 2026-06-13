"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./common/env");

var _server = _interopRequireDefault(require("./common/server"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new _server.default().router(_routes.default).listen(process.env.PORT);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJTZXJ2ZXIiLCJyb3V0ZXIiLCJyb3V0ZXMiLCJsaXN0ZW4iLCJwcm9jZXNzIiwiZW52IiwiUE9SVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O2VBRWUsSUFBSUEsZUFBSixHQUNaQyxNQURZLENBQ0xDLGVBREssRUFFWkMsTUFGWSxDQUVMQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFGUCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2NvbW1vbi9lbnYnO1xyXG5pbXBvcnQgU2VydmVyIGZyb20gJy4vY29tbW9uL3NlcnZlcic7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZlcigpXHJcbiAgLnJvdXRlcihyb3V0ZXMpXHJcbiAgLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JUKTtcclxuIl19
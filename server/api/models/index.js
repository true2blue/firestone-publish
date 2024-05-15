"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.connectDB = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _user = _interopRequireDefault(require("./user"));

var _config = _interopRequireDefault(require("./config"));

var _configMock = _interopRequireDefault(require("./configMock"));

var _trade = _interopRequireDefault(require("./trade"));

var _mockTrade = _interopRequireDefault(require("./mockTrade"));

var _strategy = _interopRequireDefault(require("./strategy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const connectDB = () => {
  return _mongoose.default.connect(process.env.MONGO_URL);
};

exports.connectDB = connectDB;
const models = {
  User: _user.default,
  Config: _config.default,
  ConfigMock: _configMock.default,
  Trade: _trade.default,
  MockTrade: _mockTrade.default,
  Strategy: _strategy.default
};
var _default = models;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvbW9kZWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkwiLCJtb2RlbHMiLCJVc2VyIiwiQ29uZmlnIiwiQ29uZmlnTW9jayIsIlRyYWRlIiwiTW9ja1RyYWRlIiwiU3RyYXRlZ3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLFNBQVMsR0FBRyxNQUFNO0FBQ3BCLFNBQU9DLGtCQUFTQyxPQUFULENBQWlCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FBN0IsQ0FBUDtBQUNILENBRkQ7OztBQUlBLE1BQU1DLE1BQU0sR0FBRztBQUFFQyxFQUFBQSxJQUFJLEVBQUpBLGFBQUY7QUFBUUMsRUFBQUEsTUFBTSxFQUFOQSxlQUFSO0FBQWdCQyxFQUFBQSxVQUFVLEVBQVZBLG1CQUFoQjtBQUE0QkMsRUFBQUEsS0FBSyxFQUFMQSxjQUE1QjtBQUFtQ0MsRUFBQUEsU0FBUyxFQUFUQSxrQkFBbkM7QUFBOENDLEVBQUFBLFFBQVEsRUFBUkE7QUFBOUMsQ0FBZjtlQUdlTixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJ1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnJ1xyXG5pbXBvcnQgQ29uZmlnTW9jayBmcm9tICcuL2NvbmZpZ01vY2snXHJcbmltcG9ydCBUcmFkZSBmcm9tICcuL3RyYWRlJ1xyXG5pbXBvcnQgTW9ja1RyYWRlIGZyb20gJy4vbW9ja1RyYWRlJ1xyXG5pbXBvcnQgU3RyYXRlZ3kgZnJvbSAnLi9zdHJhdGVneSdcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcclxuICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTCk7XHJcbn07XHJcblxyXG5jb25zdCBtb2RlbHMgPSB7IFVzZXIsIENvbmZpZywgQ29uZmlnTW9jaywgVHJhZGUsIE1vY2tUcmFkZSwgU3RyYXRlZ3kgfTtcclxuXHJcbmV4cG9ydCB7IGNvbm5lY3REQiB9O1xyXG5leHBvcnQgZGVmYXVsdCBtb2RlbHM7XHJcbiJdfQ==
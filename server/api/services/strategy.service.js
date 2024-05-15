"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StrategyService = void 0;

var _logger = _interopRequireDefault(require("../../common/logger"));

var _models = _interopRequireDefault(require("../models"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class StrategyService {
  async getStrategies() {
    return _models.default.Strategy.find();
  }

  async getStrategyById(strategyId) {
    return _models.default.Strategy.findById(_mongoose.default.Types.ObjectId(strategyId));
  }

}

exports.StrategyService = StrategyService;

var _default = new StrategyService();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvc2VydmljZXMvc3RyYXRlZ3kuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJTdHJhdGVneVNlcnZpY2UiLCJnZXRTdHJhdGVnaWVzIiwibW9kZWxzIiwiU3RyYXRlZ3kiLCJmaW5kIiwiZ2V0U3RyYXRlZ3lCeUlkIiwic3RyYXRlZ3lJZCIsImZpbmRCeUlkIiwibW9uZ29vc2UiLCJUeXBlcyIsIk9iamVjdElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFTyxNQUFNQSxlQUFOLENBQXFCO0FBRXhCLFFBQU1DLGFBQU4sR0FBcUI7QUFDakIsV0FBT0MsZ0JBQU9DLFFBQVAsQ0FBZ0JDLElBQWhCLEVBQVA7QUFDSDs7QUFFRCxRQUFNQyxlQUFOLENBQXNCQyxVQUF0QixFQUFpQztBQUM3QixXQUFPSixnQkFBT0MsUUFBUCxDQUFnQkksUUFBaEIsQ0FBeUJDLGtCQUFTQyxLQUFULENBQWVDLFFBQWYsQ0FBd0JKLFVBQXhCLENBQXpCLENBQVA7QUFDSDs7QUFSdUI7Ozs7ZUFXYixJQUFJTixlQUFKLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbCBmcm9tICcuLi8uLi9jb21tb24vbG9nZ2VyJztcclxuaW1wb3J0IG1vZGVscyBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5leHBvcnQgY2xhc3MgU3RyYXRlZ3lTZXJ2aWNle1xyXG5cclxuICAgIGFzeW5jIGdldFN0cmF0ZWdpZXMoKXtcclxuICAgICAgICByZXR1cm4gbW9kZWxzLlN0cmF0ZWd5LmZpbmQoKTtcclxuICAgIH0gIFxyXG4gICAgXHJcbiAgICBhc3luYyBnZXRTdHJhdGVneUJ5SWQoc3RyYXRlZ3lJZCl7XHJcbiAgICAgICAgcmV0dXJuIG1vZGVscy5TdHJhdGVneS5maW5kQnlJZChtb25nb29zZS5UeXBlcy5PYmplY3RJZChzdHJhdGVneUlkKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBTdHJhdGVneVNlcnZpY2UoKTsiXX0=
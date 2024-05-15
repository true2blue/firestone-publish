"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _logger = _interopRequireDefault(require("../../common/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const strategySchema = new _mongoose.default.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  url: {
    type: String
  },
  op: {
    type: String
  },
  parameters: {
    type: Object
  }
});

const strategy = _mongoose.default.model('Strategy', strategySchema);

var _default = strategy;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvbW9kZWxzL3N0cmF0ZWd5LmpzIl0sIm5hbWVzIjpbInN0cmF0ZWd5U2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsImRlc2NyaXB0aW9uIiwidXJsIiwib3AiLCJwYXJhbWV0ZXJzIiwiT2JqZWN0Iiwic3RyYXRlZ3kiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLElBQUlDLGtCQUFTQyxNQUFiLENBQW9CO0FBQ3ZDQyxFQUFBQSxJQUFJLEVBQUU7QUFDRkMsSUFBQUEsSUFBSSxFQUFFQztBQURKLEdBRGlDO0FBSXZDQyxFQUFBQSxXQUFXLEVBQUU7QUFDVEYsSUFBQUEsSUFBSSxFQUFFQztBQURHLEdBSjBCO0FBT3ZDRSxFQUFBQSxHQUFHLEVBQUU7QUFDREgsSUFBQUEsSUFBSSxFQUFFQztBQURMLEdBUGtDO0FBVXZDRyxFQUFBQSxFQUFFLEVBQUU7QUFDQUosSUFBQUEsSUFBSSxFQUFFQztBQUROLEdBVm1DO0FBYXZDSSxFQUFBQSxVQUFVLEVBQUU7QUFDUkwsSUFBQUEsSUFBSSxFQUFFTTtBQURFO0FBYjJCLENBQXBCLENBQXZCOztBQWtCQSxNQUFNQyxRQUFRLEdBQUdWLGtCQUFTVyxLQUFULENBQWUsVUFBZixFQUEyQlosY0FBM0IsQ0FBakI7O2VBRWVXLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcbmltcG9ydCBsIGZyb20gJy4uLy4uL2NvbW1vbi9sb2dnZXInXHJcblxyXG5jb25zdCBzdHJhdGVneVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgbmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdXJsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgb3A6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBwYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3Qgc3RyYXRlZ3kgPSBtb25nb29zZS5tb2RlbCgnU3RyYXRlZ3knLCBzdHJhdGVneVNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHJhdGVneTsiXX0=
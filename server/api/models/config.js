"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _logger = _interopRequireDefault(require("../../common/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const configSchema = new _mongoose.default.Schema({
  maxBuyNum: {
    type: Number
  },
  curBuyNum: {
    type: Number,
    default: 0
  },
  cookie: {
    type: String
  },
  validatekey: {
    type: String
  },
  gddm: {
    type: String
  },
  monitor_concept: {
    type: Array
  },
  userId: {
    type: _mongoose.default.Schema.Types.ObjectId
  }
});

configSchema.statics.findByUserId = async function (userId) {
  _logger.default.info(`find the config ${userId}`);

  return this.findOne({
    userId: _mongoose.default.Types.ObjectId(userId)
  });
};

const Config = _mongoose.default.model('Config', configSchema);

var _default = Config;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvbW9kZWxzL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJjb25maWdTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsIm1heEJ1eU51bSIsInR5cGUiLCJOdW1iZXIiLCJjdXJCdXlOdW0iLCJkZWZhdWx0IiwiY29va2llIiwiU3RyaW5nIiwidmFsaWRhdGVrZXkiLCJnZGRtIiwibW9uaXRvcl9jb25jZXB0IiwiQXJyYXkiLCJ1c2VySWQiLCJUeXBlcyIsIk9iamVjdElkIiwic3RhdGljcyIsImZpbmRCeVVzZXJJZCIsImwiLCJpbmZvIiwiZmluZE9uZSIsIkNvbmZpZyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsSUFBSUMsa0JBQVNDLE1BQWIsQ0FBb0I7QUFDckNDLEVBQUFBLFNBQVMsRUFBRTtBQUNQQyxJQUFBQSxJQUFJLEVBQUVDO0FBREMsR0FEMEI7QUFJckNDLEVBQUFBLFNBQVMsRUFBRTtBQUNQRixJQUFBQSxJQUFJLEVBQUVDLE1BREM7QUFFUEUsSUFBQUEsT0FBTyxFQUFFO0FBRkYsR0FKMEI7QUFRckNDLEVBQUFBLE1BQU0sRUFBRTtBQUNKSixJQUFBQSxJQUFJLEVBQUVLO0FBREYsR0FSNkI7QUFXckNDLEVBQUFBLFdBQVcsRUFBRTtBQUNUTixJQUFBQSxJQUFJLEVBQUVLO0FBREcsR0FYd0I7QUFjckNFLEVBQUFBLElBQUksRUFBQztBQUNEUCxJQUFBQSxJQUFJLEVBQUVLO0FBREwsR0FkZ0M7QUFpQnJDRyxFQUFBQSxlQUFlLEVBQUU7QUFDYlIsSUFBQUEsSUFBSSxFQUFFUztBQURPLEdBakJvQjtBQW9CckNDLEVBQUFBLE1BQU0sRUFBRTtBQUNKVixJQUFBQSxJQUFJLEVBQUVILGtCQUFTQyxNQUFULENBQWdCYSxLQUFoQixDQUFzQkM7QUFEeEI7QUFwQjZCLENBQXBCLENBQXJCOztBQXlCQWhCLFlBQVksQ0FBQ2lCLE9BQWIsQ0FBcUJDLFlBQXJCLEdBQW9DLGdCQUFnQkosTUFBaEIsRUFBd0I7QUFDeERLLGtCQUFFQyxJQUFGLENBQVEsbUJBQWtCTixNQUFPLEVBQWpDOztBQUNBLFNBQU8sS0FBS08sT0FBTCxDQUFhO0FBQ2hCUCxJQUFBQSxNQUFNLEVBQUViLGtCQUFTYyxLQUFULENBQWVDLFFBQWYsQ0FBd0JGLE1BQXhCO0FBRFEsR0FBYixDQUFQO0FBR0gsQ0FMRDs7QUFPQSxNQUFNUSxNQUFNLEdBQUdyQixrQkFBU3NCLEtBQVQsQ0FBZSxRQUFmLEVBQXlCdkIsWUFBekIsQ0FBZjs7ZUFFZXNCLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcbmltcG9ydCBsIGZyb20gJy4uLy4uL2NvbW1vbi9sb2dnZXInO1xyXG5cclxuY29uc3QgY29uZmlnU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBtYXhCdXlOdW06IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXJcclxuICAgIH0sXHJcbiAgICBjdXJCdXlOdW06IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgZGVmYXVsdDogMFxyXG4gICAgfSxcclxuICAgIGNvb2tpZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIHZhbGlkYXRla2V5OiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgZ2RkbTp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgbW9uaXRvcl9jb25jZXB0OiB7XHJcbiAgICAgICAgdHlwZTogQXJyYXlcclxuICAgIH0sXHJcbiAgICB1c2VySWQ6IHtcclxuICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWRcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25maWdTY2hlbWEuc3RhdGljcy5maW5kQnlVc2VySWQgPSBhc3luYyBmdW5jdGlvbiAodXNlcklkKSB7XHJcbiAgICBsLmluZm8oYGZpbmQgdGhlIGNvbmZpZyAke3VzZXJJZH1gKTtcclxuICAgIHJldHVybiB0aGlzLmZpbmRPbmUoe1xyXG4gICAgICAgIHVzZXJJZDogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQodXNlcklkKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IENvbmZpZyA9IG1vbmdvb3NlLm1vZGVsKCdDb25maWcnLCBjb25maWdTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnOyJdfQ==
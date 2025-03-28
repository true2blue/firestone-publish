"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _logger = _interopRequireDefault(require("../../common/logger"));

var _os = require("os");

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
  hgddm: {
    type: String
  },
  delta: {
    type: Number,
    default: 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvbW9kZWxzL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJjb25maWdTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsIm1heEJ1eU51bSIsInR5cGUiLCJOdW1iZXIiLCJjdXJCdXlOdW0iLCJkZWZhdWx0IiwiY29va2llIiwiU3RyaW5nIiwidmFsaWRhdGVrZXkiLCJnZGRtIiwiaGdkZG0iLCJkZWx0YSIsIm1vbml0b3JfY29uY2VwdCIsIkFycmF5IiwidXNlcklkIiwiVHlwZXMiLCJPYmplY3RJZCIsInN0YXRpY3MiLCJmaW5kQnlVc2VySWQiLCJsIiwiaW5mbyIsImZpbmRPbmUiLCJDb25maWciLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLElBQUlDLGtCQUFTQyxNQUFiLENBQW9CO0FBQ3ZDQyxFQUFBQSxTQUFTLEVBQUU7QUFDVEMsSUFBQUEsSUFBSSxFQUFFQztBQURHLEdBRDRCO0FBSXZDQyxFQUFBQSxTQUFTLEVBQUU7QUFDVEYsSUFBQUEsSUFBSSxFQUFFQyxNQURHO0FBRVRFLElBQUFBLE9BQU8sRUFBRTtBQUZBLEdBSjRCO0FBUXZDQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkosSUFBQUEsSUFBSSxFQUFFSztBQURBLEdBUitCO0FBV3ZDQyxFQUFBQSxXQUFXLEVBQUU7QUFDWE4sSUFBQUEsSUFBSSxFQUFFSztBQURLLEdBWDBCO0FBY3ZDRSxFQUFBQSxJQUFJLEVBQUU7QUFDSlAsSUFBQUEsSUFBSSxFQUFFSztBQURGLEdBZGlDO0FBaUJ2Q0csRUFBQUEsS0FBSyxFQUFFO0FBQ0xSLElBQUFBLElBQUksRUFBRUs7QUFERCxHQWpCZ0M7QUFvQnZDSSxFQUFBQSxLQUFLLEVBQUU7QUFDTFQsSUFBQUEsSUFBSSxFQUFFQyxNQUREO0FBRUxFLElBQUFBLE9BQU8sRUFBRTtBQUZKLEdBcEJnQztBQXdCdkNPLEVBQUFBLGVBQWUsRUFBRTtBQUNmVixJQUFBQSxJQUFJLEVBQUVXO0FBRFMsR0F4QnNCO0FBMkJ2Q0MsRUFBQUEsTUFBTSxFQUFFO0FBQ05aLElBQUFBLElBQUksRUFBRUgsa0JBQVNDLE1BQVQsQ0FBZ0JlLEtBQWhCLENBQXNCQztBQUR0QjtBQTNCK0IsQ0FBcEIsQ0FBckI7O0FBZ0NBbEIsWUFBWSxDQUFDbUIsT0FBYixDQUFxQkMsWUFBckIsR0FBb0MsZ0JBQWdCSixNQUFoQixFQUF3QjtBQUMxREssa0JBQUVDLElBQUYsQ0FBUSxtQkFBa0JOLE1BQU8sRUFBakM7O0FBQ0EsU0FBTyxLQUFLTyxPQUFMLENBQWE7QUFDbEJQLElBQUFBLE1BQU0sRUFBRWYsa0JBQVNnQixLQUFULENBQWVDLFFBQWYsQ0FBd0JGLE1BQXhCO0FBRFUsR0FBYixDQUFQO0FBR0QsQ0FMRDs7QUFPQSxNQUFNUSxNQUFNLEdBQUd2QixrQkFBU3dCLEtBQVQsQ0FBZSxRQUFmLEVBQXlCekIsWUFBekIsQ0FBZjs7ZUFFZXdCLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgbCBmcm9tICcuLi8uLi9jb21tb24vbG9nZ2VyJztcclxuaW1wb3J0IHsgdHlwZSB9IGZyb20gJ29zJztcclxuXHJcbmNvbnN0IGNvbmZpZ1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIG1heEJ1eU51bToge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gIH0sXHJcbiAgY3VyQnV5TnVtOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0OiAwLFxyXG4gIH0sXHJcbiAgY29va2llOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgfSxcclxuICB2YWxpZGF0ZWtleToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gIH0sXHJcbiAgZ2RkbToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gIH0sXHJcbiAgaGdkZG06IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICB9LFxyXG4gIGRlbHRhOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0OiAwXHJcbiAgfSxcclxuICBtb25pdG9yX2NvbmNlcHQ6IHtcclxuICAgIHR5cGU6IEFycmF5LFxyXG4gIH0sXHJcbiAgdXNlcklkOiB7XHJcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25maWdTY2hlbWEuc3RhdGljcy5maW5kQnlVc2VySWQgPSBhc3luYyBmdW5jdGlvbiAodXNlcklkKSB7XHJcbiAgbC5pbmZvKGBmaW5kIHRoZSBjb25maWcgJHt1c2VySWR9YCk7XHJcbiAgcmV0dXJuIHRoaXMuZmluZE9uZSh7XHJcbiAgICB1c2VySWQ6IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkKHVzZXJJZCksXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBDb25maWcgPSBtb25nb29zZS5tb2RlbCgnQ29uZmlnJywgY29uZmlnU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpZztcclxuIl19
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("../../common/logger"));

var _examplesDb = _interopRequireDefault(require("./examples.db.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExamplesService {
  all() {
    _logger.default.info(`${this.constructor.name}.all()`);

    return _examplesDb.default.all();
  }

  byId(id) {
    _logger.default.info(`${this.constructor.name}.byId(${id})`);

    return _examplesDb.default.byId(id);
  }

  create(name) {
    return _examplesDb.default.insert(name);
  }

}

var _default = new ExamplesService();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvc2VydmljZXMvZXhhbXBsZXMuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlc1NlcnZpY2UiLCJhbGwiLCJsIiwiaW5mbyIsImNvbnN0cnVjdG9yIiwibmFtZSIsImRiIiwiYnlJZCIsImlkIiwiY3JlYXRlIiwiaW5zZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxlQUFOLENBQXNCO0FBQ3BCQyxFQUFBQSxHQUFHLEdBQUc7QUFDSkMsb0JBQUVDLElBQUYsQ0FBUSxHQUFFLEtBQUtDLFdBQUwsQ0FBaUJDLElBQUssUUFBaEM7O0FBQ0EsV0FBT0Msb0JBQUdMLEdBQUgsRUFBUDtBQUNEOztBQUVETSxFQUFBQSxJQUFJLENBQUNDLEVBQUQsRUFBSztBQUNQTixvQkFBRUMsSUFBRixDQUFRLEdBQUUsS0FBS0MsV0FBTCxDQUFpQkMsSUFBSyxTQUFRRyxFQUFHLEdBQTNDOztBQUNBLFdBQU9GLG9CQUFHQyxJQUFILENBQVFDLEVBQVIsQ0FBUDtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLENBQUNKLElBQUQsRUFBTztBQUNYLFdBQU9DLG9CQUFHSSxNQUFILENBQVVMLElBQVYsQ0FBUDtBQUNEOztBQWJtQjs7ZUFnQlAsSUFBSUwsZUFBSixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGwgZnJvbSAnLi4vLi4vY29tbW9uL2xvZ2dlcic7XHJcbmltcG9ydCBkYiBmcm9tICcuL2V4YW1wbGVzLmRiLnNlcnZpY2UnO1xyXG5cclxuY2xhc3MgRXhhbXBsZXNTZXJ2aWNlIHtcclxuICBhbGwoKSB7XHJcbiAgICBsLmluZm8oYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfS5hbGwoKWApO1xyXG4gICAgcmV0dXJuIGRiLmFsbCgpO1xyXG4gIH1cclxuXHJcbiAgYnlJZChpZCkge1xyXG4gICAgbC5pbmZvKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0uYnlJZCgke2lkfSlgKTtcclxuICAgIHJldHVybiBkYi5ieUlkKGlkKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZShuYW1lKSB7XHJcbiAgICByZXR1cm4gZGIuaW5zZXJ0KG5hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEV4YW1wbGVzU2VydmljZSgpO1xyXG4iXX0=
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ConfigController = void 0;

var _config = _interopRequireDefault(require("../../services/config.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ConfigController {
  getConfig(req, res) {
    _config.default.getConfig(req.params.accesstoken).then(r => {
      if (r) res.json(r);else res.json({});
    }, err => {
      res.json({
        error: err ? err.toString() : 'get config failed'
      });
    });
  }

  saveConfig(req, res) {
    _config.default.saveConfig(req.body.accesstoken, req.body.update).then(r => {
      if (r) {
        res.json(r);
      } else {
        _config.default.createConfig(req.body.accesstoken, req.body.update).then(config => {
          if (config) {
            res.json(config);
          } else res.json({});
        }, err => {
          res.json({
            error: err ? err.toString() : 'create config failed'
          });
        });
      }
    }, err => {
      res.json({
        error: err ? err.toString() : 'update config failed'
      });
    });
  }

}

exports.ConfigController = ConfigController;

var _default = new ConfigController();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvY29uZmlnL2NvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiQ29uZmlnQ29udHJvbGxlciIsImdldENvbmZpZyIsInJlcSIsInJlcyIsImNvbmZpZ1NlcnZpY2UiLCJwYXJhbXMiLCJhY2Nlc3N0b2tlbiIsInRoZW4iLCJyIiwianNvbiIsImVyciIsImVycm9yIiwidG9TdHJpbmciLCJzYXZlQ29uZmlnIiwiYm9keSIsInVwZGF0ZSIsImNyZWF0ZUNvbmZpZyIsImNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRU8sTUFBTUEsZ0JBQU4sQ0FBc0I7QUFFekJDLEVBQUFBLFNBQVMsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVc7QUFDaEJDLG9CQUFjSCxTQUFkLENBQXdCQyxHQUFHLENBQUNHLE1BQUosQ0FBV0MsV0FBbkMsRUFBZ0RDLElBQWhELENBQXFEQyxDQUFDLElBQUk7QUFDdEQsVUFBR0EsQ0FBSCxFQUFNTCxHQUFHLENBQUNNLElBQUosQ0FBU0QsQ0FBVCxFQUFOLEtBQ0tMLEdBQUcsQ0FBQ00sSUFBSixDQUFTLEVBQVQ7QUFDUixLQUhELEVBR0lDLEdBQUQsSUFBUztBQUNSUCxNQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBUztBQUFDRSxRQUFBQSxLQUFLLEVBQUdELEdBQUcsR0FBR0EsR0FBRyxDQUFDRSxRQUFKLEVBQUgsR0FBbUI7QUFBL0IsT0FBVDtBQUNILEtBTEQ7QUFNSDs7QUFFREMsRUFBQUEsVUFBVSxDQUFDWCxHQUFELEVBQU1DLEdBQU4sRUFBVztBQUNqQkMsb0JBQWNTLFVBQWQsQ0FBeUJYLEdBQUcsQ0FBQ1ksSUFBSixDQUFTUixXQUFsQyxFQUErQ0osR0FBRyxDQUFDWSxJQUFKLENBQVNDLE1BQXhELEVBQWdFUixJQUFoRSxDQUFxRUMsQ0FBQyxJQUFJO0FBQ3RFLFVBQUdBLENBQUgsRUFBSztBQUNETCxRQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBU0QsQ0FBVDtBQUNILE9BRkQsTUFHSTtBQUNBSix3QkFBY1ksWUFBZCxDQUEyQmQsR0FBRyxDQUFDWSxJQUFKLENBQVNSLFdBQXBDLEVBQWlESixHQUFHLENBQUNZLElBQUosQ0FBU0MsTUFBMUQsRUFBa0VSLElBQWxFLENBQXVFVSxNQUFNLElBQUk7QUFDN0UsY0FBR0EsTUFBSCxFQUFXO0FBQ1BkLFlBQUFBLEdBQUcsQ0FBQ00sSUFBSixDQUFTUSxNQUFUO0FBQ0gsV0FGRCxNQUdLZCxHQUFHLENBQUNNLElBQUosQ0FBUyxFQUFUO0FBQ1IsU0FMRCxFQUtJQyxHQUFELElBQVM7QUFDUlAsVUFBQUEsR0FBRyxDQUFDTSxJQUFKLENBQVM7QUFBQ0UsWUFBQUEsS0FBSyxFQUFHRCxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0UsUUFBSixFQUFILEdBQW9CO0FBQWhDLFdBQVQ7QUFDSCxTQVBEO0FBUUg7QUFDSixLQWRELEVBY0lGLEdBQUQsSUFBUztBQUNSUCxNQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBUztBQUFDRSxRQUFBQSxLQUFLLEVBQUdELEdBQUcsR0FBR0EsR0FBRyxDQUFDRSxRQUFKLEVBQUgsR0FBb0I7QUFBaEMsT0FBVDtBQUNILEtBaEJEO0FBaUJIOztBQTdCd0I7Ozs7ZUFpQ2QsSUFBSVosZ0JBQUosRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWdTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ0NvbnRyb2xsZXJ7XHJcblxyXG4gICAgZ2V0Q29uZmlnKHJlcSwgcmVzKSB7XHJcbiAgICAgICAgY29uZmlnU2VydmljZS5nZXRDb25maWcocmVxLnBhcmFtcy5hY2Nlc3N0b2tlbikudGhlbihyID0+IHtcclxuICAgICAgICAgICAgaWYocikgcmVzLmpzb24ocik7XHJcbiAgICAgICAgICAgIGVsc2UgcmVzLmpzb24oe30pO1xyXG4gICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgcmVzLmpzb24oe2Vycm9yIDogZXJyID8gZXJyLnRvU3RyaW5nKCk6ICdnZXQgY29uZmlnIGZhaWxlZCd9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQ29uZmlnKHJlcSwgcmVzKSB7XHJcbiAgICAgICAgY29uZmlnU2VydmljZS5zYXZlQ29uZmlnKHJlcS5ib2R5LmFjY2Vzc3Rva2VuLCByZXEuYm9keS51cGRhdGUpLnRoZW4ociA9PiB7XHJcbiAgICAgICAgICAgIGlmKHIpe1xyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24ocik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbmZpZ1NlcnZpY2UuY3JlYXRlQ29uZmlnKHJlcS5ib2R5LmFjY2Vzc3Rva2VuLCByZXEuYm9keS51cGRhdGUpLnRoZW4oY29uZmlnID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oY29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXMuanNvbih7fSk7XHJcbiAgICAgICAgICAgICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oe2Vycm9yIDogZXJyID8gZXJyLnRvU3RyaW5nKCkgOiAnY3JlYXRlIGNvbmZpZyBmYWlsZWQnfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgcmVzLmpzb24oe2Vycm9yIDogZXJyID8gZXJyLnRvU3RyaW5nKCkgOiAndXBkYXRlIGNvbmZpZyBmYWlsZWQnfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29uZmlnQ29udHJvbGxlcigpIl19
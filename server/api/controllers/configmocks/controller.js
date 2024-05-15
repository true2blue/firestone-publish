"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ConfigMockController = void 0;

var _configmock = _interopRequireDefault(require("../../services/configmock.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ConfigMockController {
  getConfig(req, res) {
    _configmock.default.getConfig(req.params.accesstoken).then(r => {
      if (r) res.json(r);else res.json({});
    }, err => {
      res.json({
        error: err ? err.toString() : 'get config failed'
      });
    });
  }

  saveConfig(req, res) {
    _configmock.default.saveConfig(req.body.accesstoken, req.body.update).then(r => {
      if (r) {
        _configmock.default.createHeartBeatTimerIfNeed(req.body.accesstoken);

        res.json(r);
      } else {
        _configmock.default.createConfig(req.body.accesstoken, req.body.update).then(config => {
          if (config) {
            _configmock.default.createHeartBeatTimerIfNeed(req.body.accesstoken);

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

exports.ConfigMockController = ConfigMockController;

var _default = new ConfigMockController();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvY29uZmlnbW9ja3MvY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJDb25maWdNb2NrQ29udHJvbGxlciIsImdldENvbmZpZyIsInJlcSIsInJlcyIsImNvbmZpZ01vY2tTZXJ2aWNlIiwicGFyYW1zIiwiYWNjZXNzdG9rZW4iLCJ0aGVuIiwiciIsImpzb24iLCJlcnIiLCJlcnJvciIsInRvU3RyaW5nIiwic2F2ZUNvbmZpZyIsImJvZHkiLCJ1cGRhdGUiLCJjcmVhdGVIZWFydEJlYXRUaW1lcklmTmVlZCIsImNyZWF0ZUNvbmZpZyIsImNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRU8sTUFBTUEsb0JBQU4sQ0FBMEI7QUFFN0JDLEVBQUFBLFNBQVMsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVc7QUFDaEJDLHdCQUFrQkgsU0FBbEIsQ0FBNEJDLEdBQUcsQ0FBQ0csTUFBSixDQUFXQyxXQUF2QyxFQUFvREMsSUFBcEQsQ0FBeURDLENBQUMsSUFBSTtBQUMxRCxVQUFHQSxDQUFILEVBQU1MLEdBQUcsQ0FBQ00sSUFBSixDQUFTRCxDQUFULEVBQU4sS0FDS0wsR0FBRyxDQUFDTSxJQUFKLENBQVMsRUFBVDtBQUNSLEtBSEQsRUFHSUMsR0FBRCxJQUFTO0FBQ1JQLE1BQUFBLEdBQUcsQ0FBQ00sSUFBSixDQUFTO0FBQUNFLFFBQUFBLEtBQUssRUFBR0QsR0FBRyxHQUFHQSxHQUFHLENBQUNFLFFBQUosRUFBSCxHQUFtQjtBQUEvQixPQUFUO0FBQ0gsS0FMRDtBQU1IOztBQUVEQyxFQUFBQSxVQUFVLENBQUNYLEdBQUQsRUFBTUMsR0FBTixFQUFXO0FBQ2pCQyx3QkFBa0JTLFVBQWxCLENBQTZCWCxHQUFHLENBQUNZLElBQUosQ0FBU1IsV0FBdEMsRUFBbURKLEdBQUcsQ0FBQ1ksSUFBSixDQUFTQyxNQUE1RCxFQUFvRVIsSUFBcEUsQ0FBeUVDLENBQUMsSUFBSTtBQUMxRSxVQUFHQSxDQUFILEVBQUs7QUFDREosNEJBQWtCWSwwQkFBbEIsQ0FBNkNkLEdBQUcsQ0FBQ1ksSUFBSixDQUFTUixXQUF0RDs7QUFDQUgsUUFBQUEsR0FBRyxDQUFDTSxJQUFKLENBQVNELENBQVQ7QUFDSCxPQUhELE1BSUk7QUFDQUosNEJBQWtCYSxZQUFsQixDQUErQmYsR0FBRyxDQUFDWSxJQUFKLENBQVNSLFdBQXhDLEVBQXFESixHQUFHLENBQUNZLElBQUosQ0FBU0MsTUFBOUQsRUFBc0VSLElBQXRFLENBQTJFVyxNQUFNLElBQUk7QUFDakYsY0FBR0EsTUFBSCxFQUFXO0FBQ1BkLGdDQUFrQlksMEJBQWxCLENBQTZDZCxHQUFHLENBQUNZLElBQUosQ0FBU1IsV0FBdEQ7O0FBQ0FILFlBQUFBLEdBQUcsQ0FBQ00sSUFBSixDQUFTUyxNQUFUO0FBQ0gsV0FIRCxNQUlLZixHQUFHLENBQUNNLElBQUosQ0FBUyxFQUFUO0FBQ1IsU0FORCxFQU1JQyxHQUFELElBQVM7QUFDUlAsVUFBQUEsR0FBRyxDQUFDTSxJQUFKLENBQVM7QUFBQ0UsWUFBQUEsS0FBSyxFQUFHRCxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0UsUUFBSixFQUFILEdBQW9CO0FBQWhDLFdBQVQ7QUFDSCxTQVJEO0FBU0g7QUFDSixLQWhCRCxFQWdCSUYsR0FBRCxJQUFTO0FBQ1JQLE1BQUFBLEdBQUcsQ0FBQ00sSUFBSixDQUFTO0FBQUNFLFFBQUFBLEtBQUssRUFBR0QsR0FBRyxHQUFHQSxHQUFHLENBQUNFLFFBQUosRUFBSCxHQUFvQjtBQUFoQyxPQUFUO0FBQ0gsS0FsQkQ7QUFtQkg7O0FBL0I0Qjs7OztlQW1DbEIsSUFBSVosb0JBQUosRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWdNb2NrU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25maWdtb2NrLnNlcnZpY2UnXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnTW9ja0NvbnRyb2xsZXJ7XHJcblxyXG4gICAgZ2V0Q29uZmlnKHJlcSwgcmVzKSB7XHJcbiAgICAgICAgY29uZmlnTW9ja1NlcnZpY2UuZ2V0Q29uZmlnKHJlcS5wYXJhbXMuYWNjZXNzdG9rZW4pLnRoZW4ociA9PiB7XHJcbiAgICAgICAgICAgIGlmKHIpIHJlcy5qc29uKHIpO1xyXG4gICAgICAgICAgICBlbHNlIHJlcy5qc29uKHt9KTtcclxuICAgICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKHtlcnJvciA6IGVyciA/IGVyci50b1N0cmluZygpOiAnZ2V0IGNvbmZpZyBmYWlsZWQnfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUNvbmZpZyhyZXEsIHJlcykge1xyXG4gICAgICAgIGNvbmZpZ01vY2tTZXJ2aWNlLnNhdmVDb25maWcocmVxLmJvZHkuYWNjZXNzdG9rZW4sIHJlcS5ib2R5LnVwZGF0ZSkudGhlbihyID0+IHtcclxuICAgICAgICAgICAgaWYocil7XHJcbiAgICAgICAgICAgICAgICBjb25maWdNb2NrU2VydmljZS5jcmVhdGVIZWFydEJlYXRUaW1lcklmTmVlZChyZXEuYm9keS5hY2Nlc3N0b2tlbik7XHJcbiAgICAgICAgICAgICAgICByZXMuanNvbihyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uZmlnTW9ja1NlcnZpY2UuY3JlYXRlQ29uZmlnKHJlcS5ib2R5LmFjY2Vzc3Rva2VuLCByZXEuYm9keS51cGRhdGUpLnRoZW4oY29uZmlnID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnTW9ja1NlcnZpY2UuY3JlYXRlSGVhcnRCZWF0VGltZXJJZk5lZWQocmVxLmJvZHkuYWNjZXNzdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbihjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJlcy5qc29uKHt9KTtcclxuICAgICAgICAgICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbih7ZXJyb3IgOiBlcnIgPyBlcnIudG9TdHJpbmcoKSA6ICdjcmVhdGUgY29uZmlnIGZhaWxlZCd9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICByZXMuanNvbih7ZXJyb3IgOiBlcnIgPyBlcnIudG9TdHJpbmcoKSA6ICd1cGRhdGUgY29uZmlnIGZhaWxlZCd9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBDb25maWdNb2NrQ29udHJvbGxlcigpIl19
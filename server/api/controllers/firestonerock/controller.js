"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FireStoneRockController = void 0;

var _firestonerock = _interopRequireDefault(require("../../services/firestonerock.service"));

var _configmock = _interopRequireDefault(require("../../services/configmock.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FireStoneRockController {
  create(req, res) {
    _firestonerock.default.createNewFirerock(req.body.codes, req.body.tradeId, req.body.isMock).then(r => {
      r ? res.json(r) : res.json({});
    }, err => {
      res.json({
        "error": err ? err.toString() : 'failed to create new firerock'
      });
    });
  }

  ping_heart_beat(req, res) {
    _firestonerock.default.start_heart_beat({
      'Cookie': req.body.cookie
    }).then(data => {
      data ? res.json(data) : res.json({});
    }, err => {
      res.json({
        "error": err ? err.toString() : 'failed to send test heart beat'
      });
    });
  }

  ping_dfcf_heart_beat(req, res) {
    _firestonerock.default.start_heart_beat_dfcf({
      'Cookie': req.body.cookie
    }, req.body.validatekey).then(data => {
      data ? res.json(data) : res.json({});
    }, err => {
      res.json({
        "error": err ? err.toString() : 'failed to send test heart beat'
      });
    });
  } //only use for test


  heart_beat(req, res) {
    _configmock.default.getConfig(req.params.accesstoken).then(r => {
      if (r) {
        _firestonerock.default.start_heart_beat({
          'Cookie': r.cookie
        }).then(data => {
          data ? res.json(data) : res.json({});
        }, err => {
          res.json({
            "error": err ? err.toString() : 'failed to send heart beat'
          });
        });
      } else {
        res.json({
          error: 'no config found, can not run heart beat'
        });
      }
    }, err => {
      res.json({
        error: err ? err.toString() : 'get config failed, can not run heart beat'
      });
    });
  }

}

exports.FireStoneRockController = FireStoneRockController;

var _default = new FireStoneRockController();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvZmlyZXN0b25lcm9jay9jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkZpcmVTdG9uZVJvY2tDb250cm9sbGVyIiwiY3JlYXRlIiwicmVxIiwicmVzIiwiZmlyZXN0b25lcm9ja1NlcnZpY2UiLCJjcmVhdGVOZXdGaXJlcm9jayIsImJvZHkiLCJjb2RlcyIsInRyYWRlSWQiLCJpc01vY2siLCJ0aGVuIiwiciIsImpzb24iLCJlcnIiLCJ0b1N0cmluZyIsInBpbmdfaGVhcnRfYmVhdCIsInN0YXJ0X2hlYXJ0X2JlYXQiLCJjb29raWUiLCJkYXRhIiwicGluZ19kZmNmX2hlYXJ0X2JlYXQiLCJzdGFydF9oZWFydF9iZWF0X2RmY2YiLCJ2YWxpZGF0ZWtleSIsImhlYXJ0X2JlYXQiLCJjb25maWdtb2NrU2VydmljZSIsImdldENvbmZpZyIsInBhcmFtcyIsImFjY2Vzc3Rva2VuIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVPLE1BQU1BLHVCQUFOLENBQThCO0FBRWpDQyxFQUFBQSxNQUFNLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXO0FBQ2JDLDJCQUFxQkMsaUJBQXJCLENBQXVDSCxHQUFHLENBQUNJLElBQUosQ0FBU0MsS0FBaEQsRUFBdURMLEdBQUcsQ0FBQ0ksSUFBSixDQUFTRSxPQUFoRSxFQUF5RU4sR0FBRyxDQUFDSSxJQUFKLENBQVNHLE1BQWxGLEVBQTBGQyxJQUExRixDQUErRkMsQ0FBQyxJQUFJO0FBQ2hHQSxNQUFBQSxDQUFDLEdBQUdSLEdBQUcsQ0FBQ1MsSUFBSixDQUFTRCxDQUFULENBQUgsR0FBaUJSLEdBQUcsQ0FBQ1MsSUFBSixDQUFTLEVBQVQsQ0FBbEI7QUFDSCxLQUZELEVBRUdDLEdBQUcsSUFBSTtBQUNOVixNQUFBQSxHQUFHLENBQUNTLElBQUosQ0FBUztBQUFFLGlCQUFTQyxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsUUFBSixFQUFILEdBQW9CO0FBQWxDLE9BQVQ7QUFDSCxLQUpEO0FBS0g7O0FBRURDLEVBQUFBLGVBQWUsQ0FBQ2IsR0FBRCxFQUFNQyxHQUFOLEVBQVU7QUFDckJDLDJCQUFxQlksZ0JBQXJCLENBQXNDO0FBQUMsZ0JBQVdkLEdBQUcsQ0FBQ0ksSUFBSixDQUFTVztBQUFyQixLQUF0QyxFQUFvRVAsSUFBcEUsQ0FBeUVRLElBQUksSUFBSTtBQUM3RUEsTUFBQUEsSUFBSSxHQUFHZixHQUFHLENBQUNTLElBQUosQ0FBU00sSUFBVCxDQUFILEdBQW9CZixHQUFHLENBQUNTLElBQUosQ0FBUyxFQUFULENBQXhCO0FBQ0gsS0FGRCxFQUVHQyxHQUFHLElBQUk7QUFDTlYsTUFBQUEsR0FBRyxDQUFDUyxJQUFKLENBQVM7QUFBRSxpQkFBU0MsR0FBRyxHQUFHQSxHQUFHLENBQUNDLFFBQUosRUFBSCxHQUFvQjtBQUFsQyxPQUFUO0FBQ0gsS0FKRDtBQUtIOztBQUVESyxFQUFBQSxvQkFBb0IsQ0FBQ2pCLEdBQUQsRUFBTUMsR0FBTixFQUFVO0FBQzFCQywyQkFBcUJnQixxQkFBckIsQ0FBMkM7QUFBQyxnQkFBV2xCLEdBQUcsQ0FBQ0ksSUFBSixDQUFTVztBQUFyQixLQUEzQyxFQUF5RWYsR0FBRyxDQUFDSSxJQUFKLENBQVNlLFdBQWxGLEVBQStGWCxJQUEvRixDQUFvR1EsSUFBSSxJQUFJO0FBQ3hHQSxNQUFBQSxJQUFJLEdBQUdmLEdBQUcsQ0FBQ1MsSUFBSixDQUFTTSxJQUFULENBQUgsR0FBb0JmLEdBQUcsQ0FBQ1MsSUFBSixDQUFTLEVBQVQsQ0FBeEI7QUFDSCxLQUZELEVBRUdDLEdBQUcsSUFBSTtBQUNOVixNQUFBQSxHQUFHLENBQUNTLElBQUosQ0FBUztBQUFFLGlCQUFTQyxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsUUFBSixFQUFILEdBQW9CO0FBQWxDLE9BQVQ7QUFDSCxLQUpEO0FBS0gsR0F4QmdDLENBMEJqQzs7O0FBQ0FRLEVBQUFBLFVBQVUsQ0FBQ3BCLEdBQUQsRUFBTUMsR0FBTixFQUFXO0FBQ2pCb0Isd0JBQWtCQyxTQUFsQixDQUE0QnRCLEdBQUcsQ0FBQ3VCLE1BQUosQ0FBV0MsV0FBdkMsRUFBb0RoQixJQUFwRCxDQUF5REMsQ0FBQyxJQUFJO0FBQzFELFVBQUlBLENBQUosRUFBTztBQUNIUCwrQkFBcUJZLGdCQUFyQixDQUFzQztBQUFDLG9CQUFXTCxDQUFDLENBQUNNO0FBQWQsU0FBdEMsRUFBNkRQLElBQTdELENBQWtFUSxJQUFJLElBQUk7QUFDdEVBLFVBQUFBLElBQUksR0FBR2YsR0FBRyxDQUFDUyxJQUFKLENBQVNNLElBQVQsQ0FBSCxHQUFvQmYsR0FBRyxDQUFDUyxJQUFKLENBQVMsRUFBVCxDQUF4QjtBQUNILFNBRkQsRUFFR0MsR0FBRyxJQUFJO0FBQ05WLFVBQUFBLEdBQUcsQ0FBQ1MsSUFBSixDQUFTO0FBQUUscUJBQVNDLEdBQUcsR0FBR0EsR0FBRyxDQUFDQyxRQUFKLEVBQUgsR0FBb0I7QUFBbEMsV0FBVDtBQUNILFNBSkQ7QUFLSCxPQU5ELE1BT0s7QUFDRFgsUUFBQUEsR0FBRyxDQUFDUyxJQUFKLENBQVM7QUFBRWUsVUFBQUEsS0FBSyxFQUFFO0FBQVQsU0FBVDtBQUNIO0FBQ0osS0FYRCxFQVdJZCxHQUFELElBQVM7QUFDUlYsTUFBQUEsR0FBRyxDQUFDUyxJQUFKLENBQVM7QUFBRWUsUUFBQUEsS0FBSyxFQUFFZCxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsUUFBSixFQUFILEdBQW9CO0FBQWhDLE9BQVQ7QUFDSCxLQWJEO0FBY0g7O0FBMUNnQzs7OztlQThDdEIsSUFBSWQsdUJBQUosRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlc3RvbmVyb2NrU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9maXJlc3RvbmVyb2NrLnNlcnZpY2UnXHJcbmltcG9ydCBjb25maWdtb2NrU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25maWdtb2NrLnNlcnZpY2UnXHJcblxyXG5leHBvcnQgY2xhc3MgRmlyZVN0b25lUm9ja0NvbnRyb2xsZXIge1xyXG5cclxuICAgIGNyZWF0ZShyZXEsIHJlcykge1xyXG4gICAgICAgIGZpcmVzdG9uZXJvY2tTZXJ2aWNlLmNyZWF0ZU5ld0ZpcmVyb2NrKHJlcS5ib2R5LmNvZGVzLCByZXEuYm9keS50cmFkZUlkLCByZXEuYm9keS5pc01vY2spLnRoZW4ociA9PiB7XHJcbiAgICAgICAgICAgIHIgPyByZXMuanNvbihyKSA6IHJlcy5qc29uKHt9KTtcclxuICAgICAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgICAgICByZXMuanNvbih7IFwiZXJyb3JcIjogZXJyID8gZXJyLnRvU3RyaW5nKCkgOiAnZmFpbGVkIHRvIGNyZWF0ZSBuZXcgZmlyZXJvY2snIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBpbmdfaGVhcnRfYmVhdChyZXEsIHJlcyl7XHJcbiAgICAgICAgZmlyZXN0b25lcm9ja1NlcnZpY2Uuc3RhcnRfaGVhcnRfYmVhdCh7J0Nvb2tpZScgOiByZXEuYm9keS5jb29raWV9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBkYXRhID8gcmVzLmpzb24oZGF0YSkgOiByZXMuanNvbih7fSk7XHJcbiAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgcmVzLmpzb24oeyBcImVycm9yXCI6IGVyciA/IGVyci50b1N0cmluZygpIDogJ2ZhaWxlZCB0byBzZW5kIHRlc3QgaGVhcnQgYmVhdCcgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGluZ19kZmNmX2hlYXJ0X2JlYXQocmVxLCByZXMpe1xyXG4gICAgICAgIGZpcmVzdG9uZXJvY2tTZXJ2aWNlLnN0YXJ0X2hlYXJ0X2JlYXRfZGZjZih7J0Nvb2tpZScgOiByZXEuYm9keS5jb29raWV9LCByZXEuYm9keS52YWxpZGF0ZWtleSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgZGF0YSA/IHJlcy5qc29uKGRhdGEpIDogcmVzLmpzb24oe30pO1xyXG4gICAgICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKHsgXCJlcnJvclwiOiBlcnIgPyBlcnIudG9TdHJpbmcoKSA6ICdmYWlsZWQgdG8gc2VuZCB0ZXN0IGhlYXJ0IGJlYXQnIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vb25seSB1c2UgZm9yIHRlc3RcclxuICAgIGhlYXJ0X2JlYXQocmVxLCByZXMpIHtcclxuICAgICAgICBjb25maWdtb2NrU2VydmljZS5nZXRDb25maWcocmVxLnBhcmFtcy5hY2Nlc3N0b2tlbikudGhlbihyID0+IHtcclxuICAgICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgICAgIGZpcmVzdG9uZXJvY2tTZXJ2aWNlLnN0YXJ0X2hlYXJ0X2JlYXQoeydDb29raWUnIDogci5jb29raWV9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPyByZXMuanNvbihkYXRhKSA6IHJlcy5qc29uKHt9KTtcclxuICAgICAgICAgICAgICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oeyBcImVycm9yXCI6IGVyciA/IGVyci50b1N0cmluZygpIDogJ2ZhaWxlZCB0byBzZW5kIGhlYXJ0IGJlYXQnIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuanNvbih7IGVycm9yOiAnbm8gY29uZmlnIGZvdW5kLCBjYW4gbm90IHJ1biBoZWFydCBiZWF0JyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgcmVzLmpzb24oeyBlcnJvcjogZXJyID8gZXJyLnRvU3RyaW5nKCkgOiAnZ2V0IGNvbmZpZyBmYWlsZWQsIGNhbiBub3QgcnVuIGhlYXJ0IGJlYXQnIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEZpcmVTdG9uZVJvY2tDb250cm9sbGVyKCkiXX0=
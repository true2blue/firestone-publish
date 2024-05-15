"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StrategyController = void 0;

var _strategy = _interopRequireWildcard(require("../../services/strategy.service"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class StrategyController {
  getStrategies(req, res) {
    _strategy.default.getStrategies().then(r => {
      if (r) res.json(r);else res.json([]);
    }, err => {
      res.json({
        "error": err ? err.toString() : "failed to query strategies"
      });
    });
  }

  getStrategyById(req, res) {
    _strategy.default.getStrategyById(req.params.strategyId).then(r => {
      if (r) res.json(r);else res.json({});
    }, err => {
      res.json({
        "error": err ? err.toString() : `failed to query the strategy by Id ${req.params.strategyId}`
      });
    });
  }

}

exports.StrategyController = StrategyController;

var _default = new StrategyController();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvc3RyYXRlZ2llcy9jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIlN0cmF0ZWd5Q29udHJvbGxlciIsImdldFN0cmF0ZWdpZXMiLCJyZXEiLCJyZXMiLCJzdHJhdGVneVNlcnZpY2UiLCJ0aGVuIiwiciIsImpzb24iLCJlcnIiLCJ0b1N0cmluZyIsImdldFN0cmF0ZWd5QnlJZCIsInBhcmFtcyIsInN0cmF0ZWd5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLE1BQU1BLGtCQUFOLENBQXdCO0FBRTNCQyxFQUFBQSxhQUFhLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFVO0FBQ25CQyxzQkFBZ0JILGFBQWhCLEdBQWdDSSxJQUFoQyxDQUFxQ0MsQ0FBQyxJQUFJO0FBQ3RDLFVBQUdBLENBQUgsRUFBTUgsR0FBRyxDQUFDSSxJQUFKLENBQVNELENBQVQsRUFBTixLQUNLSCxHQUFHLENBQUNJLElBQUosQ0FBUyxFQUFUO0FBQ1IsS0FIRCxFQUdHQyxHQUFHLElBQUk7QUFDTkwsTUFBQUEsR0FBRyxDQUFDSSxJQUFKLENBQVM7QUFBQyxpQkFBVUMsR0FBRyxHQUFHQSxHQUFHLENBQUNDLFFBQUosRUFBSCxHQUFvQjtBQUFsQyxPQUFUO0FBQ0gsS0FMRDtBQU1IOztBQUVEQyxFQUFBQSxlQUFlLENBQUNSLEdBQUQsRUFBTUMsR0FBTixFQUFVO0FBQ3JCQyxzQkFBZ0JNLGVBQWhCLENBQWdDUixHQUFHLENBQUNTLE1BQUosQ0FBV0MsVUFBM0MsRUFBdURQLElBQXZELENBQTREQyxDQUFDLElBQUk7QUFDN0QsVUFBR0EsQ0FBSCxFQUFNSCxHQUFHLENBQUNJLElBQUosQ0FBU0QsQ0FBVCxFQUFOLEtBQ0tILEdBQUcsQ0FBQ0ksSUFBSixDQUFTLEVBQVQ7QUFDUixLQUhELEVBR0dDLEdBQUcsSUFBSTtBQUNOTCxNQUFBQSxHQUFHLENBQUNJLElBQUosQ0FBUztBQUFDLGlCQUFVQyxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsUUFBSixFQUFILEdBQXFCLHNDQUFxQ1AsR0FBRyxDQUFDUyxNQUFKLENBQVdDLFVBQVc7QUFBOUYsT0FBVDtBQUNILEtBTEQ7QUFNSDs7QUFsQjBCOzs7O2VBc0JoQixJQUFJWixrQkFBSixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0cmF0ZWd5U2VydmljZSwgeyBTdHJhdGVneVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdHJhdGVneS5zZXJ2aWNlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmF0ZWd5Q29udHJvbGxlcntcclxuXHJcbiAgICBnZXRTdHJhdGVnaWVzKHJlcSwgcmVzKXtcclxuICAgICAgICBzdHJhdGVneVNlcnZpY2UuZ2V0U3RyYXRlZ2llcygpLnRoZW4ociA9PiB7XHJcbiAgICAgICAgICAgIGlmKHIpIHJlcy5qc29uKHIpO1xyXG4gICAgICAgICAgICBlbHNlIHJlcy5qc29uKFtdKTtcclxuICAgICAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgICAgICByZXMuanNvbih7XCJlcnJvclwiIDogZXJyID8gZXJyLnRvU3RyaW5nKCkgOiBcImZhaWxlZCB0byBxdWVyeSBzdHJhdGVnaWVzXCJ9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdHJhdGVneUJ5SWQocmVxLCByZXMpe1xyXG4gICAgICAgIHN0cmF0ZWd5U2VydmljZS5nZXRTdHJhdGVneUJ5SWQocmVxLnBhcmFtcy5zdHJhdGVneUlkKS50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICBpZihyKSByZXMuanNvbihyKTtcclxuICAgICAgICAgICAgZWxzZSByZXMuanNvbih7fSk7XHJcbiAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgcmVzLmpzb24oe1wiZXJyb3JcIiA6IGVyciA/IGVyci50b1N0cmluZygpIDogYGZhaWxlZCB0byBxdWVyeSB0aGUgc3RyYXRlZ3kgYnkgSWQgJHtyZXEucGFyYW1zLnN0cmF0ZWd5SWR9YH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0cmF0ZWd5Q29udHJvbGxlcigpIl19
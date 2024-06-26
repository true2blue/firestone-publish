"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Controller = void 0;

var _examples = _interopRequireDefault(require("../../services/examples.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  all(req, res) {
    _examples.default.all().then(r => res.json(r));
  }

  byId(req, res) {
    _examples.default.byId(req.params.id).then(r => {
      if (r) res.json(r);else res.status(404).end();
    });
  }

  create(req, res) {
    _examples.default.create(req.body.name).then(r => res.status(201).location(`/api/v1/examples/${r.id}`).json(r));
  }

}

exports.Controller = Controller;

var _default = new Controller();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvZXhhbXBsZXMvY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiYWxsIiwicmVxIiwicmVzIiwiRXhhbXBsZXNTZXJ2aWNlIiwidGhlbiIsInIiLCJqc29uIiwiYnlJZCIsInBhcmFtcyIsImlkIiwic3RhdHVzIiwiZW5kIiwiY3JlYXRlIiwiYm9keSIsIm5hbWUiLCJsb2NhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRU8sTUFBTUEsVUFBTixDQUFpQjtBQUN0QkMsRUFBQUEsR0FBRyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBVztBQUNaQyxzQkFBZ0JILEdBQWhCLEdBQ0dJLElBREgsQ0FDUUMsQ0FBQyxJQUFJSCxHQUFHLENBQUNJLElBQUosQ0FBU0QsQ0FBVCxDQURiO0FBRUQ7O0FBRURFLEVBQUFBLElBQUksQ0FBQ04sR0FBRCxFQUFNQyxHQUFOLEVBQVc7QUFDYkMsc0JBQ0dJLElBREgsQ0FDUU4sR0FBRyxDQUFDTyxNQUFKLENBQVdDLEVBRG5CLEVBRUdMLElBRkgsQ0FFUUMsQ0FBQyxJQUFJO0FBQ1QsVUFBSUEsQ0FBSixFQUFPSCxHQUFHLENBQUNJLElBQUosQ0FBU0QsQ0FBVCxFQUFQLEtBQ0tILEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ04sS0FMSDtBQU1EOztBQUVEQyxFQUFBQSxNQUFNLENBQUNYLEdBQUQsRUFBTUMsR0FBTixFQUFXO0FBQ2ZDLHNCQUNHUyxNQURILENBQ1VYLEdBQUcsQ0FBQ1ksSUFBSixDQUFTQyxJQURuQixFQUVHVixJQUZILENBRVFDLENBQUMsSUFBSUgsR0FBRyxDQUNYUSxNQURRLENBQ0QsR0FEQyxFQUVSSyxRQUZRLENBRUUsb0JBQW1CVixDQUFDLENBQUNJLEVBQUcsRUFGMUIsRUFHUkgsSUFIUSxDQUdIRCxDQUhHLENBRmI7QUFNRDs7QUF0QnFCOzs7O2VBd0JULElBQUlOLFVBQUosRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlc1NlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvZXhhbXBsZXMuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcbiAgYWxsKHJlcSwgcmVzKSB7XG4gICAgRXhhbXBsZXNTZXJ2aWNlLmFsbCgpXG4gICAgICAudGhlbihyID0+IHJlcy5qc29uKHIpKTtcbiAgfVxuXG4gIGJ5SWQocmVxLCByZXMpIHtcbiAgICBFeGFtcGxlc1NlcnZpY2VcbiAgICAgIC5ieUlkKHJlcS5wYXJhbXMuaWQpXG4gICAgICAudGhlbihyID0+IHtcbiAgICAgICAgaWYgKHIpIHJlcy5qc29uKHIpO1xuICAgICAgICBlbHNlIHJlcy5zdGF0dXMoNDA0KS5lbmQoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlKHJlcSwgcmVzKSB7XG4gICAgRXhhbXBsZXNTZXJ2aWNlXG4gICAgICAuY3JlYXRlKHJlcS5ib2R5Lm5hbWUpXG4gICAgICAudGhlbihyID0+IHJlc1xuICAgICAgICAuc3RhdHVzKDIwMSlcbiAgICAgICAgLmxvY2F0aW9uKGAvYXBpL3YxL2V4YW1wbGVzLyR7ci5pZH1gKVxuICAgICAgICAuanNvbihyKSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBDb250cm9sbGVyKCk7XG4iXX0=
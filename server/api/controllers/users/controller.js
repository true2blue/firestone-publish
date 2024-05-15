"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Controller = void 0;

var _users = _interopRequireDefault(require("../../services/users.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  login(req, res) {
    _users.default.login(req.body.username, req.body.password).then(r => {
      if (r) res.json(r);else res.json({
        "error": "login failed"
      });
    });
  }

  auth(req, res) {
    _users.default.auth(req.headers.accesstoken).then(r => {
      if (r) res.json(r);else res.json({
        "error": "auth failed"
      });
    });
  }

}

exports.Controller = Controller;

var _default = new Controller();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvdXNlcnMvY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwibG9naW4iLCJyZXEiLCJyZXMiLCJVc2Vyc1NlcnZpY2UiLCJib2R5IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInRoZW4iLCJyIiwianNvbiIsImF1dGgiLCJoZWFkZXJzIiwiYWNjZXNzdG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLE1BQU1BLFVBQU4sQ0FBaUI7QUFDcEJDLEVBQUFBLEtBQUssQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVc7QUFDWkMsbUJBQ0dILEtBREgsQ0FDU0MsR0FBRyxDQUFDRyxJQUFKLENBQVNDLFFBRGxCLEVBQzRCSixHQUFHLENBQUNHLElBQUosQ0FBU0UsUUFEckMsRUFFR0MsSUFGSCxDQUVRQyxDQUFDLElBQUk7QUFDVCxVQUFJQSxDQUFKLEVBQU9OLEdBQUcsQ0FBQ08sSUFBSixDQUFTRCxDQUFULEVBQVAsS0FDS04sR0FBRyxDQUFDTyxJQUFKLENBQVM7QUFBQyxpQkFBVTtBQUFYLE9BQVQ7QUFDTixLQUxIO0FBTUQ7O0FBQ0hDLEVBQUFBLElBQUksQ0FBQ1QsR0FBRCxFQUFNQyxHQUFOLEVBQVU7QUFDWEMsbUJBQWFPLElBQWIsQ0FBa0JULEdBQUcsQ0FBQ1UsT0FBSixDQUFZQyxXQUE5QixFQUEyQ0wsSUFBM0MsQ0FBZ0RDLENBQUMsSUFBSTtBQUNsRCxVQUFHQSxDQUFILEVBQU1OLEdBQUcsQ0FBQ08sSUFBSixDQUFTRCxDQUFULEVBQU4sS0FDS04sR0FBRyxDQUFDTyxJQUFKLENBQVM7QUFBQyxpQkFBVTtBQUFYLE9BQVQ7QUFDUCxLQUhEO0FBSUY7O0FBZG1COzs7O2VBaUJULElBQUlWLFVBQUosRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2Vyc1NlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlcnMuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgICBsb2dpbihyZXEsIHJlcykge1xyXG4gICAgICAgIFVzZXJzU2VydmljZVxyXG4gICAgICAgICAgLmxvZ2luKHJlcS5ib2R5LnVzZXJuYW1lLCByZXEuYm9keS5wYXNzd29yZClcclxuICAgICAgICAgIC50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICBpZiAocikgcmVzLmpzb24ocik7XHJcbiAgICAgICAgICAgIGVsc2UgcmVzLmpzb24oe1wiZXJyb3JcIiA6IFwibG9naW4gZmFpbGVkXCJ9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICBhdXRoKHJlcSwgcmVzKXtcclxuICAgICAgIFVzZXJzU2VydmljZS5hdXRoKHJlcS5oZWFkZXJzLmFjY2Vzc3Rva2VuKS50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgaWYocikgcmVzLmpzb24ocik7XHJcbiAgICAgICAgICBlbHNlIHJlcy5qc29uKHtcImVycm9yXCIgOiBcImF1dGggZmFpbGVkXCJ9KTtcclxuICAgICAgIH0pO1xyXG4gICAgfSAgXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBDb250cm9sbGVyKCk7Il19
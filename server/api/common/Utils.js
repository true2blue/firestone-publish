"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Utils {
  static getUserIdFromAccessToken(accessToken) {
    let buff = new Buffer(accessToken, 'base64');
    let text = buff.toString('utf-8');
    let id = text.split(':')[0];

    if (!/[a-z0-9]{24}/g.test(id)) {
      return null;
    }

    return id;
  }

}

var _default = Utils;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvY29tbW9uL1V0aWxzLmpzIl0sIm5hbWVzIjpbIlV0aWxzIiwiZ2V0VXNlcklkRnJvbUFjY2Vzc1Rva2VuIiwiYWNjZXNzVG9rZW4iLCJidWZmIiwiQnVmZmVyIiwidGV4dCIsInRvU3RyaW5nIiwiaWQiLCJzcGxpdCIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxLQUFOLENBQVc7QUFFUCxTQUFPQyx3QkFBUCxDQUFnQ0MsV0FBaEMsRUFBNEM7QUFDeEMsUUFBSUMsSUFBSSxHQUFHLElBQUlDLE1BQUosQ0FBV0YsV0FBWCxFQUF3QixRQUF4QixDQUFYO0FBQ0EsUUFBSUcsSUFBSSxHQUFHRixJQUFJLENBQUNHLFFBQUwsQ0FBYyxPQUFkLENBQVg7QUFDQSxRQUFJQyxFQUFFLEdBQUdGLElBQUksQ0FBQ0csS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBVDs7QUFDQSxRQUFHLENBQUMsZ0JBQWdCQyxJQUFoQixDQUFxQkYsRUFBckIsQ0FBSixFQUE2QjtBQUN6QixhQUFPLElBQVA7QUFDSDs7QUFDRCxXQUFPQSxFQUFQO0FBQ0g7O0FBVk07O2VBY0lQLEsiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBVdGlsc3tcclxuICAgIFxyXG4gICAgc3RhdGljIGdldFVzZXJJZEZyb21BY2Nlc3NUb2tlbihhY2Nlc3NUb2tlbil7XHJcbiAgICAgICAgbGV0IGJ1ZmYgPSBuZXcgQnVmZmVyKGFjY2Vzc1Rva2VuLCAnYmFzZTY0Jyk7XHJcbiAgICAgICAgbGV0IHRleHQgPSBidWZmLnRvU3RyaW5nKCd1dGYtOCcpO1xyXG4gICAgICAgIGxldCBpZCA9IHRleHQuc3BsaXQoJzonKVswXTtcclxuICAgICAgICBpZighL1thLXowLTldezI0fS9nLnRlc3QoaWQpKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWxzIl19
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _swaggerExpressMiddleware = _interopRequireDefault(require("swagger-express-middleware"));

var path = _interopRequireWildcard(require("path"));

var _error = _interopRequireDefault(require("../api/middlewares/error.handler"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(app, routes) {
  (0, _swaggerExpressMiddleware.default)(path.join(__dirname, 'api.yml'), app, (err, mw) => {
    // Enable Express' case-sensitive and strict options
    // (so "/entities", "/Entities", and "/Entities/" are all different)
    app.enable('case sensitive routing');
    app.enable('strict routing');
    app.use(mw.metadata());
    app.use(mw.files({
      // Override the Express App's case-sensitive
      // and strict-routing settings for the Files middleware.
      caseSensitive: false,
      strict: false
    }, {
      useBasePath: false,
      apiPath: process.env.SWAGGER_API_SPEC // Disable serving the "api.yml" file
      // rawFilesPath: false

    }));
    app.use(mw.parseRequest({
      // Configure the cookie parser to use secure cookies
      cookie: {
        secret: process.env.SESSION_SECRET
      },
      // Don't allow JSON content over 100kb (default is 1mb)
      json: {
        limit: process.env.REQUEST_LIMIT
      }
    })); // These two middleware don't have any options (yet)

    app.use(mw.CORS(), mw.validateRequest());
    routes(app); // eslint-disable-next-line no-unused-vars, no-shadow

    app.use(_error.default);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9jb21tb24vc3dhZ2dlci5qcyJdLCJuYW1lcyI6WyJhcHAiLCJyb3V0ZXMiLCJwYXRoIiwiam9pbiIsIl9fZGlybmFtZSIsImVyciIsIm13IiwiZW5hYmxlIiwidXNlIiwibWV0YWRhdGEiLCJmaWxlcyIsImNhc2VTZW5zaXRpdmUiLCJzdHJpY3QiLCJ1c2VCYXNlUGF0aCIsImFwaVBhdGgiLCJwcm9jZXNzIiwiZW52IiwiU1dBR0dFUl9BUElfU1BFQyIsInBhcnNlUmVxdWVzdCIsImNvb2tpZSIsInNlY3JldCIsIlNFU1NJT05fU0VDUkVUIiwianNvbiIsImxpbWl0IiwiUkVRVUVTVF9MSU1JVCIsIkNPUlMiLCJ2YWxpZGF0ZVJlcXVlc3QiLCJlcnJvckhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRWUsa0JBQVVBLEdBQVYsRUFBZUMsTUFBZixFQUF1QjtBQUNwQyx5Q0FBV0MsSUFBSSxDQUFDQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsU0FBckIsQ0FBWCxFQUE0Q0osR0FBNUMsRUFBaUQsQ0FBQ0ssR0FBRCxFQUFNQyxFQUFOLEtBQWE7QUFDNUQ7QUFDQTtBQUNBTixJQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyx3QkFBWDtBQUNBUCxJQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyxnQkFBWDtBQUVBUCxJQUFBQSxHQUFHLENBQUNRLEdBQUosQ0FBUUYsRUFBRSxDQUFDRyxRQUFILEVBQVI7QUFDQVQsSUFBQUEsR0FBRyxDQUFDUSxHQUFKLENBQVFGLEVBQUUsQ0FBQ0ksS0FBSCxDQUFTO0FBQ2Y7QUFDQTtBQUNBQyxNQUFBQSxhQUFhLEVBQUUsS0FIQTtBQUlmQyxNQUFBQSxNQUFNLEVBQUU7QUFKTyxLQUFULEVBS0w7QUFDREMsTUFBQUEsV0FBVyxFQUFFLEtBRFo7QUFFREMsTUFBQUEsT0FBTyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBRnBCLENBR0Q7QUFDQTs7QUFKQyxLQUxLLENBQVI7QUFZQWpCLElBQUFBLEdBQUcsQ0FBQ1EsR0FBSixDQUFRRixFQUFFLENBQUNZLFlBQUgsQ0FBZ0I7QUFDdEI7QUFDQUMsTUFBQUEsTUFBTSxFQUFFO0FBQ05DLFFBQUFBLE1BQU0sRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlLO0FBRGQsT0FGYztBQUt0QjtBQUNBQyxNQUFBQSxJQUFJLEVBQUU7QUFDSkMsUUFBQUEsS0FBSyxFQUFFUixPQUFPLENBQUNDLEdBQVIsQ0FBWVE7QUFEZjtBQU5nQixLQUFoQixDQUFSLEVBbkI0RCxDQThCNUQ7O0FBQ0F4QixJQUFBQSxHQUFHLENBQUNRLEdBQUosQ0FDRUYsRUFBRSxDQUFDbUIsSUFBSCxFQURGLEVBRUVuQixFQUFFLENBQUNvQixlQUFILEVBRkY7QUFLQXpCLElBQUFBLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBcEM0RCxDQXNDNUQ7O0FBQ0FBLElBQUFBLEdBQUcsQ0FBQ1EsR0FBSixDQUFRbUIsY0FBUjtBQUNELEdBeENEO0FBeUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAnc3dhZ2dlci1leHByZXNzLW1pZGRsZXdhcmUnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJy4uL2FwaS9taWRkbGV3YXJlcy9lcnJvci5oYW5kbGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHAsIHJvdXRlcykge1xyXG4gIG1pZGRsZXdhcmUocGF0aC5qb2luKF9fZGlybmFtZSwgJ2FwaS55bWwnKSwgYXBwLCAoZXJyLCBtdykgPT4ge1xyXG4gICAgLy8gRW5hYmxlIEV4cHJlc3MnIGNhc2Utc2Vuc2l0aXZlIGFuZCBzdHJpY3Qgb3B0aW9uc1xyXG4gICAgLy8gKHNvIFwiL2VudGl0aWVzXCIsIFwiL0VudGl0aWVzXCIsIGFuZCBcIi9FbnRpdGllcy9cIiBhcmUgYWxsIGRpZmZlcmVudClcclxuICAgIGFwcC5lbmFibGUoJ2Nhc2Ugc2Vuc2l0aXZlIHJvdXRpbmcnKTtcclxuICAgIGFwcC5lbmFibGUoJ3N0cmljdCByb3V0aW5nJyk7XHJcblxyXG4gICAgYXBwLnVzZShtdy5tZXRhZGF0YSgpKTtcclxuICAgIGFwcC51c2UobXcuZmlsZXMoe1xyXG4gICAgICAvLyBPdmVycmlkZSB0aGUgRXhwcmVzcyBBcHAncyBjYXNlLXNlbnNpdGl2ZVxyXG4gICAgICAvLyBhbmQgc3RyaWN0LXJvdXRpbmcgc2V0dGluZ3MgZm9yIHRoZSBGaWxlcyBtaWRkbGV3YXJlLlxyXG4gICAgICBjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcclxuICAgICAgc3RyaWN0OiBmYWxzZSxcclxuICAgIH0sIHtcclxuICAgICAgdXNlQmFzZVBhdGg6IGZhbHNlLFxyXG4gICAgICBhcGlQYXRoOiBwcm9jZXNzLmVudi5TV0FHR0VSX0FQSV9TUEVDLFxyXG4gICAgICAvLyBEaXNhYmxlIHNlcnZpbmcgdGhlIFwiYXBpLnltbFwiIGZpbGVcclxuICAgICAgLy8gcmF3RmlsZXNQYXRoOiBmYWxzZVxyXG4gICAgfSkpO1xyXG5cclxuICAgIGFwcC51c2UobXcucGFyc2VSZXF1ZXN0KHtcclxuICAgICAgLy8gQ29uZmlndXJlIHRoZSBjb29raWUgcGFyc2VyIHRvIHVzZSBzZWN1cmUgY29va2llc1xyXG4gICAgICBjb29raWU6IHtcclxuICAgICAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFU1NJT05fU0VDUkVULFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBEb24ndCBhbGxvdyBKU09OIGNvbnRlbnQgb3ZlciAxMDBrYiAoZGVmYXVsdCBpcyAxbWIpXHJcbiAgICAgIGpzb246IHtcclxuICAgICAgICBsaW1pdDogcHJvY2Vzcy5lbnYuUkVRVUVTVF9MSU1JVCxcclxuICAgICAgfSxcclxuICAgIH0pKTtcclxuXHJcbiAgICAvLyBUaGVzZSB0d28gbWlkZGxld2FyZSBkb24ndCBoYXZlIGFueSBvcHRpb25zICh5ZXQpXHJcbiAgICBhcHAudXNlKFxyXG4gICAgICBtdy5DT1JTKCksXHJcbiAgICAgIG13LnZhbGlkYXRlUmVxdWVzdCgpLFxyXG4gICAgKTtcclxuXHJcbiAgICByb3V0ZXMoYXBwKTtcclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMsIG5vLXNoYWRvd1xyXG4gICAgYXBwLnVzZShlcnJvckhhbmRsZXIpO1xyXG4gIH0pO1xyXG59XHJcbiJdfQ==
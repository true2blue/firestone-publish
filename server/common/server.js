"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var path = _interopRequireWildcard(require("path"));

var bodyParser = _interopRequireWildcard(require("body-parser"));

var http = _interopRequireWildcard(require("http"));

var os = _interopRequireWildcard(require("os"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _nodeSchedule = _interopRequireDefault(require("node-schedule"));

var _child_process = _interopRequireDefault(require("child_process"));

var _util = _interopRequireDefault(require("util"));

var _swagger = _interopRequireDefault(require("./swagger"));

var _logger = _interopRequireDefault(require("./logger"));

var _models = require("../api/models");

var _configmock = _interopRequireDefault(require("../api/services/configmock.service"));

var _config = _interopRequireDefault(require("../api/services/config.service"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express.default();

class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
    app.set('appPath', `${root}client`);
    app.use(bodyParser.json({
      limit: process.env.REQUEST_LIMIT || '100kb'
    }));
    app.use(bodyParser.urlencoded({
      extended: true,
      limit: process.env.REQUEST_LIMIT || '100kb'
    }));
    app.use((0, _cookieParser.default)(process.env.SESSION_SECRET));
    app.use(_express.default.static(`${root}/public`));
    app.use((0, _cors.default)());
  }

  router(routes) {
    (0, _swagger.default)(app, routes);
    return this;
  }

  init() {
    _configmock.default.clear().then(r => {
      _logger.default.info('reset all mock config curBuyNum = 0, monitor_concept = [] done');
    }, err => {
      _logger.default.error(`reset all mock config curBuyNum = 0, monitor_concept = [] failed = ${err}`);
    });

    _config.default.clear().then(r => {
      _logger.default.info('reset all config curBuyNum = 0, monitor_concept = [] done');
    }, err => {
      _logger.default.error(`reset all config curBuyNum = 0, monitor_concept = [] failed = ${err}`);
    });

    if (process.env.ENABLE_FIRESTONE === 'true') {
      let exec = _util.default.promisify(_child_process.default.exec);

      exec('shell\\runfirestone');

      _logger.default.info('start the firestone service');
    } else {
      _logger.default.warn('firestone is disable, ignore the firestone service');
    }
  }

  listen(port = process.env.PORT) {
    (0, _models.connectDB)().then(async () => {
      const welcome = p => () => _logger.default.info(`up and running in ${process.env.APP_ENV || 'development'} @: ${os.hostname()} on port: ${p}}`);

      http.createServer(app).listen(port, welcome(port));

      _nodeSchedule.default.scheduleJob('0 0 9 ? * 1-5', () => {
        this.init();
      });

      if (new Date().getHours() >= 9) {
        this.init();
      }
    });
    return app;
  }

}

exports.default = ExpressServer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9jb21tb24vc2VydmVyLmpzIl0sIm5hbWVzIjpbImFwcCIsIkV4cHJlc3MiLCJFeHByZXNzU2VydmVyIiwiY29uc3RydWN0b3IiLCJyb290IiwicGF0aCIsIm5vcm1hbGl6ZSIsIl9fZGlybmFtZSIsInNldCIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwibGltaXQiLCJwcm9jZXNzIiwiZW52IiwiUkVRVUVTVF9MSU1JVCIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsIlNFU1NJT05fU0VDUkVUIiwic3RhdGljIiwicm91dGVyIiwicm91dGVzIiwiaW5pdCIsImNvbmZpZ01vY2tTZXJ2aWNlIiwiY2xlYXIiLCJ0aGVuIiwiciIsImwiLCJpbmZvIiwiZXJyIiwiZXJyb3IiLCJjb25maWdTZXJ2aWNlIiwiRU5BQkxFX0ZJUkVTVE9ORSIsImV4ZWMiLCJ1dGlsIiwicHJvbWlzaWZ5IiwiY2hpbGRfcHJvY2VzcyIsIndhcm4iLCJsaXN0ZW4iLCJwb3J0IiwiUE9SVCIsIndlbGNvbWUiLCJwIiwiQVBQX0VOViIsIm9zIiwiaG9zdG5hbWUiLCJodHRwIiwiY3JlYXRlU2VydmVyIiwic2NoZWR1bGUiLCJzY2hlZHVsZUpvYiIsIkRhdGUiLCJnZXRIb3VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsSUFBSUMsZ0JBQUosRUFBWjs7QUFFZSxNQUFNQyxhQUFOLENBQW9CO0FBQ2pDQyxFQUFBQSxXQUFXLEdBQUc7QUFDWixVQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFnQixHQUFFQyxTQUFVLFFBQTVCLENBQWI7QUFDQVAsSUFBQUEsR0FBRyxDQUFDUSxHQUFKLENBQVEsU0FBUixFQUFvQixHQUFFSixJQUFLLFFBQTNCO0FBQ0FKLElBQUFBLEdBQUcsQ0FBQ1MsR0FBSixDQUFRQyxVQUFVLENBQUNDLElBQVgsQ0FBZ0I7QUFBRUMsTUFBQUEsS0FBSyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsYUFBWixJQUE2QjtBQUF0QyxLQUFoQixDQUFSO0FBQ0FmLElBQUFBLEdBQUcsQ0FBQ1MsR0FBSixDQUFRQyxVQUFVLENBQUNNLFVBQVgsQ0FBc0I7QUFBRUMsTUFBQUEsUUFBUSxFQUFFLElBQVo7QUFBa0JMLE1BQUFBLEtBQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBQVosSUFBNkI7QUFBdEQsS0FBdEIsQ0FBUjtBQUNBZixJQUFBQSxHQUFHLENBQUNTLEdBQUosQ0FBUSwyQkFBYUksT0FBTyxDQUFDQyxHQUFSLENBQVlJLGNBQXpCLENBQVI7QUFDQWxCLElBQUFBLEdBQUcsQ0FBQ1MsR0FBSixDQUFRUixpQkFBUWtCLE1BQVIsQ0FBZ0IsR0FBRWYsSUFBSyxTQUF2QixDQUFSO0FBQ0FKLElBQUFBLEdBQUcsQ0FBQ1MsR0FBSixDQUFRLG9CQUFSO0FBQ0Q7O0FBRURXLEVBQUFBLE1BQU0sQ0FBQ0MsTUFBRCxFQUFTO0FBQ2IsMEJBQVdyQixHQUFYLEVBQWdCcUIsTUFBaEI7QUFFQSxXQUFPLElBQVA7QUFDRDs7QUFHREMsRUFBQUEsSUFBSSxHQUFHO0FBQ0xDLHdCQUFrQkMsS0FBbEIsR0FBMEJDLElBQTFCLENBQStCQyxDQUFDLElBQUk7QUFDbENDLHNCQUFFQyxJQUFGLENBQU8sZ0VBQVA7QUFDRCxLQUZELEVBRUlDLEdBQUQsSUFBUztBQUNWRixzQkFBRUcsS0FBRixDQUFTLHNFQUFxRUQsR0FBSSxFQUFsRjtBQUNELEtBSkQ7O0FBS0FFLG9CQUFjUCxLQUFkLEdBQXNCQyxJQUF0QixDQUEyQkMsQ0FBQyxJQUFJO0FBQzlCQyxzQkFBRUMsSUFBRixDQUFPLDJEQUFQO0FBQ0QsS0FGRCxFQUVJQyxHQUFELElBQVM7QUFDVkYsc0JBQUVHLEtBQUYsQ0FBUyxpRUFBZ0VELEdBQUksRUFBN0U7QUFDRCxLQUpEOztBQUtBLFFBQUloQixPQUFPLENBQUNDLEdBQVIsQ0FBWWtCLGdCQUFaLEtBQWlDLE1BQXJDLEVBQTZDO0FBQzNDLFVBQUlDLElBQUksR0FBR0MsY0FBS0MsU0FBTCxDQUFlQyx1QkFBY0gsSUFBN0IsQ0FBWDs7QUFDQUEsTUFBQUEsSUFBSSxDQUFDLHFCQUFELENBQUo7O0FBQ0FOLHNCQUFFQyxJQUFGLENBQU8sNkJBQVA7QUFDRCxLQUpELE1BS0s7QUFDSEQsc0JBQUVVLElBQUYsQ0FBTyxvREFBUDtBQUNEO0FBQ0Y7O0FBR0RDLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHMUIsT0FBTyxDQUFDQyxHQUFSLENBQVkwQixJQUFwQixFQUEwQjtBQUM5Qiw2QkFBWWYsSUFBWixDQUFpQixZQUFZO0FBQzNCLFlBQU1nQixPQUFPLEdBQUdDLENBQUMsSUFBSSxNQUFNZixnQkFBRUMsSUFBRixDQUFRLHFCQUFvQmYsT0FBTyxDQUFDQyxHQUFSLENBQVk2QixPQUFaLElBQXVCLGFBQWMsT0FBTUMsRUFBRSxDQUFDQyxRQUFILEVBQWMsYUFBWUgsQ0FBRSxHQUFuRyxDQUEzQjs7QUFDQUksTUFBQUEsSUFBSSxDQUFDQyxZQUFMLENBQWtCL0MsR0FBbEIsRUFBdUJzQyxNQUF2QixDQUE4QkMsSUFBOUIsRUFBb0NFLE9BQU8sQ0FBQ0YsSUFBRCxDQUEzQzs7QUFDQVMsNEJBQVNDLFdBQVQsQ0FBcUIsZUFBckIsRUFBc0MsTUFBTTtBQUMxQyxhQUFLM0IsSUFBTDtBQUNELE9BRkQ7O0FBR0EsVUFBSSxJQUFJNEIsSUFBSixHQUFXQyxRQUFYLE1BQXlCLENBQTdCLEVBQWdDO0FBQzlCLGFBQUs3QixJQUFMO0FBQ0Q7QUFDRixLQVREO0FBVUEsV0FBT3RCLEdBQVA7QUFDRDs7QUFwRGdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xyXG5pbXBvcnQgKiBhcyBvcyBmcm9tICdvcyc7XHJcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcic7XHJcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnXHJcbmltcG9ydCBzY2hlZHVsZSBmcm9tICdub2RlLXNjaGVkdWxlJ1xyXG5pbXBvcnQgY2hpbGRfcHJvY2VzcyBmcm9tICdjaGlsZF9wcm9jZXNzJztcclxuaW1wb3J0IHV0aWwgZnJvbSAndXRpbCdcclxuXHJcbmltcG9ydCBzd2FnZ2VyaWZ5IGZyb20gJy4vc3dhZ2dlcic7XHJcblxyXG5pbXBvcnQgbCBmcm9tICcuL2xvZ2dlcic7XHJcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gJy4uL2FwaS9tb2RlbHMnO1xyXG5pbXBvcnQgY29uZmlnTW9ja1NlcnZpY2UgZnJvbSAnLi4vYXBpL3NlcnZpY2VzL2NvbmZpZ21vY2suc2VydmljZSdcclxuaW1wb3J0IGNvbmZpZ1NlcnZpY2UgZnJvbSAnLi4vYXBpL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IEV4cHJlc3MoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3NTZXJ2ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc3Qgcm9vdCA9IHBhdGgubm9ybWFsaXplKGAke19fZGlybmFtZX0vLi4vLi5gKTtcclxuICAgIGFwcC5zZXQoJ2FwcFBhdGgnLCBgJHtyb290fWNsaWVudGApO1xyXG4gICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oeyBsaW1pdDogcHJvY2Vzcy5lbnYuUkVRVUVTVF9MSU1JVCB8fCAnMTAwa2InIH0pKTtcclxuICAgIGFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUsIGxpbWl0OiBwcm9jZXNzLmVudi5SRVFVRVNUX0xJTUlUIHx8ICcxMDBrYicgfSkpO1xyXG4gICAgYXBwLnVzZShjb29raWVQYXJzZXIocHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQpKTtcclxuICAgIGFwcC51c2UoRXhwcmVzcy5zdGF0aWMoYCR7cm9vdH0vcHVibGljYCkpO1xyXG4gICAgYXBwLnVzZShjb3JzKCkpO1xyXG4gIH1cclxuXHJcbiAgcm91dGVyKHJvdXRlcykge1xyXG4gICAgc3dhZ2dlcmlmeShhcHAsIHJvdXRlcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGNvbmZpZ01vY2tTZXJ2aWNlLmNsZWFyKCkudGhlbihyID0+IHtcclxuICAgICAgbC5pbmZvKCdyZXNldCBhbGwgbW9jayBjb25maWcgY3VyQnV5TnVtID0gMCwgbW9uaXRvcl9jb25jZXB0ID0gW10gZG9uZScpO1xyXG4gICAgfSwgKGVycikgPT4ge1xyXG4gICAgICBsLmVycm9yKGByZXNldCBhbGwgbW9jayBjb25maWcgY3VyQnV5TnVtID0gMCwgbW9uaXRvcl9jb25jZXB0ID0gW10gZmFpbGVkID0gJHtlcnJ9YCk7XHJcbiAgICB9KTtcclxuICAgIGNvbmZpZ1NlcnZpY2UuY2xlYXIoKS50aGVuKHIgPT4ge1xyXG4gICAgICBsLmluZm8oJ3Jlc2V0IGFsbCBjb25maWcgY3VyQnV5TnVtID0gMCwgbW9uaXRvcl9jb25jZXB0ID0gW10gZG9uZScpO1xyXG4gICAgfSwgKGVycikgPT4ge1xyXG4gICAgICBsLmVycm9yKGByZXNldCBhbGwgY29uZmlnIGN1ckJ1eU51bSA9IDAsIG1vbml0b3JfY29uY2VwdCA9IFtdIGZhaWxlZCA9ICR7ZXJyfWApO1xyXG4gICAgfSk7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuRU5BQkxFX0ZJUkVTVE9ORSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIGxldCBleGVjID0gdXRpbC5wcm9taXNpZnkoY2hpbGRfcHJvY2Vzcy5leGVjKVxyXG4gICAgICBleGVjKCdzaGVsbFxcXFxydW5maXJlc3RvbmUnKTtcclxuICAgICAgbC5pbmZvKCdzdGFydCB0aGUgZmlyZXN0b25lIHNlcnZpY2UnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBsLndhcm4oJ2ZpcmVzdG9uZSBpcyBkaXNhYmxlLCBpZ25vcmUgdGhlIGZpcmVzdG9uZSBzZXJ2aWNlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgbGlzdGVuKHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUKSB7XHJcbiAgICBjb25uZWN0REIoKS50aGVuKGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3Qgd2VsY29tZSA9IHAgPT4gKCkgPT4gbC5pbmZvKGB1cCBhbmQgcnVubmluZyBpbiAke3Byb2Nlc3MuZW52LkFQUF9FTlYgfHwgJ2RldmVsb3BtZW50J30gQDogJHtvcy5ob3N0bmFtZSgpfSBvbiBwb3J0OiAke3B9fWApO1xyXG4gICAgICBodHRwLmNyZWF0ZVNlcnZlcihhcHApLmxpc3Rlbihwb3J0LCB3ZWxjb21lKHBvcnQpKTtcclxuICAgICAgc2NoZWR1bGUuc2NoZWR1bGVKb2IoJzAgMCA5ID8gKiAxLTUnLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAobmV3IERhdGUoKS5nZXRIb3VycygpID49IDkpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBwO1xyXG4gIH1cclxufVxyXG4iXX0=
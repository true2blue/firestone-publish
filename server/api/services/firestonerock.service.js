"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("../../common/logger"));

var _child_process = _interopRequireDefault(require("child_process"));

var _util = _interopRequireDefault(require("util"));

var _http = _interopRequireDefault(require("http"));

var _https = _interopRequireDefault(require("https"));

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FireStoneRockService {
  constructor() {
    this.exec = _util.default.promisify(_child_process.default.exec);
    this.options = {
      'method': 'POST',
      'hostname': 'mncg.10jqka.com.cn',
      'path': '/cgiwt/delegate/qryChengjiao',
      'headers': {
        'Accept': ' application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': ' gzip, deflate, br',
        'Accept-Language': ' en,zh-CN;q=0.9,zh;q=0.8',
        'Connection': ' keep-alive',
        'Content-Length': ' 0',
        'Host': ' mncg.10jqka.com.cn',
        'Origin': ' https://mncg.10jqka.com.cn',
        'Referer': ' https://mncg.10jqka.com.cn/cgiwt/index/index',
        'Sec-Fetch-Dest': ' empty',
        'Sec-Fetch-Mode': ' cors',
        'Sec-Fetch-Site': ' same-origin',
        'User-Agent': ' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'X-Requested-With': ' XMLHttpRequest',
        'sec-ch-ua': ' "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': ' ?0',
        'sec-ch-ua-platform': ' "Windows"'
      }
    };
    this.dfcf_options = {
      'hostname': 'jy.xzsec.com',
      'port': 443,
      'method': 'POST',
      'headers': {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        'Connection': 'keep-alive',
        'Referer': 'https://jy.xzsec.com/Trade/Sale',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Host': 'jy.xzsec.com',
        'Origin': 'https://jy.xzsec.com',
        'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
      }
    };
  }

  async createNewFirerock(codes, tradeId, isMock) {
    let msg = `start the firestonerock service code=${codes}, tradeId=${tradeId}, isMock=${isMock}`;

    _logger.default.info(msg);

    if (process.env.ENABLE_FIREROCK === 'true') {
      let seconds = '"2,5,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50,53,56,59"';

      if (codes[0] == 'N/A') {
        seconds = '3';
      }

      this.exec(`shell\\runfirerock ${tradeId} ${seconds} ${isMock}`);
      return new Promise((resolve, reject) => {
        resolve({
          'success': msg
        });
      });
    } else {
      return Promise.resolve({
        'success': msg,
        'message': 'FIREROCK is disable, ignore createNewFirerock'
      });
    }
  }

  async start_heart_beat(headers) {
    if (process.env.ENABLE_THS_HEART_BEAT === 'true') {
      Object.assign(this.options.headers, headers);
      return new Promise((resolve, reject) => {
        console.log(this.options);

        let req = _http.default.request(this.options, res => {
          var chunks = [];
          res.on('data', chunk => {
            chunks.push(chunk);
          });
          res.on("end", function (chunk) {
            let body = Buffer.concat(chunks);
            let result = body.toString();

            _logger.default.info(`send heart beat to ths get response = ${result}`);

            resolve(JSON.parse(result));
          });
          res.on("error", function (error) {
            _logger.default.error(`failed to parse the heart beat result = ${error}`);

            reject(error);
          });
        });

        req.on('error', e => {
          _logger.default.error(`send heart beat to ths error, e = ${e}`);

          reject(e);
        });
        req.end();
      });
    } else {
      return Promise.resolve({
        errorcode: 0,
        message: 'THS_HEART_BEAT is disable, ignore the heart beat'
      });
    }
  }

  async start_heart_beat_dfcf(headers, validatekey) {
    this.dfcf_options['path'] = '/Search/GetDealData?validatekey=' + validatekey;
    headers['gw_reqtimestamp'] = new Date().getTime();
    Object.assign(this.dfcf_options.headers, headers);
    return new Promise((resolve, reject) => {
      let req = _https.default.request(this.dfcf_options, res => {
        res.on('data', d => {
          let result = JSON.parse(d);

          if (result['Status'] == 0) {
            _logger.default.info(`send heart beat to dfcf get response = ${d}`);

            resolve(result);
          } else {
            _logger.default.error(`failed to parse the heart beat dfcf result = ${d}`);

            reject(result);
          }
        });
      });

      req.on('error', e => {
        _logger.default.error(`send heart beat to dfcf error, e = ${e}`);

        reject(e);
      });
      req.write(_querystring.default.stringify({
        'qqhs': '10',
        'dwc': ''
      }));
      req.end();
    });
  }

}

var _default = new FireStoneRockService();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvc2VydmljZXMvZmlyZXN0b25lcm9jay5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIkZpcmVTdG9uZVJvY2tTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJleGVjIiwidXRpbCIsInByb21pc2lmeSIsImNoaWxkX3Byb2Nlc3MiLCJvcHRpb25zIiwiZGZjZl9vcHRpb25zIiwiY3JlYXRlTmV3RmlyZXJvY2siLCJjb2RlcyIsInRyYWRlSWQiLCJpc01vY2siLCJtc2ciLCJsIiwiaW5mbyIsInByb2Nlc3MiLCJlbnYiLCJFTkFCTEVfRklSRVJPQ0siLCJzZWNvbmRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdGFydF9oZWFydF9iZWF0IiwiaGVhZGVycyIsIkVOQUJMRV9USFNfSEVBUlRfQkVBVCIsIk9iamVjdCIsImFzc2lnbiIsImNvbnNvbGUiLCJsb2ciLCJyZXEiLCJodHRwIiwicmVxdWVzdCIsInJlcyIsImNodW5rcyIsIm9uIiwiY2h1bmsiLCJwdXNoIiwiYm9keSIsIkJ1ZmZlciIsImNvbmNhdCIsInJlc3VsdCIsInRvU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJlIiwiZW5kIiwiZXJyb3Jjb2RlIiwibWVzc2FnZSIsInN0YXJ0X2hlYXJ0X2JlYXRfZGZjZiIsInZhbGlkYXRla2V5IiwiRGF0ZSIsImdldFRpbWUiLCJodHRwcyIsImQiLCJ3cml0ZSIsInF1ZXJ5c3RyaW5nIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxvQkFBTixDQUEyQjtBQUV2QkMsRUFBQUEsV0FBVyxHQUFHO0FBQ1YsU0FBS0MsSUFBTCxHQUFZQyxjQUFLQyxTQUFMLENBQWVDLHVCQUFjSCxJQUE3QixDQUFaO0FBQ0EsU0FBS0ksT0FBTCxHQUFlO0FBQ1gsZ0JBQVUsTUFEQztBQUVYLGtCQUFZLG9CQUZEO0FBR1gsY0FB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbCBmcm9tICcuLi8uLi9jb21tb24vbG9nZ2VyJztcclxuaW1wb3J0IGNoaWxkX3Byb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XHJcbmltcG9ydCB1dGlsIGZyb20gJ3V0aWwnXHJcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnXHJcbmltcG9ydCBodHRwcyBmcm9tICdodHRwcydcclxuaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gJ3F1ZXJ5c3RyaW5nJ1xyXG5cclxuY2xhc3MgRmlyZVN0b25lUm9ja1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZXhlYyA9IHV0aWwucHJvbWlzaWZ5KGNoaWxkX3Byb2Nlc3MuZXhlYylcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICdtZXRob2QnOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICdob3N0bmFtZSc6ICdtbmNnLjEwanFrYS5jb20uY24nLFxyXG4gICAgICAgICAgICAncGF0aCc6ICcvY2dpd3QvZGVsZWdhdGUvcXJ5Q2hlbmdqaWFvJyxcclxuICAgICAgICAgICAgJ2hlYWRlcnMnOiB7XHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJyBhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQtRW5jb2RpbmcnOiAnIGd6aXAsIGRlZmxhdGUsIGJyJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiAnIGVuLHpoLUNOO3E9MC45LHpoO3E9MC44JyxcclxuICAgICAgICAgICAgICAgICdDb25uZWN0aW9uJzogJyBrZWVwLWFsaXZlJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LUxlbmd0aCc6ICcgMCcsXHJcbiAgICAgICAgICAgICAgICAnSG9zdCc6ICcgbW5jZy4xMGpxa2EuY29tLmNuJyxcclxuICAgICAgICAgICAgICAgICdPcmlnaW4nOiAnIGh0dHBzOi8vbW5jZy4xMGpxa2EuY29tLmNuJyxcclxuICAgICAgICAgICAgICAgICdSZWZlcmVyJzogJyBodHRwczovL21uY2cuMTBqcWthLmNvbS5jbi9jZ2l3dC9pbmRleC9pbmRleCcsXHJcbiAgICAgICAgICAgICAgICAnU2VjLUZldGNoLURlc3QnOiAnIGVtcHR5JyxcclxuICAgICAgICAgICAgICAgICdTZWMtRmV0Y2gtTW9kZSc6ICcgY29ycycsXHJcbiAgICAgICAgICAgICAgICAnU2VjLUZldGNoLVNpdGUnOiAnIHNhbWUtb3JpZ2luJyxcclxuICAgICAgICAgICAgICAgICdVc2VyLUFnZW50JzogJyBNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTIwLjAuMC4wIFNhZmFyaS81MzcuMzYnLFxyXG4gICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnIFhNTEh0dHBSZXF1ZXN0JyxcclxuICAgICAgICAgICAgICAgICdzZWMtY2gtdWEnOiAnIFwiTm90X0EgQnJhbmRcIjt2PVwiOFwiLCBcIkNocm9taXVtXCI7dj1cIjEyMFwiLCBcIkdvb2dsZSBDaHJvbWVcIjt2PVwiMTIwXCInLFxyXG4gICAgICAgICAgICAgICAgJ3NlYy1jaC11YS1tb2JpbGUnOiAnID8wJyxcclxuICAgICAgICAgICAgICAgICdzZWMtY2gtdWEtcGxhdGZvcm0nOiAnIFwiV2luZG93c1wiJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRmY2Zfb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgJ2hvc3RuYW1lJzogJ2p5Lnh6c2VjLmNvbScsXHJcbiAgICAgICAgICAgICdwb3J0JzogNDQzLFxyXG4gICAgICAgICAgICAnbWV0aG9kJzogJ1BPU1QnLFxyXG4gICAgICAgICAgICAnaGVhZGVycyc6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMScsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0LUVuY29kaW5nJzogJ2d6aXAsIGRlZmxhdGUsIGJyJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiAnZW4tVVMsZW47cT0wLjknLFxyXG4gICAgICAgICAgICAgICAgJ0Nvbm5lY3Rpb24nOiAna2VlcC1hbGl2ZScsXHJcbiAgICAgICAgICAgICAgICAnUmVmZXJlcic6ICdodHRwczovL2p5Lnh6c2VjLmNvbS9UcmFkZS9TYWxlJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgICAgICdIb3N0JzogJ2p5Lnh6c2VjLmNvbScsXHJcbiAgICAgICAgICAgICAgICAnT3JpZ2luJzogJ2h0dHBzOi8vankueHpzZWMuY29tJyxcclxuICAgICAgICAgICAgICAgICdzZWMtY2gtdWEnOiAnXCJDaHJvbWl1bVwiO3Y9XCI5NFwiLCBcIkdvb2dsZSBDaHJvbWVcIjt2PVwiOTRcIiwgXCI7Tm90IEEgQnJhbmRcIjt2PVwiOTlcIicsXHJcbiAgICAgICAgICAgICAgICAnc2VjLWNoLXVhLW1vYmlsZSc6ICc/MCcsXHJcbiAgICAgICAgICAgICAgICAnc2VjLWNoLXVhLXBsYXRmb3JtJzogJ1wiV2luZG93c1wiJyxcclxuICAgICAgICAgICAgICAgICdTZWMtRmV0Y2gtRGVzdCc6ICdlbXB0eScsXHJcbiAgICAgICAgICAgICAgICAnU2VjLUZldGNoLU1vZGUnOiAnY29ycycsXHJcbiAgICAgICAgICAgICAgICAnU2VjLUZldGNoLVNpdGUnOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICAgICAgICAgICAgJ1VzZXItQWdlbnQnOiAnTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk0LjAuNDYwNi43MSBTYWZhcmkvNTM3LjM2JyxcclxuICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjcmVhdGVOZXdGaXJlcm9jayhjb2RlcywgdHJhZGVJZCwgaXNNb2NrKSB7XHJcbiAgICAgICAgbGV0IG1zZyA9IGBzdGFydCB0aGUgZmlyZXN0b25lcm9jayBzZXJ2aWNlIGNvZGU9JHtjb2Rlc30sIHRyYWRlSWQ9JHt0cmFkZUlkfSwgaXNNb2NrPSR7aXNNb2NrfWA7XHJcbiAgICAgICAgbC5pbmZvKG1zZyk7XHJcbiAgICAgICAgaWYocHJvY2Vzcy5lbnYuRU5BQkxFX0ZJUkVST0NLID09PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICBsZXQgc2Vjb25kcyA9ICdcIjIsNSw4LDExLDE0LDE3LDIwLDIzLDI2LDI5LDMyLDM1LDM4LDQxLDQ0LDQ3LDUwLDUzLDU2LDU5XCInO1xyXG4gICAgICAgICAgICBpZihjb2Rlc1swXSA9PSAnTi9BJyl7XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gJzMnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZXhlYyhgc2hlbGxcXFxccnVuZmlyZXJvY2sgJHt0cmFkZUlkfSAke3NlY29uZHN9ICR7aXNNb2NrfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7ICdzdWNjZXNzJzogbXNnIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7ICdzdWNjZXNzJzogbXNnLCAnbWVzc2FnZScgOiAnRklSRVJPQ0sgaXMgZGlzYWJsZSwgaWdub3JlIGNyZWF0ZU5ld0ZpcmVyb2NrJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN0YXJ0X2hlYXJ0X2JlYXQoaGVhZGVycykge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5FTkFCTEVfVEhTX0hFQVJUX0JFQVQgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5oZWFkZXJzLCBoZWFkZXJzKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgbGV0IHJlcSA9IGh0dHAucmVxdWVzdCh0aGlzLm9wdGlvbnMsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2h1bmtzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5vbignZGF0YScsIChjaHVuaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaHVua3MucHVzaChjaHVuayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5vbihcImVuZFwiLCBmdW5jdGlvbiAoY2h1bmspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvZHkgPSBCdWZmZXIuY29uY2F0KGNodW5rcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBib2R5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGwuaW5mbyhgc2VuZCBoZWFydCBiZWF0IHRvIHRocyBnZXQgcmVzcG9uc2UgPSAke3Jlc3VsdH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXMub24oXCJlcnJvclwiLCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbC5lcnJvcihgZmFpbGVkIHRvIHBhcnNlIHRoZSBoZWFydCBiZWF0IHJlc3VsdCA9ICR7ZXJyb3J9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHJlcS5vbignZXJyb3InLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGwuZXJyb3IoYHNlbmQgaGVhcnQgYmVhdCB0byB0aHMgZXJyb3IsIGUgPSAke2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVxLmVuZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeyBlcnJvcmNvZGU6IDAsIG1lc3NhZ2U6ICdUSFNfSEVBUlRfQkVBVCBpcyBkaXNhYmxlLCBpZ25vcmUgdGhlIGhlYXJ0IGJlYXQnIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgc3RhcnRfaGVhcnRfYmVhdF9kZmNmKGhlYWRlcnMsIHZhbGlkYXRla2V5KSB7XHJcbiAgICAgICAgdGhpcy5kZmNmX29wdGlvbnNbJ3BhdGgnXSA9ICcvU2VhcmNoL0dldERlYWxEYXRhP3ZhbGlkYXRla2V5PScgKyB2YWxpZGF0ZWtleTtcclxuICAgICAgICBoZWFkZXJzWydnd19yZXF0aW1lc3RhbXAnXSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRmY2Zfb3B0aW9ucy5oZWFkZXJzLCBoZWFkZXJzKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVxID0gaHR0cHMucmVxdWVzdCh0aGlzLmRmY2Zfb3B0aW9ucywgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzLm9uKCdkYXRhJywgKGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShkKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdFsnU3RhdHVzJ10gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGwuaW5mbyhgc2VuZCBoZWFydCBiZWF0IHRvIGRmY2YgZ2V0IHJlc3BvbnNlID0gJHtkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGwuZXJyb3IoYGZhaWxlZCB0byBwYXJzZSB0aGUgaGVhcnQgYmVhdCBkZmNmIHJlc3VsdCA9ICR7ZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXEub24oJ2Vycm9yJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGwuZXJyb3IoYHNlbmQgaGVhcnQgYmVhdCB0byBkZmNmIGVycm9yLCBlID0gJHtlfWApO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlcS53cml0ZShxdWVyeXN0cmluZy5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgJ3FxaHMnOiAnMTAnLFxyXG4gICAgICAgICAgICAgICAgJ2R3Yyc6ICcnXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIHJlcS5lbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBGaXJlU3RvbmVSb2NrU2VydmljZSgpIl19
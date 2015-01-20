var http = require('superagent')
var Promise = require('bluebird');

class FidorClient {
  constructor(options) {
    this.oauthUrl = options.oauthUrl  
    /// etc
  }

  initiatePaymentToUser(options) {
    return new Promise(function(resolve, reject) {
      http
        .get('https://api.fidor.de....')
        .end(function(error, response) {
          resolve(response.body);
        });
    });
  }
}

module.exports = FidorClient


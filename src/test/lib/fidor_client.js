var FidorClient = require(__dirname+'/../../lib/fidor_client');

describe('Fidor Client', function() {

  it('should initialize with fidor credentials', function() {

    var fidorClient = new FidorClient({
      clientId: '',
      clientSecret: '',
      oauthUrl: ''
    })
  });

  it('should initialize a payment to a user', function() {

    fidorClient.initiatePaymentToUser({
      amount  : 100000,
      currency: 'EUR',
      recipient: 'yongsoo@fidor.de'
    })
    .then(function(payment) {
      assert.strictEqual(payment.status, 'sent');
    });
  });

  it('should initialize a payment from a user', function() {
    fidorClient.sendOauthPayment({
      accessToken: '',
      amount  : 100000,
      currency: 'EUR',
    })
    .error(function(error) {
      assert.strictEqual(error.message, 'invalid access token');
    });
  })
});


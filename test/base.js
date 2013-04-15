// Include NGN (locally)
var assert = require('assert'),
    path = require('path');

UTIL.testing = true;

suite('IDK TCP Sanity Test', function(){

  test('NGN.tcp.Channel exists.', function(){
    assert.ok(NGN.socket.Channel !== undefined,'NGN.socket.Channel load failure.');
  });

  test('NGN.tcp.Server exists.', function(){
    assert.ok(NGN.socket.Server !== undefined,'NGN.socket.Server load failure.');
  });

});

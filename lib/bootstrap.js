global.NGN = {};
module.exports = function(ngn){
  NGN = ngn;
  return {
    socket: {
      Channel: require('./socket/Channel'),
      Server: require('./socket/Server')
    }
  };
};
var Atem = require('atem');
var myAtemDevice = new Atem("192.168.180.240");
myAtemDevice.connect();

myAtemDevice.on('connectionStateChange', function(state) {
  console.log('state', state);
});



myAtemDevice.setProgram(4);

myAtemDevice.on('programBus', function (number) {
    console.log(number);
});
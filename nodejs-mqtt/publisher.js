var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://localhost:1883');
client.on('connect', function () {
setInterval(function() {
client.publish('demo', 'Hello mqtt');
    console.log('Message Sent');
}, 5000);
});
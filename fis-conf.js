/* eslint-disable */
'use strict';

var fs = require('fs');
var path = require('path');

var time = path.resolve('./time.md');
var t = new Date().getTime();

fs.writeFileSync(time, t);

function push(receiver, to) {
    return fis.plugin('http-push', {
        receiver: receiver,
        to: to
    });
}

var RECEIVER_PKY = 'http://118.190.143.122:8999/receiver';

fis.match('*', {
    deploy: push(RECEIVER_PKY, '/home/wwwroot/myjsblog')
})

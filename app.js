var path = require('path');
var fs = require('fs');
var child_process = require('child_process');

var time = path.resolve('./time.md');
var oldTime = 0;
var newTime = 0;
var iTimer = null;

iTimer = setInterval(function () {
    newTime = parseInt(fs.readFileSync(time, 'utf-8'), 10);
    if (oldTime !== newTime) {
        child_process.exec('hexo g', {
            cwd: __dirname
        }, function (err) {
            if (err) {
                console.log('update cache err: ' + err.toString());
            }
            else {
                console.log('hexo g成功了');
            }
        });
        oldTime = newTime;
    }
}, 10000);

var child_process = require('child_process');

module.exports = function(req, res) {
    if (req.token === 'chang') {
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
    }
    else {
        res.end('404');
    }
}

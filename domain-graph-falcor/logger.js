var bunyan = require('bunyan');

var LOG = bunyan.createLogger({
    name: 'demo',
    level: bunyan.DEBUG,
    src: true
});

module.exports = LOG;
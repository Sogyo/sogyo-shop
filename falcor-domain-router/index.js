var falcorExpress = require('falcor-express');
var Router = require('falcor-router');
var logger = require('./logger.js');

var express = require('express');
var app = express();

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
    // create a Virtual JSON resource with single key ("greeting")
    return new Router(
        [].concat(
            require('./routes/discount.js')
        )
    );
}));

// serve static files from current directory
app.use(express.static(__dirname + '/'));

var server = app.listen(3000);


var falcorExpress = require('falcor-express');
var Router = require('falcor-router');
var cors = require('cors');
var logger = require('./logger.js');

var express = require('express');
var app = express();

app.use(cors());

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
    routes = [].concat(
        require('./routes/discount.js'),
        require('./routes/customer.js')
    );
    return new Router(routes);
}));

var server = app.listen(3000, function (err) {
    logger.error(err);
});


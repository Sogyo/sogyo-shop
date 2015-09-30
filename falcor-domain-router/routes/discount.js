var rx = require('rx');
var restify = require('restify');
var bunyan = require('bunyan');
var LOG = require('../logger.js');
var falcor = require('falcor');

var discountclient = restify.createJsonClient({
    url: 'http://localhost:8080',
    log: LOG.child({
        component: 'server',
        level: bunyan.INFO,
        serializers: bunyan.stdSerializers
    }),
    version: '*'
});

var $atom = falcor.Model.atom;

module.exports = [
    {
        route: "discount[{keys:uuid}]",
        get: function (pathSet) {
            return rx.Observable
                .from(pathSet.uuid)
                .flatMap(function (uuid) {
                    return rx.Observable.create(function subscribe(observer) {
                        var subscribed = true;

                        discountclient.get('/' + uuid,
                            function (err, req, res, obj) {
                                if (!subscribed) {
                                    return;
                                }
                                if (err) {
                                    observer.onError(err);
                                } else {
                                    observer.onNext({
                                        request: uuid,
                                        response: obj
                                    });
                                    observer.onCompleted();
                                }
                            });

                        return function dispose() {
                            subscribed = false;
                        };
                    })
                })
                .map(function (request_response) {
                    return {
                        path: ["discount['" + request_response.request + "']"],
                        value: request_response.response.percentage
                    }
                });
        }
    }
];
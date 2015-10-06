var rx = require('rx');
var restify = require('restify');
var bunyan = require('bunyan');
var LOG = require('../logger.js');
var falcor = require('falcor');

var discountclient = restify.createJsonClient({
    url: 'http://10.199.1.12',
    log: LOG.child({
        component: 'server',
        level: bunyan.INFO,
        serializers: bunyan.stdSerializers
    }),
    version: '*'
});

module.exports = [
    {
        route: "discount[{keys:uuid}]['percentage']",
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
                                        uuid: uuid,
                                        result: obj
                                    });
                                    observer.onCompleted();
                                }
                            });

                        return function dispose() {
                            subscribed = false;
                        };
                    })
                })
                .map(function (data) {
                    var result = {
                        path: ["discount", data.uuid, "percentage"],
                        value: data.result.percentage
                    };
                    LOG.info(result);
                    return result;
                });
        }
    }
];

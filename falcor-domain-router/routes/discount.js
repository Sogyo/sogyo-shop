var rx = require('rx');
var restify = require('restify');
var bunyan = require('bunyan');
var LOG = require('../logger.js');

var discountclient = restify.createJsonClient({
    url: 'http://localhost:8080',
    log: LOG.child({
        component: 'server',
        level: bunyan.INFO,
        serializers: bunyan.stdSerializers
    }),
    version: '*'
});

module.exports = [
    {
        route: "discount[{keys:uuid}]",
        get: function (pathSet) {
            return rx.Observable
                .from(pathSet[1])
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
                                    observer.onNext(obj);
                                    observer.onCompleted();
                                }
                            });

                        return function dispose() {
                            subscribed = false;
                        };
                    })
                })
                .map(function (discount) {
                    return {
                        path: ["discount", [discount.CustomerID]],
                        value: discount.Percentage
                    }
                });
        }
    }, {
        route: "customer[{keys:uuid}]['discount']",
        get: function (pathSet) {
            return rx.Observable
                .from(pathSet[1])
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
                                    observer.onNext(obj);
                                    observer.onCompleted();
                                }
                            });

                        return function dispose() {
                            subscribed = false;
                        };
                    })
                })
                .map(function (discount) {
                    return {
                        path: ["customer", [discount.CustomerID], "discount"],
                        value: discount.Percentage
                    }
                });
        }
    }
];
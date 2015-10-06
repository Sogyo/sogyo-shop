var rx = require('rx');
var restify = require('restify');
var bunyan = require('bunyan');
var LOG = require('../logger.js');
var falcor = require('falcor');

var customerClient = restify.createJsonClient({
    url: 'http://localhost:4000',
    log: LOG.child({
        component: 'server',
        level: bunyan.INFO,
        serializers: bunyan.stdSerializers
    }),
    version: '*'
});

var $ref = falcor.Model.ref;
var $atom = falcor.Model.atom;

function executeGet(query) {
    return rx.Observable.create(function subscribe(observer) {
        var subscribed = true;

        customerClient.get('/' + query,
            function (err, req, res, obj) {
                if (!subscribed) {
                    return;
                }
                if (err) {
                    observer.onError(err);
                } else {
                    observer.onNext({
                        query: query,
                        result: obj
                    });
                    observer.onCompleted();
                }
            });

        return function dispose() {
            subscribed = false;
        };
    })
}

function all() {
    return executeGet('')
        .flatMap(function(result) {
            return rx.Observable.from(result.result);
        })
        .map(function (customer) {
            return $ref("customer['" + customer.uuid + "']");
        })
        .toArray()
        .map(function (all) {
            return {
                query: "all",
                result: all,
                length: $atom(all.length)
            }
        });
}

function size() {
    return executeGet('')
        .flatMap(function(result) {
            return rx.Observable.from(result.result);
        })
        .map(function(x) {
            return x;
        })
        .count()
        .map(function (count) {
            return {
                query: "size",
                result: count
            }
        });
}

function specific(spec) {
    return executeGet(spec)
        .map(function(result) {
            return result.result;
        })
        .map(function (customer) {
            return {
                query: spec,
                result: customer
            }
        });
}

var ordercache = {
    "0f22b52a-a530-44b9-ac10-54dd35c6b49f": {
        "size": 1,
        "all": [
            $ref("order['285e56ff-9499-46bd-90d9-fa23e717f376']")
        ]
    },
    "9a22b52a-a531-44b9-ff10-64dd35c6b49f": {
        "size": 0,
        "all": []
    }
};

module.exports = [
    {
        route: "customer[{keys:opts}]['uuid', 'firstName', 'lastName', 'email']",
        get: function (pathSet) {
            console.log('full customer object route');
            return rx.Observable
                .from(pathSet.opts)
                .flatMap(function(opt) {
                    return specific(opt);
                })
                .map(function (data) {
                    data.result.orders = ordercache[data.result.uuid];
                    var result = {
                        path: ["customer", data.query],
                        value: data.result
                    };
                    LOG.info(result);
                    return result;
                });
        }
    },
    {
        route: "customers[{keys:opts}]",
        get: function (pathSet) {
            console.log('short[] customer object route' + pathSet.opts);
            return rx.Observable
                .from(pathSet.opts)
                .flatMap(function(opt) {
                    if(opt === 'size') {
                        return size();
                    } else if (opt === 'all') {
                        return all();
                    } else {
                        return specific(opt);
                    }
                })
                .map(function (data) {
                    var result = {
                        path: ["customers", data.query],
                        value: data.result
                    };
                    LOG.info(result);
                    return result;
                });
        }
    },
    {
        route: "customers[{keys:opts}][{integers:range}]?",
        get: function (pathSet) {
            console.log('long with range' + pathSet.opts + ':' + pathSet.range);
            return rx.Observable
                .from(pathSet.opts)
                .flatMap(function(opt) {
                    if(opt === 'size') {
                        return size();
                    } else if (opt === 'all') {
                        return all();
                    } else {
                        return specific(opt);
                    }
                })
                .map(function (data) {
                    var result = {
                        path: ["customer", data.query],
                        value: data.result
                    };
                    LOG.info(result);
                    return result;
                });
        }
    }/*,
    {
        route: "customer['all'][{integers:range}]['uuid']",
        get: function (pathSet) {
            var start = pathSet.range[0];
            var end = pathSet.range[1] + 1;
            var cnt = start;
            return executeGet('')
                .flatMap(function(result) {
                    return rx.Observable.from(result.result);
                })
                .skip(start)
                .take(end)
                .map(function (data) {
                    var result = {
                        path: ["customer", "all", cnt++, "uuid"],
                        value: data.uuid
                    };
                    LOG.info(result);
                    return result;
                });
        }
    }*/
];
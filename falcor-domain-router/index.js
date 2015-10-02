var falcorExpress = require('falcor-express');
var Router = require('falcor-router');
var cors = require('cors');
var logger = require('./logger.js');

var express = require('express');
var app = express();

/*
var model = new falcor.Model({
    cache: {
        // customer service
        customer: {
            "0f22b52a-a530-44b9-ac10-54dd35c6b49f": {
                firstName: "First",
                lastName: "Last",
                email: "first@last.ext",
                order: [
                    $ref("order['285e56ff-9499-46bd-90d9-fa23e717f376']")
                ]
            },
            "9a22b52a-a531-44b9-ff10-64dd35c6b49f": {
                name: "foo",
                otherName: "bar",
                address: "foo@bar.baz",
                order: []
            }
        },
        // product service
        product: {
            "a4e11cc9-5d27-4290-a641-94879f59a5b7": {
                "name": "MyProduct",
                "description": "A product description",
                "price": 500
            },
            "ea150aec-fe33-4264-9097-0f2608b56485": {
                "name": "AnotherProduct",
                "description": "A different product description",
                "price": 75
            }
        },
        // order service
        order: {
            "285e56ff-9499-46bd-90d9-fa23e717f376": {
                "total": 866.25,
                "customer": $ref("customer['0f22b52a-a530-44b9-ac10-54dd35c6b49f']"),
                "discount": $ref("discount['285e56ff-9499-46bd-90d9-fa23e717f376']"),
                "orderlines": [
                    {
                        "line": 1,
                        "amount": 3,
                        "product": $ref("product['a4e11cc9-5d27-4290-a641-94879f59a5b7']")
                    },
                    {
                        "line": 2,
                        "amount": 1,
                        "product": $ref("product['ea150aec-fe33-4264-9097-0f2608b56485']")
                    }
                ]
            }
        },
        // discount service
        discount: {
            "285e56ff-9499-46bd-90d9-fa23e717f376": {
                "percentage": 45
            }
        }
    }
});
*/

app.use(cors());

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
    //return model.asDataSource();
    return new Router(
        [].concat(
            require('./routes/discount.js')
        )
    );
}));

// serve static files from current directory
app.use(express.static(__dirname + '/'));

var server = app.listen(3000);


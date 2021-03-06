'use strict';

angular.module('frontendApp')
  .factory('DomainCache', ['falcor', function (falcor) {
    var $ref = falcor.Model.ref;

    var offline = false;

    var model = {
      cache: {
        // customer service
        customers: {
          size: 2,
          all: [
            $ref("customer['0f22b52a-a530-44b9-ac10-54dd35c6b49f']"),
            $ref("customer['9a22b52a-a531-44b9-ff10-64dd35c6b49f']")
          ]
        },
        customer: {
          "0f22b52a-a530-44b9-ac10-54dd35c6b49f": {
            uuid: "0f22b52a-a530-44b9-ac10-54dd35c6b49f",
            firstName: "First",
            lastName: "Last",
            email: "first@last.ext",
            orders: {
              size: 1,
              all: [
                $ref("order['285e56ff-9499-46bd-90d9-fa23e717f376']")
              ]
            }
          },
          "9a22b52a-a531-44b9-ff10-64dd35c6b49f": {
            uuid: "9a22b52a-a531-44b9-ff10-64dd35c6b49f",
            firstName: "foo",
            lastName: "bar",
            email: "foo@bar.baz",
            orders: {
              size: 0,
              all: []
            }
          }
        },
        // product service
        product: {
          "a4e11cc9-5d27-4290-a641-94879f59a5b7": {
            uuid: "a4e11cc9-5d27-4290-a641-94879f59a5b7",
            name: "MyProduct",
            description: "A product description",
            price: 500
          },
          "ea150aec-fe33-4264-9097-0f2608b56485": {
            uuid: "ea150aec-fe33-4264-9097-0f2608b56485",
            name: "AnotherProduct",
            description: "A different product description",
            price: 75
          }
        },
        // order service
        order: {
          size: 1,
          all: [
            $ref("order['285e56ff-9499-46bd-90d9-fa23e717f376']")
          ],
          "285e56ff-9499-46bd-90d9-fa23e717f376": {
            uuid: "285e56ff-9499-46bd-90d9-fa23e717f376",
            total: 866.25,
            customer: $ref("customer['0f22b52a-a530-44b9-ac10-54dd35c6b49f']"),
            discountpercentage: $ref(["discount", "285e56ff-9499-46bd-90d9-fa23e717f376", "percentage"]),
            orderlines: {
              size: 2,
              all: [
                {
                  line: 1,
                  amount: 3,
                  product: $ref("product['a4e11cc9-5d27-4290-a641-94879f59a5b7']")
                },
                {
                  line: 2,
                  amount: 1,
                  product: $ref("product['ea150aec-fe33-4264-9097-0f2608b56485']")
                }
              ]
            }
          }
        },
        discount: {
          "285e56ff-9499-46bd-90d9-fa23e717f376": {
            uuid: "285e56ff-9499-46bd-90d9-fa23e717f376",
            percentage: 45
          }
        }
      }
    };

    if(! offline) {
      delete model.cache.discount;
      delete model.cache.customer;
    }

    return model;
  }]);

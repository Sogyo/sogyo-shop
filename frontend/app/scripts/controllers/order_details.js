'use strict';

angular.module('frontendApp')
  .controller('OrderDetailsCtrl', ['$scope', '$routeParams', 'DomainModel', 'DataUtil', function ($scope, $routeParams, DomainModel, DataUtil) {
    var model = DomainModel.model;

    $scope.uuid = $routeParams.uuid;

    $scope.order = {};
    $scope.orderlines = [];

    model.get(
      ["order", $scope.uuid, ["uuid", "total", "uuid"]],
      ["order", $scope.uuid, "customer", "uuid"],
      ["order", $scope.uuid, "discountpercentage", "percentage"],
      ["order", $scope.uuid, "orderlines", "size"]
    ).map(function (response) {
        return response.json.order[$scope.uuid];
      })
      .subscribe(function (data) {
        $scope.order = data;
        model.get(
          ["order", $scope.uuid, "orderlines", "all", {from: 0, to: $scope.order.orderlines.size - 1}, ["line", "amount"]],
          ["order", $scope.uuid, "orderlines", "all", {from: 0, to: $scope.order.orderlines.size - 1}, "product", ["uuid", "name", "price"]]
        ).map(function (response) {
            return response.json.order[$scope.uuid].orderlines.all;
          })
          .flatMap(function (all) {
            return DataUtil
              .extractModelProperties(all)
              .map(function (key) {
                return all[key];
              });
          })
          .subscribe(function (line) {
            console.log(line);
            $scope.orderlines.push(line);
          }, function (err) {
            console.error(err);
          });
      }, function (err) {
        console.error(err);
      });
  }]);

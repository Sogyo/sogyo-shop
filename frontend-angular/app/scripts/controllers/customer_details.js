'use strict';

angular.module('frontendApp')
  .controller('CustomerDetailsCtrl', ['$scope', '$timeout', '$routeParams', 'DomainModel', 'DataUtil', function ($scope, $timeout, $routeParams, DomainModel, DataUtil) {
    var model = DomainModel.model;

    $scope.uuid = $routeParams.uuid;

    $scope.customer = {};
    $scope.orders = [];

    model.get(
      ["customer", $scope.uuid, ["firstName", "lastName", "email", "uuid"]],
      ["customer", $scope.uuid, "orders", "size"]
    ).map(function (response) {
        return response.json.customer[$scope.uuid];
      })
      .subscribe(function (data) {
        $scope.customer = data;
      }, function (err) {
        console.error(err);
      });

    model.getValue(
      ["customer", $scope.uuid, "orders", "size"]
    ).flatMap(function(size) {
      return model.get(
        ["customer", $scope.uuid, "orders", "all", {from: 0, to: size - 1}, "uuid"]
      ).map(function(response) {
          return response.json.customer[$scope.uuid].orders.all;
        })
        .flatMap(function (all) {
          return DataUtil
            .extractModelProperties(all)
            .map(function(property) {
              return all[property].uuid;
          });
        });
    }).subscribe(function (uuid) {
        $timeout(function() {
          $scope.orders.push(uuid);
          $scope.$apply();
        });
      }, function (err) {
        console.error(err);
      }, function () {
      });
  }]);

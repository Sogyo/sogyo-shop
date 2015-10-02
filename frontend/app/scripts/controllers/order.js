'use strict';

angular.module('frontendApp')
  .controller('OrderCtrl', ['$scope', 'DomainModel', 'DataUtil', function ($scope, DomainModel, DataUtil) {
    var model = DomainModel.model;

    $scope.orders = [];

    model.getValue(
      ["order", "size"]
    ).flatMap(function (size) {
        return model
          .get(["order", "all", {from: 0, to: size - 1}, "uuid"])
          .map(function (response) {
            return response.json.order.all;
          })
          .flatMap(function (all) {
            return DataUtil.extractModelProperties(all)
              .map(function (index) {
                return all[index].uuid;
              });
          })
      }).subscribe(function (uuid) {
        $scope.orders.push(uuid);
      }, function (err) {
        console.error(err);
      });
  }]);

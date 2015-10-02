'use strict';

angular.module('frontendApp')
  .controller('CustomerCtrl', ['$scope', 'DomainModel', 'DataUtil', function ($scope, DomainModel, DataUtil) {
    var model = DomainModel.model;

    $scope.customers = [];

    model.getValue(
      ["customer", "size"]
    ).flatMap(function (size) {
        return model
          .get(["customer", "all", {from: 0, to: size - 1}, "uuid"])
          .map(function (response) {
            return response.json.customer.all;
          })
          .flatMap(function (all) {
            return DataUtil.extractModelProperties(all)
              .map(function (index) {
                return all[index].uuid;
              });
          })
      }).subscribe(function (uuid) {
        $scope.customers.push(uuid);
      }, function (err) {
        console.error(err);
      });
  }]);

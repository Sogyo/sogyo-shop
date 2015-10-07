'use strict';

angular.module('frontendApp')
  .controller('CustomerCtrl', ['$scope', '$timeout', 'DomainModel', 'DataUtil', function ($scope, $timeout, DomainModel, DataUtil) {
    var model = DomainModel.model;

    $scope.customers = [];

    model.getValue(
      ["customers", "size"]
    ).flatMap(function (size) {
        return model
          .get(["customers", "all", {from: 0, to: size - 1}, "uuid"])
          .map(function (response) {
            return response.json.customers.all;
          })
          .flatMap(function (all) {
            return DataUtil.extractModelProperties(all)
              .map(function (index) {
                return all[index].uuid;
              });
          });
      }).subscribe(function (uuid) {
        $timeout(function() {
          $scope.customers.push(uuid);
          $scope.$apply();
        });
      }, function (err) {
        console.error(err);
      }, function () {
      });
  }]);

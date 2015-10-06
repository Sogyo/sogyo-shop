'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', ['$scope', 'DomainModel', function ($scope, DomainModel) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var model = DomainModel.model;

    console.log('model');

    model.get(
      ["customer", "0f22b52a-a530-44b9-ac10-54dd35c6b49f", ["firstName", "email"]],
      ["customer", "0f22b52a-a530-44b9-ac10-54dd35c6b49f", "order", 0, "total"],
      ["customer", "0f22b52a-a530-44b9-ac10-54dd35c6b49f", "order", 0, "discountpercentage", "percentage"]
    ).map(function (response) {
        console.log(response.json.customer['0f22b52a-a530-44b9-ac10-54dd35c6b49f'].order[0]);
        console.log(response.json.customer['0f22b52a-a530-44b9-ac10-54dd35c6b49f'].order[0].discountpercentage);
        return response.json;
      })
      .subscribe(function (json) {
        console.log(json);
      }, function (err) {
        console.error(err);
      }, function () {
        console.log("OnComplete()");
      });
  }]);

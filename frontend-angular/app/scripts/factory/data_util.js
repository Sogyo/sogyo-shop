'use strict';

angular.module('frontendApp')
  .factory('DataUtil', ['rx', function (rx) {
    var RECORD_SEPARATOR = String.fromCharCode(0x1e);

    return {
      extractModelProperties: function (object) {
        return rx.Observable.create(function (observer) {
          for (var property in object) {
            if (object.hasOwnProperty(property) && ! property.startsWith(RECORD_SEPARATOR)) {
              observer.onNext(property);
            }
          }
          observer.onCompleted();
        });
      }
    };
  }]);

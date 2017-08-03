/*globals angular */

(function () {
    "use strict";

    angular.module("common.services")
        .factory("categoriesService", categoriesService);

    function categoriesService($http) {
        // esto me retorna una promesa
        return $http.get("/api/categorias");
    }
}());
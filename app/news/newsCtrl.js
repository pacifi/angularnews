/**
 * Created by pacifi on 7/18/17.
 */
/*globals angular:false */
(function () {
    "use strict";
    angular.module("newsWikiApp")
        .controller("NewsCtrl", NewsCtrl);

    //min-safe array
    function NewsCtrl($scope, newsResource) {
        $scope.mensaje = "Hola Curso Angular JS";
        var me = this;
        newsResource.query(function (data) {
            me.news = data;
        });

    }
}());
/**
 * Created by pacifi on 7/18/17.
 */
/*globals angular*/
(function () {
    "use strict";
    angular.module("newsWikiApp")
        .controller("NewsCtrl", ["$scope", "newsResource", NewsCtrl]);

    //min-safe array
    function NewsCtrl($scope, newsResource) {
        $scope.mensaje = "Hola Curso Angular JS"; // es mejor pasar el this con alias en el controlador. $scope trabaja tras bambalinas
        var me = this;
        newsResource.query(function (data) {
            me.news = data;
        });

        me.onCategoryClick = function (category){
            if(category){
                me.filterCategory = category;
            }else{
                me.filterCategory = "";
            }
        }
    }   
}());
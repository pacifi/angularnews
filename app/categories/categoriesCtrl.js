/*globals angular:false */

(function () {
    "use strict";

    angular.module("newsWikiApp")
        .controller("CategoriesCtrl", CategoriesCtrl)

    function CategoriesCtrl(categoriesService) {
        var me = this;

        categoriesService.then(function (response) {
            me.categories = response.data;
        });

        me.showCategories = false;

        me.toggleCategories = function () {
            me.showCategories = !me.showCategories;
        };

    }
}());
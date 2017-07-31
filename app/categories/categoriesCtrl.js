/*globals angular:false */

(function () {
    "use strict";

    angular.module("newsWikiApp")
        .controller("CategoriesCtrl", CategoriesCtrl)

    function CategoriesCtrl() {
        var me = this;

        me.categories = ['Politica', 'Economia', 'Deportes', 'Moda', 'Mundo'];

        me.showCategories = false;

        me.toggleCategories = function () {
            me.showCategories = !me.showCategories;
        };

    }
})();
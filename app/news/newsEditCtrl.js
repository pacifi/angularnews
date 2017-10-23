/**
 * Created by pacifi on 10/23/17.
 */
/* globals angular */
(function () {
    "use strict";
    angular.module("newsWikiApp")
        .controller("NewsEditCtrl", ["newsItem", NewsEditCtrl]);

    function NewsEditCtrl(newsItem) {
        var self = this;
        self.newsItem = newsItem;

        if (!self.newsItem.idNoticia) {
            self.titulo = "Nueva Noticia";

        } else {
            self.titulo = "Editar: " + self.newsItem.tituloNoticia;
        }

    }
}());
/**
 * Created by pacifi on 8/3/17.
 */
/* globals angular*/
(function () {
    "use strict";
    angular.module("common.services")
        .factory("newsResource", newsResource);

    function newsResource($resource) {
        return $resource("/api/noticias/:id");
    }
}());
$(function () {
    'use strict';
    $("#wr-tabs").on("click", ".tab", function () {

        var tabs = $("#wr-tabs .tab"),
            cont = $("#wr-tabs .tab-cont");

        // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active");
        // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");

        return false;
    });
});

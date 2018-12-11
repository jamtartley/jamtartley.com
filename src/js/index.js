import "./color_crunch.js";
import "./homepage.js";

$(document).ready(function() {
    $("#fullpage").fullpage({
        touchSensitivity: 25,
        anchors: ["homepage", "color_crunch"]
    });
});

$("#scroll-down").click(function() {
    $.fn.fullpage.moveSectionDown();
});

$(document).ready(function() {

    $(".sidebar-lessons").click(function() {
        $(".sidebar-band").removeClass("selected");
        $(".sidebar-lessons").addClass("selected");
    
        location.href = 'index.html';
    });

});
$(document).ready(function() {

    $(".sidebar-lessons").click(function() {
        $(".sidebar-band").removeClass("selected");
        $(".sidebar-lessons").addClass("selected");
        // TODO: animate clouds moving out
        
        setTimeout(() => {
            location.href = 'index.html';
        }, 1000);
    });

});
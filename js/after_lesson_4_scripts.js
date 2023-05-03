$(document).ready(function() {

    $(".view-band-button").click(function() {
        sessionStorage.setItem("completed", "true");
        location.href = 'band.html';
    });

});
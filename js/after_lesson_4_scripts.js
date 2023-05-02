$(document).ready(function() {

    sessionStorage.setItem("completed", "true");

    $(".view-band-button").click(function() {
        location.href = 'band.html';
    });

});
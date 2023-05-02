$(document).ready(function() {

    sessionStorage.setItem("completed", "true");
    $(".streak-text").text("5");
    $(".view-band-button").click(function() {
        location.href = 'band.html';
    });

});
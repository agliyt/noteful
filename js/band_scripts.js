$(document).ready(function() {

    if (sessionStorage.getItem("completed") == "true") {
        $(".phone2").append('<img class="band-gus" src="assets/gus.png"/>');
        $(".streak-text").text("5");
        $(".phone2").after(`
            <div>
                <audio autoplay loop controls style="margin: 0 auto; display: block;">
                    <source id="audio-band" src="audio/guitar.mp3" type="audio/mp3">
                </audio>
            </div>
        `)
    } else {
        $(".phone2").after(`
            <div>
                <audio autoplay loop controls style="margin: 0 auto; display: block;">
                    <source id="audio-band" src="audio/no_guitar.mp3" type="audio/mp3">
                </audio>
            </div>
        `)
    }

    $(".sidebar-lessons").click(function() {
        $(".sidebar-band").removeClass("selected");
        $(".sidebar-lessons").addClass("selected");
    
        location.href = 'index.html';
    });

});
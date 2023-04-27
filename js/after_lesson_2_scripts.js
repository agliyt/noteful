$(document).ready(function() {

    function changeProgressBar() {
        $(".streak-in-circle-text").text("5 days");
        var i = 0;
        if (i == 0) {
            i = 1;
            var deg = 18;
            var id = setInterval(frame, deg);

            function frame() {
                if (deg >= 90) {
                    clearInterval(id);
                    i = 0;
                } else {
                    deg++;
                    $(".streak-circle-progress-bar").css("background-image", "linear-gradient(90deg, transparent 50%, #E5A162 50%), linear-gradient(" + deg + "deg, #E5A162 50%, transparent 50%)");
                }
            }
        }
    }

    function twinkle() {
        var image = "assets/star-default.png"
        setInterval(function () {
            if (image == "assets/star-default.png") {
                image = "assets/star-twinkling.png"
            } else {
                image = "assets/star-default.png"
            }
            $(".star").attr("src", image);
        }, 500);
    }

    function changeStreakCircleHeight() {
        var i = 0;
        if (i == 0) {
            i = 1;
            var top = 119;
            var id = setInterval(frame, top);

            function frame() {
                if (top >= 159) {
                    clearInterval(id);
                    i = 0;
                    $(".phone2").append('<h1 class="streak-message">You reached a 5 day streak!</h1>');
                    $(".phone2").append(`
                        <img class="star star-1" src="assets/star-default.png"/>
                        <img class="star star-2" src="assets/star-default.png"/>
                        <img class="star star-3" src="assets/star-default.png"/>
                        <img class="star star-4" src="assets/star-default.png"/>
                        <img class="star star-5" src="assets/star-default.png"/>
                    `);
                    twinkle();
                } else {
                    top += 2;
                    $(".streak-circle-1").css("top", top + "px");
                }
            }
        }
    }

    function showNext() {
        $(".phone2").append(`
            <div class="next-button">
                <h1 class="next-text">Next</h1>
            </div>
        `);
        $(".next-button").click(function() {
            location.href = 'after-lesson-3.html';
        });
    }

    setTimeout(changeStreakCircleHeight, 200);
    setTimeout(changeProgressBar, 1000);
    setTimeout(showNext, 3500);
});
